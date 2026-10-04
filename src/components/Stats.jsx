const stats = [
  { value: '1.2M+', label: 'kg CO₂ ahorrados', color: 'text-green-400' },
  { value: '84K+', label: 'usuarios activos', color: 'text-cyan-400' },
  { value: '320+', label: 'empresas compensando', color: 'text-purple-400' },
  { value: '$0', label: 'comisión por tracking', color: 'text-green-400' },
]

export default function Stats() {
  return (
    <section className="py-12 sm:py-16 border-y border-green-500/10 bg-[#0d130d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className={`text-3xl sm:text-4xl font-extrabold mb-1 ${s.color}`}>{s.value}</p>
              <p className="text-gray-500 text-xs sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
