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
  description: "Your one-stop shop for electronics.",
  keywords: ["electronics", "LS Electricité", "gadgets","Ls électricité"," Électricité à Cluses","Electricité", "tech", "Cluses electrician"],
  openGraph: {
    title: "LS Electricité",
    description: "Your one-stop shop for electronics, Électricité entreprise à Cluses, Electricite à Cluses, Électricité générale à Cluses.",
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
    "@type": "Organization",
    name: "LS Electricité",
    url: "https://www.lselectricite.com",
    logo: "https://www.lselectricite.com/logo.png",
    description: "Your one-stop shop for electronics.",
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