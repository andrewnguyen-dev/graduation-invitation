import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
const arsenica = localFont({
  src: [
    {
      path: "./fonts/ArsenicaTrial-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/ArsenicaTrial-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/ArsenicaTrial-DemiBold.ttf",
      weight: "600",  
    },
    {
      path: "./fonts/ArsenicaTrial-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-arsenica",
});

import { Raleway, EB_Garamond, Meddon, WindSong } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
});
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-eb-garamond",
});
const meddon = Meddon({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-meddon",
});
const windSong = WindSong({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-wind-song",
});

export const metadata: Metadata = {
  title: "Andrew's Graduation Invitation",
  description: "Your presence will make this day truly memorable. We look forward to sharing this special moment with youuu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#f3f0ec] ${raleway.variable} ${ebGaramond.variable} ${meddon.variable} ${windSong.variable} ${arsenica.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
