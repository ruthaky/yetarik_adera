"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/asset/yy.png";
import { useRouter, usePathname } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { Burger, Flex } from "@mantine/core";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";
import { Noto_Serif_Ethiopic } from "next/font/google";

const notoSerifEthiopic = Noto_Serif_Ethiopic({
  weight: ["400"],
  subsets: ["ethiopic"],
  display: "swap",
  variable: "--font-noto-ethiopic",
});

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [opened, { toggle, close }] = useDisclosure(false);
  const currentLang = pathname.split("/")[1] || "en";

  const languageFlags: Record<string, string> = {
    en: "🇺🇸",
    am: "🇪🇹",
  };

  const handleLanguageChange = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
  };

  const handleLinkClick = (path: string) => {
    close();
    router.push(path);
  };

  // ✅ Navbar translations
  const navLinks: Record<
    string,
    { slug: string; en: string; am: string }[]
  > = {
    links: [
      { slug: "", en: "Home", am: "መነሻ ገጽ" },
      { slug: "about", en: "About", am: "ስለ" },
      { slug: "martyrs", en: "Martyrs", am: "ሰማዕታት" },
      { slug: "members", en: "Members", am: "አባላት" },
      { slug: "events", en: "Events", am: "ክስተቶች" },
      { slug: "contact-us", en: "Contact us", am: "ያግኙን" },
      { slug: "get-involved", en: "Get involved", am: "ተሳተፍ" },
    ],
  };

  return (
    <>
      <div
        className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic flex items-center justify-between bg-[#333333] fixed top-0 left-0 w-full h-[70px] px-4 md:px-10 z-[9999] text-white shadow-lg`}
      >
        {/* Language Dropdown */}
        <div className="w-[100px]">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2">
              <span className="text-xl">{languageFlags[currentLang]}</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-black z-[10000]">
              <DropdownMenuItem
                onClick={() => handleLanguageChange("en")}
                className="cursor-pointer flex gap-2"
              >
                🇺🇸 English
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleLanguageChange("am")}
                className="cursor-pointer flex gap-2"
              >
                🇪🇹 Amharic
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Logo */}
        <Link
          href={`/${currentLang}/`}
          onClick={() => handleLinkClick("/")}
          className="flex items-center justify-center"
        >
          <Image src={logo} alt="logo" width={200} height={200} />
        </Link>

        {/* Burger */}
        <div className="w-[100px] flex justify-end">
          <Burger
            opened={opened}
            onClick={toggle}
            size="24px"
            color="#fff"
            className="border rounded"
          />
        </div>
      </div>

      {/* Animated Collapse Menu */}
      <AnimatePresence>
        {opened && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic fixed top-[70px] left-0 w-full h-screen bg-[#774E1D]/80 z-50 text-white z-[9998]`}
          >
            <Flex
              direction="column"
              align="center"
              className="py-20 space-y-10 text-2xl"
            >
              {navLinks.links.map(({ slug, en, am }) => (
                <Link
                  key={slug}
                  href={`/${currentLang}/${slug}`}
                  onClick={() => handleLinkClick(`/${slug}`)}
                  className="hover:text-yellow-400 transition"
                >
                  {currentLang === "am" ? am : en}
                </Link>
              ))}
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
