import { VercelToolbar } from '@vercel/toolbar/next'
import type { Metadata } from 'next'
import { Toaster } from 'sonner'
import { ExamplesBanner } from '@/components/banners/examples-banner'
import './globals.css'

export const metadata: Metadata = {
  title: 'GrowthBook - Flags SDK Example',
  description: 'A Flags SDK ecommerce example using GrowthBook',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ExamplesBanner />
        {children}
        <Toaster />
        <VercelToolbar />
      </body>
    </html>
  )
}
