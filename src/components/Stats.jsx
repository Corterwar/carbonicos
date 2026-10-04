import Reveal from './Reveal'

const stats = [
  { value: '1.2M+', label: 'kg CO₂ saved', color: 'text-green-400' },
  { value: '84K+', label: 'active users', color: 'text-cyan-400' },
  { value: '320+', label: 'companies offsetting', color: 'text-purple-400' },
  { value: '$0', label: 'tracking fees', color: 'text-green-400' },
]

export default function Stats() {
  return (
    <section className="relative py-14 sm:py-16 border-y border-white/10 bg-[#070d07]/70 backdrop-blur-sm">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-px w-2/3 divider-glow" />
      <div className="w-full max-w-[88rem] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 90}
              className={`text-center px-4 ${
                i % 2 === 1 ? 'border-l border-white/10' : ''
              } lg:border-l lg:border-white/10 ${i === 0 ? 'lg:border-l-0' : ''}`}
            >
              <p className={`font-display text-4xl sm:text-5xl font-extrabold mb-2 ${s.color}`}>
                {s.value}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-[0.14em]">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
