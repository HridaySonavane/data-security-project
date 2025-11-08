import type { Metadata } from "next";
import { Inter, Syne, Fira_Code, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const nunito = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const syne = Syne({
  // expose Syne as a dedicated display variable
  variable: "--font-display",
  subsets: ["latin"],
});

const fira = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Signora | Digital Signature Verification",
  description:
    "Signora simplifies digital signature verification — sign files securely with your private key and verify authenticity using a public key. Ensure document integrity and trust with elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${syne.variable} ${fira.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
