import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Yetarik Adera",
    description: "Yetarik Adera",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            
            <body className="antialiased bg-[#F7F4E9] min-h-screen flex flex-col overflow-x-hidden">
                <svg className="fixed inset-0 w-full h-full -z-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 700 700" width="100%" height="100%" opacity="1" preserveAspectRatio="none">
                <defs><filter id="nnnoise-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
	<feTurbulence type="fractalNoise" baseFrequency="0.092" numOctaves="4" seed="15" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
	<feSpecularLighting surfaceScale="5" specularConstant="0.8" specularExponent="20" lighting-color="#63340b" x="0%" y="0%" width="100%" height="100%" in="turbulence" result="specularLighting">
    		<feDistantLight azimuth="3" elevation="85"></feDistantLight>
  	</feSpecularLighting>
  
</filter></defs>
                    <rect width="100%" height="100%" fill="#ffffff00"></rect>
                    <rect width="100%" height="100%" fill="#8b572a" filter="url(#nnnoise-filter)"></rect>
                    <rect x="0" y="0" width="100%" height="100%" fill="none"  strokeWidth="4" vectorEffect="non-scaling-stroke"></rect>
                </svg>
                {children}
            </body>
        </html>
    );
} 



