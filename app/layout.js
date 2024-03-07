import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio | Paramjeet Singh',
  description: 'This is the personal portfolio of Paramjeet Singh',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 dot`}>
        {children}
        </body>
    </html>
  )
}
