import { Lock, Zap, Eye, RefreshCw } from 'lucide-react'

const features = [
  {
    icon: <Lock className="w-5 h-5" />,
    title: 'Inmutable',
    desc: 'Una vez registrado en Solana, ningún crédito puede ser alterado o eliminado.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: 'Auditable',
    desc: 'Cualquier empresa o auditor puede verificar el origen de cada bono en el explorador de Solana.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Velocidad Solana',
    desc: '65,000 transacciones por segundo y fees de < $0.001. La blockchain más eficiente para micro-pagos.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: 'Anti-doble gasto',
    desc: 'Cada crédito es un NFT único. Imposible venderlo dos veces o falsificarlo.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
]

const chainSteps = [
  { label: 'GPS Track', sub: 'Actividad', emoji: '🚴' },
  { label: 'Validación', sub: 'IA + GPS', emoji: '🔍' },
  { label: 'Mint NFT', sub: 'Crédito CCR', emoji: '🪙' },
  { label: 'Marketplace', sub: 'Oferta pública', emoji: '🏪' },
  { label: 'Empresa compra', sub: 'Solana Pay', emoji: '🏢' },
  { label: 'Offset certif.', sub: 'On-chain cert.', emoji: '✅' },
]

export default function Blockchain() {
  return (
    <section id="blockchain" className="py-16 lg:py-24 bg-[#0d130d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-purple-400 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">Tecnología</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Auditado en{' '}
            <span className="gradient-text">Solana Blockchain</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Toda la cadena de valor de los créditos de carbono vive en Solana. Transparencia total, costos mínimos, velocidad máxima.
          </p>
        </div>

        {/* Chain visualization — always uses scroll container */}
        <div className="mb-10 lg:mb-14 w-full overflow-x-auto">
          <div className="flex items-center justify-start lg:justify-center gap-2 min-w-max mx-auto px-2">
            {chainSteps.map((b, i) => (
              <div key={b.label} className="flex items-center">
                <div className="card-glass rounded-xl px-3 sm:px-4 py-3 text-center w-24 sm:w-28">
                  <div className="text-xl sm:text-2xl mb-1">{b.emoji}</div>
                  <p className="text-white text-xs font-semibold leading-tight">{b.label}</p>
                  <p className="text-gray-500 text-xs">{b.sub}</p>
                </div>
                {i < chainSteps.length - 1 && (
                  <div className="w-5 sm:w-6 flex items-center justify-center shrink-0 mx-1">
                    <div className="w-full h-px bg-gradient-to-r from-green-500/50 to-purple-500/50 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="card-glass rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-10 h-10 ${f.bg} rounded-xl flex items-center justify-center ${f.color} mb-3 sm:mb-4`}>
                {f.icon}
              </div>
              <h3 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">{f.title}</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Solana badge */}
        <div className="mt-10 sm:mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-5 sm:px-6 py-3 rounded-2xl border border-purple-500/30 bg-purple-500/10">
            <span className="text-xl sm:text-2xl">⚡</span>
            <div className="text-left">
              <p className="text-white font-semibold text-xs sm:text-sm">Construido sobre Solana</p>
              <p className="text-gray-500 text-xs">Blockchain carbon-neutral más rápida del mundo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
