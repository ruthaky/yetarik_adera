'use client'

import React, { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { useParams, useSearchParams } from "next/navigation"
import Navbar from "@/app/shared/navbar/navbar"
import Footer from "@/app/shared/footer/footer"
import { Button } from "@/components/ui/button"

type ChapaVerifyResponse = {
  status?: string
  message?: string
  data?: {
    tx_ref?: string
    amount?: string | number
    currency?: string
    status?: string
    created_at?: string
    first_name?: string
    last_name?: string
    email?: string
    mobile?: string
    reference?: string
  }
  error?: string
}

export default function DonateReceiptPage() {
  const params = useParams<{ lang: string }>()
  const searchParams = useSearchParams()
  const txRef = useMemo(
    () => searchParams.get("tx_ref") || searchParams.get("trx_ref"),
    [searchParams]
  )

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [verification, setVerification] = useState<ChapaVerifyResponse | null>(null)

  useEffect(() => {
    const verify = async () => {
      if (!txRef) {
        setError("Transaction reference is missing.")
        setLoading(false)
        return
      }

      try {
        const response = await fetch(`/api/chapa/verify?tx_ref=${encodeURIComponent(txRef)}`)
        const data = await response.json()

        if (!response.ok) {
          setError(data?.error || "Could not verify transaction.")
        } else {
          setVerification(data)
        }
      } catch {
        setError("Could not verify transaction.")
      } finally {
        setLoading(false)
      }
    }

    verify()
  }, [txRef])

  const receipt = verification?.data
  const status = receipt?.status || verification?.status || "unknown"

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 py-24 sm:px-6">
        <div className="mx-auto w-full max-w-2xl rounded-md border border-[#B27C3A] bg-white p-6 sm:p-8">
          <h1 className="mb-2 text-2xl font-semibold text-black">Donation Receipt</h1>
          <p className="mb-6 text-sm text-gray-600">Your donation result is saved on this page.</p>

          {loading && <p className="text-black">Loading receipt...</p>}

          {!loading && error && (
            <div className="space-y-3">
              <p className="text-red-600">{error}</p>
              {txRef && <p className="text-sm text-gray-700">tx_ref: {txRef}</p>}
            </div>
          )}

          {!loading && !error && (
            <div className="space-y-2 text-black">
              <p><strong>Status:</strong> {status}</p>
              <p><strong>tx_ref:</strong> {receipt?.tx_ref || txRef || "N/A"}</p>
              <p><strong>Amount:</strong> {receipt?.amount || "N/A"} {receipt?.currency || ""}</p>
              <p><strong>Reference:</strong> {receipt?.reference || "N/A"}</p>
              <p><strong>Name:</strong> {[receipt?.first_name, receipt?.last_name].filter(Boolean).join(" ") || "N/A"}</p>
              <p><strong>Email:</strong> {receipt?.email || "N/A"}</p>
              <p><strong>Phone:</strong> {receipt?.mobile || "N/A"}</p>
              <p><strong>Date:</strong> {receipt?.created_at || "N/A"}</p>
            </div>
          )}

          <div className="mt-8">
            <Link href={`/${params?.lang || "en"}/donate`}>
              <Button>Go back</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
