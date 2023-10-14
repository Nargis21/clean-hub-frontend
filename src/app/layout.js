import Providers from '@/lib/Providers'
import './globals.css'

export const metadata = {
  title: 'Clean Hub',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body >{children}</body>
      </html>
    </Providers>
  )
}
