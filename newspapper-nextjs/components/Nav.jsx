'use client'

import { useState } from 'react'
import Link from 'next/link'
import "../app/globals.css";

import styles from './Nav.module.css'

export default function NewsHeader() {
  const sections = [
    { name: "Mundo", href: "/mundo" },
    { name: "Economía", href: "/economia" },
    { name: "Deportes", href: "/deportes" },
    { name: "Cultura", href: "/cultura" },
    { name: "Ciencia", href: "/ciencia" },
    { name: "Opinión", href: "/opinion" },
    { name: "Favoritos", href: "/favoritos" },
  ]

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full border-b bg-[var(--color-bg)] border-gray-300">
      {/* Logo */}
      <div className="py-3 px-2 md:px-6 bg-[var(--color-primary)] text-[var(--color-bg)]">
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: "var(--font-extrabold)",
            textTransform: "uppercase",
          }}
          className="text-2xl md:text-3xl"
        >
          Weazel <span style={{ color: "var(--color-accent)" }}>News</span>
        </Link>
      </div>

      {/* Nav principal con botón mobile */}
      <div className="relative py-2 px-2 md:px-6 flex items-center justify-between">
        {/* Botón menu mobile a la izquierda */}
        <button
          className="md:hidden mr-2 px-3 py-2 border rounded text-sm flex-shrink-0"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Links visibles siempre en fila */}
        <nav className={`flex justify-center overflow-x-auto gap-4 flex-1 ${styles['scroll-hide']}`}>
          {sections.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm md:text-base flex-shrink-0 border-b-2 border-transparent hover:border-[var(--color-accent)] transition-colors"
              style={{
                fontWeight: "var(--font-semibold)",
                textTransform: "uppercase",
                color: "var(--color-text)",
              }}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Menu mobile desplegable en columna */}
      {menuOpen && (
        <div className="md:hidden px-2 py-2 border-t border-gray-300 flex flex-col gap-2">
          {sections.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className="block py-1 px-2 text-sm hover:text-red-600 transition-colors border-b-2 border-transparent hover:border-[var(--color-accent)]"
              style={{
                fontWeight: "var(--font-semibold)",
                textTransform: "uppercase",
                color: "var(--color-text)",
              }}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}