import { Suspense } from "react";
import type { Metadata } from "next";
import { IBM_Plex_Sans, Roboto, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-body",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-ui",
  subsets: ["latin"],
});

const SITE_URL = "https://indpexglobal.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Indpex Global | Authorised Bearing Distributor — SKF, FAG, NBC, Timken, NTN",
    template: "%s | Indpex Global",
  },
  description:
    "Indpex Global is an authorised Indian industrial bearing distributor supplying SKF, FAG/Schaeffler, NBC, Timken and NTN bearings. Deep groove, tapered roller, spherical roller, pillow block & more. Contact: contact@indpexglobal.com",
  keywords: [
    "bearing distributor India",
    "SKF bearings",
    "FAG bearings",
    "Schaeffler bearings",
    "NBC bearings",
    "Timken bearings",
    "NTN bearings",
    "deep groove ball bearings",
    "tapered roller bearings",
    "spherical roller bearings",
    "cylindrical roller bearings",
    "pillow block bearing",
    "industrial bearings supplier India",
    "bearing stockist",
    "Himanshu Bearings",
    "Vaibhav Ball Bearings",
    "Indpex Global",
  ],
  authors: [{ name: "Indpex Global", url: SITE_URL }],
  creator: "Indpex Global",
  publisher: "Indpex Global",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Indpex Global",
    title: "Indpex Global | Authorised Bearing Distributor — SKF, FAG, NBC, Timken, NTN",
    description:
      "Authorised Indian distributor for SKF, FAG/Schaeffler, NBC, Timken and NTN industrial bearings. Over 45 bearing types in stock. Request a quote today.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Indpex Global — Industrial Bearing Distributor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indpex Global | Authorised Bearing Distributor",
    description:
      "Authorised Indian distributor for SKF, FAG, NBC, Timken and NTN industrial bearings. 45+ bearing types. Request a quote: contact@indpexglobal.com",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
};

// JSON-LD Structured Data — LocalBusiness + Organization
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Indpex Global",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-78777-44377",
        email: "contact@indpexglobal.com",
        contactType: "sales",
        availableLanguage: ["English", "Hindi"],
      },
      sameAs: [],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Indpex Global — Himanshu Bearings & Vaibhav Ball Bearings",
      description:
        "Authorised distributor for SKF, FAG/Schaeffler, NBC, Timken and NTN industrial bearings in India. Est. 1995.",
      url: SITE_URL,
      telephone: "+91-78777-44377",
      email: "contact@indpexglobal.com",
      foundingDate: "1995",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Bank Transfer",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Indpex Global",
      description: "Industrial bearing distributor for SKF, FAG, NBC, Timken and NTN in India.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/products?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${roboto.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
       <body className="antialiased">
        <ScrollReveal />
        <Suspense>
          <Navbar />
        </Suspense>
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
