import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ReactQueryClientProvider from '@/components/react-query-client-provider'
import ProgressbarProvider from '@/components/progressbar-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vordan',
  description: 'Vordan Online Market Place',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ReactQueryClientProvider>
          <ProgressbarProvider>
            {children}
            <Toaster />
          </ProgressbarProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  )
}
