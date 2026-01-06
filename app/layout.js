import { Outfit } from "next/font/google"; // Modern SaaS font
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "MijuApp - Setup your app account",
  description: "The best app for your business growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
