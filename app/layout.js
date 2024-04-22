import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Paramjeet Singh",
  description: "This is the personal portfolio of Paramjeet Singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} `}>{children}</body>
    </html>
  );
}
