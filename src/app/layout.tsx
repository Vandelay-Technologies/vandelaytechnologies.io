import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vandelay Technologies | Full-Service Web3 Solutions Provider",
  description: "Empowering blockchain projects to scale and succeed with tailored Web3 development, smart contract engineering, and growth strategy. Partner with Vandelay Technologies to unlock your project's full potential.",
  openGraph: {
    title: "Vandelay Technologies | Full-Service Web3 Solutions Provider",
    description: "Empowering blockchain projects to scale and succeed with tailored Web3 development, smart contract engineering, and growth strategy. Partner with Vandelay Technologies to unlock your project's full potential.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vandelay Technologies OG Image',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
