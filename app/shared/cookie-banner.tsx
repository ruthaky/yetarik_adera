"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function CookieBanner() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setShowCookieBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowCookieBanner(false);
  };

  if (!showCookieBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 text-white p-4 flex flex-col md:flex-row items-start md:items-center justify-between z-50 space-y-4 md:space-y-0 md:space-x-4">
      <p className="text-sm md:text-base leading-tight md:mr-4 md:flex-1">
        We use cookies to enhance your experience and provide essential website
        functionality. These cookies help us analyze site traffic, personalize
        content, and improve our services. By continuing to visit this site, you
        agree to our use of cookies. You can learn more about how we use cookies
        in our Privacy Policy.
      </p>
      <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
        <Button
          onClick={acceptCookies}
          className="whitespace-nowrap bg-white hover:text-white text-black p-2 text-sm w-full md:w-auto"
        >
          Accept Cookies
        </Button>
        <Button
          onClick={() => setShowCookieBanner(false)}
          className="whitespace-nowrap bg-transparent border hover:bg-transparent hover:border-transparent border-white text-white p-2 text-sm w-full md:w-auto"
        >
          Reject
        </Button>
      </div>
    </div>
  );
}
