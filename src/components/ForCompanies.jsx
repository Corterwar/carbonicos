import { BarChart3, Globe2, FileCheck, Zap } from 'lucide-react'
import Reveal from './Reveal'
import { IMG } from '../assets/images'

const perks = [
  {
    icon: <Globe2 className="w-5 h-5" />,
    title: 'Real, auditable offset',
    desc: 'Every credit is backed by real kilometers of sustainable mobility, recorded on blockchain.',
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'ESG dashboard',
    desc: 'Monitor in real time how much CO₂ you have offset for your ESG reports and sustainability goals.',
  },
  {
    icon: <FileCheck className="w-5 h-5" />,
    title: 'Automatic certificates',
    desc: 'Generate PDF reports with blockchain data, ready for audits and corporate presentations.',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Instant purchase',
    desc: 'Buy carbon credits in seconds using Solana Pay. No complex forms, no intermediaries.',
  },
]

export default function ForCompanies() {
  return (
    <section id="empresas" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute -right-40 top-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative w-full max-w-[88rem] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid xl:grid-cols-[1.05fr_0.95fr] gap-12 xl:gap-20 items-center">
          {/* Left: office photo + dashboard mockup */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative w-full space-y-5">
              <div className="relative h-60 sm:h-72 xl:h-80 rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_70px_-35px_rgba(0,0,0,0.9)]">
                <img
                  src={IMG.office}
                  alt="Modern sustainable office"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="img-shade opacity-85" />
                <div className="img-tint" style={{ background: 'linear-gradient(135deg, rgba(153,69,255,0.3), transparent 55%, rgba(34,211,238,0.2))' }} />
              </div>

              {/* Dashboard in front */}
              <div className="relative w-full max-w-xl mx-auto lg:mx-0 lg:mr-auto bg-[#0b110b]/95 backdrop-blur-xl rounded-[1.75rem] border border-purple-500/25 p-5 space-y-4 shadow-[0_40px_80px_-30px_rgba(0,0,0,1)]">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] text-gray-500 uppercase tracking-widest font-semibold">
                      Corporate panel
                    </p>
                    <p className="font-bold text-white text-sm sm:text-base font-display">ACME Inc.</p>
                  </div>
                  <div className="w-10 h-10 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5 text-purple-400" />
                  </div>
                </div>

                {/* Big metric */}
                <div className="bg-gradient-to-r from-purple-500/20 via-purple-500/5 to-cyan-500/10 border border-white/5 rounded-2xl p-4 text-center">
                  <p className="text-gray-400 text-xs sm:text-sm">CO₂ offset this year</p>
                  <p className="font-display text-4xl sm:text-5xl font-extrabold text-white mt-1.5 leading-none">
                    48.2 <span className="text-xl sm:text-2xl text-purple-400">tons</span>
                  </p>
                  <p className="text-green-400 text-xs mt-2 font-semibold">↑ 22% vs last year</p>
                </div>

                {/* Monthly bars */}
                <div>
                  <p className="text-xs text-gray-500 mb-2.5 font-medium">Credits per month</p>
                  <div className="flex items-end gap-1.5 h-16">
                    {[40, 55, 35, 70, 60, 85, 75, 90, 65, 80, 95, 88].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-purple-600 to-cyan-400 opacity-85 hover:opacity-100 transition-opacity"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-600 mt-1.5 font-medium">
                    <span>Jan</span>
                    <span>Dec</span>
                  </div>
                </div>

                {/* Purchases */}
                <div className="space-y-2.5 pt-1">
                  {[
                    { label: 'Purchase #0x9a2f', amount: '120 CCR', date: 'today', color: 'text-green-400' },
                    { label: 'Purchase #0x7b1c', amount: '85 CCR', date: 'yesterday', color: 'text-green-400' },
                    { label: 'Purchase #0x3d8e', amount: '200 CCR', date: 'Oct 2', color: 'text-cyan-400' },
                  ].map((t) => (
                    <div
                      key={t.label}
                      className="flex justify-between items-center text-xs sm:text-sm py-1.5 border-b border-white/5 last:border-0"
                    >
                      <div>
                        <p className="text-white font-medium">{t.label}</p>
                        <p className="text-xs text-gray-600">{t.date}</p>
                      </div>
                      <span className={`font-bold font-display ${t.color}`}>{t.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: text */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="eyebrow text-purple-400 mb-4">For companies</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.08] mb-5">
                Offset your footprint <span className="gradient-text">with real impact</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-9 max-w-xl">
                Acquire genuine carbon credits generated by real people who choose to move
                sustainably. Every credit is verifiable, immutable, and ready for your ESG reports.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-5">
              {perks.map((p, i) => (
                <Reveal key={p.title} delay={100 + i * 100}>
                  <div className="flex gap-4 h-full">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-500/25 to-purple-500/5 border border-purple-500/25 flex items-center justify-center text-purple-400 shrink-0">
                      {p.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-white mb-1.5 text-[15px]">
                        {p.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Building({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  )
}
