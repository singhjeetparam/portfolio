import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-gray-950'>
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
