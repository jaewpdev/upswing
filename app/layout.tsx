import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";
import { ContactProvider } from "@/src/context/contactContext";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Upswing",
  description:
    "We're ready to rock and roll. It's time to swing back to the top where you belong.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContactProvider>
      <html lang="en">
        <body className={`${manrope.className} pt-[72px] md:pt-[128px]`}>
          <Nav />
          {children}
          <Footer />
        </body>
      </html>
    </ContactProvider>
  );
}
