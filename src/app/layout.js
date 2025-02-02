import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

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
    default: "Electronics,Electricité ",
    template: "%s | Electricité ",
  },
  description: "Your one-stop shop for electronics .",
  openGraph: {
    title: "Electricité ",
    description: "Your one-stop shop for electronics,Électricité entreprise à cluses,Electricite à cluses,Électricité générale à cluses.",
    images: "/og-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
