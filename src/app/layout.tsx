import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import SiteFooter from "@/components/layout/SiteFooter";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iqsyndicate.org"),
  alternates: {
    canonical: "https://iqsyndicate.org",
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  title: {
    default: "IQ Syndicate",
    template: "%s | IQ Syndicate",
  },
  description:
    "IQ Syndicate is an African-led climate finance platform focused on advisory, technical assistance, blended finance, and portfolio aggregation.",
  openGraph: {
    url: "https://iqsyndicate.org",
    siteName: "IQ Syndicate",
    title: "IQ Syndicate",
    description:
      "Enabling African-led climate ventures to scale through patient capital and structured support.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "IQ Syndicate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IQ Syndicate",
    description:
      "Enabling African-led climate ventures to scale through patient capital and structured support.",
    images: ["/images/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${cormorant.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
