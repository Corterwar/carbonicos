import { useState, useEffect } from 'react'
import { Leaf, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Usuarios', href: '#usuarios' },
    { label: 'Empresas', href: '#empresas' },
    { label: 'Blockchain', href: '#blockchain' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0f0a]/90 backdrop-blur-md border-b border-green-500/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">Carbónicos</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#cta"
              className="px-5 py-2 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-xl text-sm transition-all duration-200 hover:scale-105"
            >
              Unirse ahora
            </a>
          </div>

          {/* Mobile menu btn */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-green-500/20 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              className="px-5 py-2 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-xl text-sm text-center transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Unirse ahora
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
