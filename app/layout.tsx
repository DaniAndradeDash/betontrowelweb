import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beton Trowel | Maquinaria Ligera para Construcción",
  description: "Venta y renta de maquinaria ligera y herramienta de acabado para la construcción en México.",
  openGraph: {
    title: "Beton Trowel | Maquinaria Ligera para Construcción",
    description: "Venta y renta de maquinaria ligera y herramienta de acabado para la construcción en México.",
    locale: "es_MX",
    type: "website",
    siteName: "Beton Trowel México",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beton Trowel | Maquinaria Ligera para Construcción",
    description: "Venta y renta de maquinaria ligera y herramienta de acabado para la construcción en México.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Equipos y Superficies de México",
  alternateName: "Beton Trowel México",
  url: "https://betontrowel.mx",
  logo: "https://betontrowel.mx/logos/BETON-TROWEL-LOGO-SITE-ICON.png",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+52-444-256-7853",
      contactType: "sales",
      areaServed: "MX",
      availableLanguage: "Spanish",
    },
    {
      "@type": "ContactPoint",
      telephone: "+52-81-1018-0615",
      contactType: "sales",
      areaServed: "MX",
      availableLanguage: "Spanish",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mariano Escobedo 1456-Norte, Treviño",
    addressLocality: "Monterrey",
    addressRegion: "Nuevo León",
    postalCode: "64570",
    addressCountry: "MX",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://betontrowel.mx",
  name: "Beton Trowel México",
  description:
    "Venta y renta de maquinaria ligera y herramienta de acabado para la construcción en México.",
  publisher: {
    "@type": "Organization",
    name: "Equipos y Superficies de México",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-blue focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
        >
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main-content" className="flex-grow">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
