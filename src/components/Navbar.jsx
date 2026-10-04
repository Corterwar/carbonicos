import { useState, useEffect } from 'react'
import { Leaf, Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'How it works', href: '#como-funciona' },
    { label: 'Users', href: '#usuarios' },
    { label: 'Companies', href: '#empresas' },
    { label: 'Blockchain', href: '#blockchain' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060b06]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[4.5rem]">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-[0_8px_24px_-8px_rgba(74,222,128,0.9)] transition-transform duration-300 group-hover:rotate-[-8deg]">
              <Leaf className="w-5 h-5 text-[#04140a]" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-extrabold tracking-tight font-display gradient-text">
              Carbónicos
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-3.5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                {l.label}
                <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-px bg-gradient-to-r from-green-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#cta"
              className="btn-primary group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-bold shadow-[0_10px_30px_-12px_rgba(74,222,128,0.8)]"
            >
              Join now
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile menu btn */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 py-5 flex flex-col gap-1 bg-[#060b06]/95 backdrop-blur-xl -mx-4 px-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-300 hover:text-green-400 transition-colors py-2.5 text-base font-medium border-b border-white/5"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              className="btn-primary mt-3 px-5 py-3 rounded-xl text-base font-bold text-center"
              onClick={() => setMenuOpen(false)}
            >
              Join now
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
