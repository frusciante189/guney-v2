import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Güney Çuceloğlu | European Market Entry for Turkish Manufacturers",
    template: "%s | Güney Çuceloğlu"
  },
  description: "Expert support for Turkish manufacturers expanding into European markets. Trade fair execution, contract negotiation, payment infrastructure, and ongoing support for successful market entry.",
  keywords: [
    "European market entry",
    "Turkish manufacturers",
    "trade fair support",
    "contract negotiation",
    "international payments",
    "market expansion",
    "Germany market entry",
    "manufacturing exports",
    "B2B consulting",
    "export consulting"
  ],
  authors: [{ name: "Güney Çuceloğlu" }],
  creator: "Güney Çuceloğlu",
  publisher: "Güney Çuceloğlu",
  metadataBase: new URL("https://guneycuceloglu.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["tr_TR", "de_DE"],
    url: "https://guneycuceloglu.com",
    title: "Güney Çuceloğlu | European Market Entry Specialist",
    description: "Helping Turkish manufacturers expand into European markets with confidence.",
    siteName: "Güney Çuceloğlu",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Güney Çuceloğlu - European Market Entry Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Güney Çuceloğlu | European Market Entry Specialist",
    description: "Expert support for Turkish manufacturers expanding into Europe",
    images: ["/og-image.jpg"],
    creator: "@guneycuceloglu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakartaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
