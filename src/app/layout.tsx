import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConsentBanner from "@/components/consent-banner";
import { aboutPage, schemaOrganization, website } from "@/lib/SchemaJsonLd";
import { faqPage } from "@/lib/SchemaJsonLd";
import { settings } from "@/settings";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: settings.title,
  description: settings.description,
  keywords: settings.keywords,
  applicationName: settings.name,
  authors: [
    {
      name: settings.name,
      url: settings.author.url
    }
  ],
  creator: settings.name,
  publisher: settings.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: settings.title,
    description: settings.description,
    url: settings.base_url,
    siteName: settings.name,
    locale: settings.locale,
    type: "website",
    images: [
      {
        url: settings.base_url + '/og-image.png',
        width: 1200,
        height: 630,
        alt: settings.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
  twitter: {
    card: 'summary_large_image',
    title: settings.title,
    description: settings.description,
    site: settings.base_url,
    creator: settings.author.url,
    images: [
      { url: settings.base_url + '/og-image.png', width: 1200, height: 630, alt: settings.name },
    ],
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: schemaOrganization({
              base_url: settings.base_url,
              site_title: settings.name,
              email: settings.email,
              author: settings.author
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: website({
              base_url: settings.base_url,
              site_title: settings.name,
              language: settings.locale
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: faqPage(settings.faq)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: aboutPage({
              base_url: settings.base_url,
              site_title: settings.name,
              description: settings.description
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
