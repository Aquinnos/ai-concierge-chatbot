import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'
import ChatWidgetWrapper from './components/ChatWidgetWrapper'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'AI Concierge Chatbot',
  description: 'Smart assistant for hotel and restaurant guests',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        {children}
        <ChatWidgetWrapper />
      </body>
    </html>
  )
}
