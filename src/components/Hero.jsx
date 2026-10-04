import { ArrowRight, Bike, Footprints, Building2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden pt-16">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.2s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-8 animate-slide-up">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Powered by Solana Blockchain
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          Muévete.{' '}
          <span className="gradient-text">Compensa.</span>
          <br />
          Salva el planeta.
        </h1>

        {/* Subheadline */}
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          Convierte cada paso y cada pedalada en <strong className="text-green-400">créditos de carbono</strong> verificados en blockchain. Las empresas compran tus bonos. Tú cobras en cripto.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.45s' }}>
          <a
            href="#cta"
            className="flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded-2xl text-lg transition-all duration-200 hover:scale-105 glow-green"
          >
            Empieza gratis
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#empresas"
            className="flex items-center gap-2 px-8 py-4 border border-gray-600 hover:border-green-500/50 text-gray-300 hover:text-white font-semibold rounded-2xl text-lg transition-all duration-200"
          >
            Soy empresa
          </a>
        </div>

        {/* Float cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
          {[
            { icon: <Footprints className="w-6 h-6 text-green-400" />, label: 'Caminar', value: '~200g CO₂', sub: 'ahorrado por km' },
            { icon: <Bike className="w-6 h-6 text-cyan-400" />, label: 'Bicicleta', value: '~180g CO₂', sub: 'ahorrado por km' },
            { icon: <Building2 className="w-6 h-6 text-purple-400" />, label: 'Empresas', value: 'Offset', sub: 'su huella de carbono' },
          ].map((c) => (
            <div key={c.label} className="card-glass rounded-2xl p-5 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                {c.icon}
                <span className="font-semibold text-white">{c.label}</span>
              </div>
              <p className="text-2xl font-bold text-white">{c.value}</p>
              <p className="text-sm text-gray-500">{c.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
