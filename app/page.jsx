import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <header>
      <nav className="p-2">
        <ul className="flex items-center space-x-2">
          <li>
            <img src="/vercel.svg" className="w-32" />
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/header">Header</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
