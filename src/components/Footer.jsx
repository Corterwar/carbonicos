import { Leaf } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-green-500/10 bg-[#0a0f0a] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Carbónicos</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Transformando la movilidad sostenible en créditos de carbono verificados y pagos en criptomoneda, impulsado por Solana blockchain.
            </p>
            <div className="flex gap-3 mt-5">
              {['Twitter', 'Discord', 'Telegram'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="px-3 py-1.5 text-xs border border-gray-700 hover:border-green-500/50 text-gray-500 hover:text-white rounded-lg transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-white font-semibold mb-4 text-sm">Producto</p>
            <ul className="space-y-2 text-sm text-gray-500">
              {['Cómo funciona', 'Para usuarios', 'Para empresas', 'Blockchain'].map((l) => (
                <li key={l}><a href="#" className="hover:text-green-400 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold mb-4 text-sm">Legal</p>
            <ul className="space-y-2 text-sm text-gray-500">
              {['Términos de uso', 'Privacidad', 'Política de cookies', 'Whitepaper'].map((l) => (
                <li key={l}><a href="#" className="hover:text-green-400 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-sm">© 2026 Carbónicos. Todos los derechos reservados.</p>
          <p className="text-gray-600 text-sm">
            Con 💚 por el planeta · Powered by{' '}
            <span className="text-purple-400">Solana</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
