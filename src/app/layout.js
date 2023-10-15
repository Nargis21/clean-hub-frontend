import { Providers } from '../lib/Providers'
import './globals.css'
import Navbar from '../components/shared/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Clean Hub',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body >
          <Navbar />
          {children}
          <ToastContainer theme="dark" />
        </body>
      </html>
    </Providers>
  )
}
