  import type { Metadata } from "next";
  import { Inter } from "next/font/google";
  import "./globals.css";

  const geistSans = Inter({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

export const metadata: Metadata = {
  title: "VisioByte - AI-Powered Visual Intelligence Solutions",
  description: "Transform your business with VisioByte's cutting-edge AI visual intelligence platform. Advanced computer vision, image recognition, and visual analytics for modern enterprises.",
  keywords: [
    "AI visual intelligence",
    "computer vision",
    "image recognition",
    "visual analytics",
    "machine learning",
    "artificial intelligence",
    "business intelligence",
    "data visualization"
  ],
  authors: [{ name: "VisioByte Team" }],
  creator: "VisioByte",
  publisher: "VisioByte",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://visiobyte.com",
    title: "VisioByte - AI-Powered Visual Intelligence Solutions",
    description: "Transform your business with VisioByte's cutting-edge AI visual intelligence platform.",
    siteName: "VisioByte",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VisioByte - AI Visual Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VisioByte - AI-Powered Visual Intelligence Solutions",
    description: "Transform your business with VisioByte's cutting-edge AI visual intelligence platform.",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  category: "technology",
  classification: "AI Technology",
  verification: {
    google: "your-google-verification-code",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    "msapplication-TileColor": "#3b82f6",
    "theme-color": "#3b82f6",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="VisioByte" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
