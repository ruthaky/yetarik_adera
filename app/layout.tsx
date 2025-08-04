"use client"
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import Footer from "./shared/footer/footer";
import { MantineProvider } from "@mantine/core";
import { usePathname } from "next/navigation";

// export const metadata: Metadata = {
//     title: "Yetarik Adera",
//     description: "Yetarik Adera",
// };

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
                    const pathname = usePathname();
    return (
        <html lang="en">
            <body className="antialiased bg-white min-h-screen flex flex-col overflow-x-hidden">
                 <MantineProvider>
              
                {children}</MantineProvider>
 {pathname !== "/en" && <Footer />}
            </body>
        </html>
    );
} 