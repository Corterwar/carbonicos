import { ArrowRight, Bike, Footprints, Building2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden pt-16">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 sm:w-80 sm:h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.2s' }} />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8 animate-slide-up">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shrink-0" />
          Powered by Solana Blockchain
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-4 sm:mb-6 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          Muévete.{' '}
          <span className="gradient-text">Compensa.</span>
          <br />
          Salva el planeta.
        </h1>

        {/* Subheadline */}
        <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 animate-slide-up px-2" style={{ animationDelay: '0.3s' }}>
          Convierte cada paso y cada pedalada en <strong className="text-green-400">créditos de carbono</strong> verificados en blockchain. Las empresas compran tus bonos. Tú cobras en cripto.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16 animate-slide-up" style={{ animationDelay: '0.45s' }}>
          <a
            href="#cta"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded-2xl text-base sm:text-lg transition-all duration-200 hover:scale-105 glow-green"
          >
            Empieza gratis
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#empresas"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 border border-gray-600 hover:border-green-500/50 text-gray-300 hover:text-white font-semibold rounded-2xl text-base sm:text-lg transition-all duration-200"
          >
            Soy empresa
          </a>
        </div>

        {/* Float cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
          {[
            { icon: <Footprints className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />, label: 'Caminar', value: '~200g CO₂', sub: 'ahorrado por km' },
            { icon: <Bike className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />, label: 'Bicicleta', value: '~180g CO₂', sub: 'ahorrado por km' },
            { icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />, label: 'Empresas', value: 'Offset', sub: 'su huella de carbono' },
          ].map((c) => (
            <div key={c.label} className="card-glass rounded-2xl p-4 sm:p-5 transition-all duration-300 flex sm:block items-center gap-4">
              <div className="flex items-center gap-2 sm:gap-3 sm:mb-3">
                {c.icon}
                <span className="font-semibold text-white text-sm sm:text-base">{c.label}</span>
              </div>
              <div className="ml-auto sm:ml-0">
                <p className="text-xl sm:text-2xl font-bold text-white">{c.value}</p>
                <p className="text-xs sm:text-sm text-gray-500">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
