import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { ThemeProvider } from "@/components/shared/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "LS Electricité",
    template: "%s | Electricité",
  },
  description: "LS Electricité - Expert en électricité générale et industrielle à Cluses.",
  keywords: [
    "électricien Cluses",
    "installation électrique",
    "LS Electricité",
    "entreprise électricité Cluses",
    "tableau électrique",
    "éclairage industriel",
    "domotique",
    "dépannage électrique",
  ],
  openGraph: {
    title: "LS Electricité",
    description: "Spécialiste en électricité générale et industrielle à Cluses.",
    images: "https://www.lselectricite.com/og-image.png",
    url: "https://www.lselectricite.com",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: "LS Electricité",
    url: "https://www.lselectricite.com",
    logo: "https://www.lselectricite.com/logo.png",
    description: "Spécialiste en électricité générale et industrielle à Cluses.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Votre adresse ici",
      addressLocality: "Cluses",
      postalCode: "74300",
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33 6 XX XX XX XX",
      contactType: "customer service",
      availableLanguage: ["French"],
    },
  };

  return (
    <html lang="fr" data-theme="light">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
