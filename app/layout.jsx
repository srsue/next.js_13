import { Poppins } from 'next/font/google'
import Header from './compornents/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const poppins = Poppins({
  weight: ['400','700'],
  subsets: ['latin'],
});

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'srsue media',
  description: 'srsue portfolio site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={poppins.className}>
        <Header />
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  );
}
