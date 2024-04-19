'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/movies">Movies</Link>
          </li>
        </ul>
      </nav>
      <button onClick={() => router.push('/movies')}>
        Movies
      </button>
    </header>
  )
}