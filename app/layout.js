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

const siteUrl = 'https://swiftdeliver.io';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SwiftDeliver — Real-Time Delivery Management Platform',
    template: '%s | SwiftDeliver',
  },
  description:
    'SwiftDeliver gives logistics teams a live dashboard to track drivers, manage deliveries, and hit SLA targets — all from one powerful command center.',
  keywords: [
    'delivery management software',
    'logistics dashboard',
    'real-time tracking',
    'fleet management',
    'last-mile delivery',
    'delivery operations',
    'route optimization',
    'courier management system',
  ],
  authors: [{ name: 'SwiftDeliver', url: siteUrl }],
  creator: 'SwiftDeliver',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'SwiftDeliver',
    title: 'SwiftDeliver — Real-Time Delivery Management Platform',
    description:
      'Track every driver. Manage every delivery. Hit every SLA. SwiftDeliver gives logistics teams a live command center.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SwiftDeliver Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SwiftDeliver — Real-Time Delivery Management',
    description:
      'Track drivers, manage deliveries, and hit SLA targets — all from one powerful dashboard.',
    images: ['/og-image.png'],
    creator: '@swiftdeliver',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2b2d42" />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'SwiftDeliver',
              applicationCategory: 'BusinessApplication',
              description:
                'Real-time delivery management platform for logistics teams.',
              url: siteUrl,
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              operatingSystem: 'Web',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
