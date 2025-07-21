import Image from "next/image";
import footerLogo from "@/public/asset/SURGE CROPS.png";

export const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 px-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center space-y-6 lg:space-y-0">
        <div className="flex items-center gap-6">
          <Image src={footerLogo} alt="logo" className="w-[300px] " />
        </div>

        <div className="text-right space-y-2">
          <p className="text-sm lg:text-base">Phone: +1 (555) 123-4567</p>
          <p className="text-sm lg:text-base">Email: contact@company.com</p>
          <p className="text-sm lg:text-base">
            Address: 123 Main Street, City, Country
          </p>
        </div>
      </div>
    </footer>
  );
};
