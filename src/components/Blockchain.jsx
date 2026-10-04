import { Lock, Zap, Eye, RefreshCw, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { IMG } from '../assets/images'

const features = [
  {
    icon: <Lock className="w-5 h-5" />,
    title: 'Immutable',
    desc: 'Once recorded on Solana, no credit can be altered or deleted.',
    color: 'text-green-400',
    bg: 'from-green-400/25 to-green-400/5 border-green-500/25',
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: 'Auditable',
    desc: 'Any company or auditor can verify the origin of each credit on the Solana explorer.',
    color: 'text-cyan-400',
    bg: 'from-cyan-400/25 to-cyan-400/5 border-cyan-500/25',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Solana speed',
    desc: '65,000 transactions per second and fees of < $0.001. The most efficient blockchain for micropayments.',
    color: 'text-purple-400',
    bg: 'from-purple-400/25 to-purple-400/5 border-purple-500/25',
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: 'Double-spend protection',
    desc: 'Every credit is a unique NFT. Impossible to sell twice or to forge.',
    color: 'text-green-400',
    bg: 'from-green-400/25 to-green-400/5 border-green-500/25',
  },
]

const chainSteps = [
  { label: 'GPS Track', sub: 'Activity', emoji: '🚴' },
  { label: 'Validation', sub: 'AI + GPS', emoji: '🔍' },
  { label: 'Mint NFT', sub: 'CCR Credit', emoji: '🪙' },
  { label: 'Marketplace', sub: 'Public offer', emoji: '🏪' },
  { label: 'Company buys', sub: 'Solana Pay', emoji: '🏢' },
  { label: 'Certified offset', sub: 'On-chain cert.', emoji: '✅' },
]

export default function Blockchain() {
  return (
    <section id="blockchain" className="relative py-20 lg:py-28 bg-[#080e08] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px divider-glow opacity-60" />
      <div className="absolute right-0 top-1/4 w-[30rem] h-[30rem] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative w-full max-w-[88rem] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <Reveal className="text-center mb-10 lg:mb-14">
          <p className="eyebrow text-purple-400 justify-center mb-4">Technology</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
            Audited on <span className="gradient-text">Solana Blockchain</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            The entire carbon credit value chain lives on Solana. Full transparency, minimal costs,
            maximum speed.
          </p>
        </Reveal>

        {/* Chain visualization */}
        <Reveal delay={100} className="mb-10 lg:mb-14 w-full overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center justify-start lg:justify-center gap-2 min-w-max mx-auto">
            {chainSteps.map((b, i) => (
              <div key={b.label} className="flex items-center">
                <div className="card-glass rounded-2xl px-4 py-3.5 text-center w-28 sm:w-32 transition-transform duration-300 hover:-translate-y-1">
                  <div className="text-2xl mb-1.5">{b.emoji}</div>
                  <p className="text-white text-xs font-semibold leading-tight font-display">{b.label}</p>
                  <p className="text-gray-500 text-[11px] mt-0.5">{b.sub}</p>
                </div>
                {i < chainSteps.length - 1 && (
                  <div className="w-5 sm:w-7 flex items-center justify-center shrink-0 mx-0.5">
                    <ArrowRight className="w-3.5 h-3.5 text-purple-400/70" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Image banner + Solana badge */}
        <Reveal delay={150} className="mb-10 lg:mb-14">
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10">
          <img
            src={IMG.chain}
            alt="Blockchain network visualization"
            loading="lazy"
            decoding="async"
            className="w-full h-56 sm:h-72 lg:h-80 object-cover"
          />
          <div className="img-shade" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060b06]/85 via-transparent to-[#060b06]/85" />
          </div>
          <div className="mt-4 flex items-center gap-3.5 px-5 py-4 rounded-2xl border border-purple-500/30 bg-purple-500/10">
            <span className="text-3xl">⚡</span>
            <div>
              <p className="text-white font-bold text-sm sm:text-base font-display">Built on Solana</p>
              <p className="text-gray-400 text-xs sm:text-sm">The world's fastest carbon-neutral blockchain</p>
            </div>
          </div>
        </Reveal>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100} className="h-full">
              <div className="card-glass rounded-3xl p-6 h-full transition-transform duration-300 hover:-translate-y-1.5">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br border flex items-center justify-center ${f.bg} ${f.color} mb-4`}
                >
                  {f.icon}
                </div>
                <h3 className="font-display font-bold text-white mb-2 text-base">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
