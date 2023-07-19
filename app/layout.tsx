import './globals.css'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: "500"})

export const metadata = {
  title: 'Sabelo',
  description: 'Personal portfolio of Sabelo\'s profile.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">{children}</body>
    </html>
  )
}
