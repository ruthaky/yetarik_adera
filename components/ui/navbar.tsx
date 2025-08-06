"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/asset/yy.png";
import { useRouter, usePathname } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { Burger, Flex } from "@mantine/core";
import { Globe, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
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

  return (
    <>
      <div className="hidden md:flex items-center justify-between bg-[#333333] fixed top-0 left-0 w-full h-[70px] px-10 z-[9999] text-white shadow-lg">
        {/* Language Dropdown */}
        <div className="w-[100px]">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span className="font-semibold">Lang</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-black">
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
          <Image src={logo} alt="logo" width={160} height={160} />
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
            className="hidden md:block fixed top-[70px] left-0 w-full h-screen bg-[#333333] text-[#E4D18F] z-[9998]"
          >
            <Flex
              direction="column"
              align="center"
              className="py-20 space-y-10 text-2xl"
            >
              {["", "about", "members", "events", "contact us", "martyrs", "get involved"].map((page) => {
                const slug = page === "" ? "" : page.toLowerCase().replace(/\s+/g, "-");
                const displayText = page === "" ? "Home" : page.charAt(0).toUpperCase() + page.slice(1);
                return (
                  <Link
                    key={page}
                    href={`/${currentLang}/${slug}`}
                    onClick={() => handleLinkClick(`/${slug}`)}
                    className="hover:text-yellow-400 transition"
                  >
                    {displayText}
                  </Link>
                );
              })}
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const MobileNavbar = () => {
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

  return (
    <>
      <div className="md:hidden flex justify-between items-center h-[50px] w-full bg-[#333333] fixed top-0 left-0 z-[9999] px-4 shadow">
        <Link
          href={`/${currentLang}/`}
          onClick={() => handleLinkClick("/")}
          className="flex-1 text-center"
        >
          <Image src={logo} alt="logo" width={40} height={40} className="inline" />
        </Link>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-white">
              <span>{languageFlags[currentLang]}</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#333333] text-white">
              <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
                🇺🇸 English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("am")}>
                🇪🇹 Amharic
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Burger opened={opened} onClick={toggle} size="24px" color="#fff" />
        </div>
      </div>

      <AnimatePresence>
        {opened && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed top-[50px] left-0 w-full bg-[#333333] z-[9998] shadow"
          >
            <Flex direction="column" align="center" className="py-4 gap-4 text-white">
              {["", "about", "products", "contact"].map((page) => {
                const slug = page === "" ? "" : page.toLowerCase();
                const label = page === "" ? "Home" : page.charAt(0).toUpperCase() + page.slice(1);
                return (
                  <Link
                    key={page}
                    href={`/${currentLang}/${slug}`}
                    onClick={() => handleLinkClick(`/${slug}`)}
                    className="hover:text-yellow-400 transition"
                  >
                    {label}
                  </Link>
                );
              })}
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
