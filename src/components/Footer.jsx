import { Leaf } from 'lucide-react'
import Reveal from './Reveal'

const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const DiscordIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.317 4.37a19.79 19.79 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.099.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
)

const TelegramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
)

const socials = [
  { name: 'Twitter', Icon: XIcon },
  { name: 'Discord', Icon: DiscordIcon },
  { name: 'Telegram', Icon: TelegramIcon },
]

const columns = [
  {
    title: 'Product',
    links: ['How it works', 'For users', 'For companies', 'Blockchain'],
  },
  {
    title: 'Legal',
    links: ['Terms of Service', 'Privacy', 'Cookie Policy', 'Whitepaper'],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#050a05] pt-16 pb-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 divider-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-[0_8px_24px_-8px_rgba(74,222,128,0.9)]">
                  <Leaf className="w-5 h-5 text-[#04140a]" strokeWidth={2.5} />
                </div>
                <span className="text-lg font-extrabold tracking-tight font-display gradient-text">
                  Carbónicos
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
                Turning sustainable mobility into verified carbon credits and cryptocurrency
                payments, powered by Solana blockchain.
              </p>
              <div className="flex gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href="#"
                    aria-label={s.name}
                    className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-500 hover:text-green-400 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <s.Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-white font-semibold mb-4 text-sm font-display">{col.title}</p>
                <ul className="space-y-3 text-sm text-gray-500">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="hover:text-green-400 transition-colors duration-200 inline-flex items-center gap-1 group"
                      >
                        <span className="w-0 group-hover:w-2 h-px bg-green-400 transition-all duration-200" />
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Solana strip */}
        <Reveal delay={80}>
          <div className="flex flex-wrap items-center justify-center gap-2 px-4 py-3 rounded-2xl border border-purple-500/25 bg-purple-500/10 mb-8 text-center">
            <span className="text-lg">⚡</span>
            <p className="text-xs sm:text-sm text-gray-400">
              Built on{' '}
              <span className="text-purple-400 font-semibold">Solana</span> — the world's fastest
              carbon-neutral blockchain
            </p>
          </div>
        </Reveal>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-center">
          <p className="text-gray-600 text-xs sm:text-sm">
            © 2026 Carbónicos. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs sm:text-sm">
            Made with 💚 for the planet · Powered by{' '}
            <span className="text-purple-400">Solana</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
