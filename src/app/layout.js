import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "مسطورا",
  description: "Developer : Ali Morteza Yalmaztakin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body dir='rtl' className={`${inter.className}`}>
      {children}
    </body>
  </html>
  );
}
