import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'
import { ScrollRevealProvider } from '@/components/ScrollReveal'
import PrintStyles from '@/components/PrintStyles'

export const metadata: Metadata = {
  title: 'BE Inteligência — A concept for Beach Enclave',
  description: 'Making Beach Enclave ready for the group era. An AI-first operating layer.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F2830',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300;1,9..144,400;1,9..144,500&display=swap"
        />
      </head>
      <body>
        <ScrollRevealProvider>
          <PrintStyles />
          {children}
        </ScrollRevealProvider>
      </body>
    </html>
  )
}
