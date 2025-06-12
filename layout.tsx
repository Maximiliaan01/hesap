import { Inter } from 'next/font/google'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Oyun Hesap ve Item Satış Platformu',
  description: 'Güvenli ve hızlı oyun hesabı alım satım platformu.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
} 