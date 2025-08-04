"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/asset/yy.png";
import { useRouter, usePathname } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { Burger, Collapse, Flex } from "@mantine/core";
import { Globe, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";



export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [opened, { toggle, close }] = useDisclosure(false);

  const currentLanguage = pathname.split("/")[1] || "en";
  const languageFlags: Record<string, string> = {
    en: "🇺🇸",
    am: "AM",
  };

  const handleLanguageChange = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    const newPath = segments.join("/");
    router.push(newPath);
  };
  const handleLinkClick = (path: string) => {
    close(); // Close the menu
    router.push(path); // Navigate to the specified path
  };

  return (
    <>
      <div className="hidden md:flex items-center justify-between bg-[#333333] fixed top-0 left-0 w-full h-[70px] px-10 z-50 text-white">
        {/* Left - Burger Menu + Collapse */}

<div className="w-[100px]">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="font-semibold">Language</span>
            <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            <DropdownMenuItem
              onClick={() => handleLanguageChange("en")}
              className="flex cursor-pointer items-center gap-2"
            >
              <span>🇺🇸</span>
              English
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleLanguageChange("am")}
              className="flex cursor-pointer items-center gap-2"
            >
              <span>🇨🇳</span>
              Amharic
            </DropdownMenuItem>
           
          </DropdownMenuContent>
        </DropdownMenu>
        </div>

        {/* Center - Logo */}
        
        <Link
          href={`/${pathname.split("/")[1]}/`}
          onClick={() => handleLinkClick("/")}
          className="flex items-center justify-center"
        >
          <Image src={logo} alt="logo" width={200} height={200} />
        </Link>

        {/* Right - Language Switch */}
        <div className="flex items-center gap-4 w-[100px] justify-end">
          <Burger
            opened={opened}
            onClick={toggle}
            size="24px"
            color="#fff"
            className="border rounded"
          />
        </div>
      </div>

      {/* Collapsible Menu */}
      <div className="w-[100px]">
      <Collapse in={opened}>
        <div className="hidden md:block fixed  w-full h-screen bg-[#333333] z-40">
          <Flex
            direction="column"
            align="center"
            className=" py-[100px] border-t text-[#E4D18F] text-[30px] h-screen flex flex-row justify-between"
          >
            {["", "about", "members", "events", "contact us", "martyrs", "get involved"].map((page) => {
  const slug = page === "" ? "" : page.toLowerCase().replace(/\s+/g, "-");
  const displayText = page === "" ? "Home" : page.charAt(0).toUpperCase() + page.slice(1);

  return (
    <Link
      key={page}
      href={`/${pathname.split("/")[1]}/${slug}`}
      onClick={() => handleLinkClick(`/${slug}`)}
    >
      {displayText}
    </Link>
  );
})}
          </Flex>
        </div>
      </Collapse>
      </div>
    </>
  );
};

export const MobileNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [opened, { toggle, close }] = useDisclosure(false);

  const currentLanguage = pathname.split("/")[1] || "en";
  const languageFlags: Record<string, string> = {
    en: "🇺🇸",
    am: "AM",
  };

  const handleLanguageChange = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  const handleLinkClick = (path: string) => {
    close();
    router.push(path);
  };

  return (
    <>
      <div className="md:hidden flex justify-between items-center h-[50px] w-full bg-[#333333] fixed top-0 left-0 z-50 px-4 shadow">
        <div className="flex-1 text-center">
          <Link
            href={`/${pathname.split("/")[1]}/`}
            onClick={() => handleLinkClick("/")}
          >
            <Image
              src={logo}
              alt="logo"
              width={40}
              height={40}
              className="inline"
            />
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <span>{languageFlags[currentLanguage]}</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#333333]">
              <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
                🇺🇸 English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("am")}>
                AM Amharic
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Burger opened={opened} onClick={toggle} size="24px" color="#000" />
        </div>
      </div>

      <Collapse in={opened}>
        <div className="md:hidden fixed top-[50px] left-0 w-full bg-[#333333] z-40 shadow">
          <Flex
            direction="column"
            align="center"
            className="gap-4 py-4 border-t"
          >
            {["", "about", "products", "contact"].map((page) => (
              <Link
                key={page}
                href={`/${pathname.split("/")[1]}/${page}`}
                onClick={() => handleLinkClick(`/${page}`)}
              >
                {page === ""
                  ? "Home"
                  : page.charAt(0).toUpperCase() + page.slice(1)}
              </Link>
            ))}
          </Flex>
        </div>
      </Collapse>
    </>
  );
};
