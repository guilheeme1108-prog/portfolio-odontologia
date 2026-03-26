
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { InteractiveSection } from './components/InteractiveSection';
import { Contact } from './components/Contact';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Services />
        <InteractiveSection />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-2xl font-bold tracking-tight text-white mb-2 block">Dra. Antônia Seixas</span>
            <p className="text-sm">Cro/SE: [Inserir CRO] - Especialista em Sorrisos.</p>
          </div>
          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Dra. Antônia Patrícia. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5579999919835"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgb(37,211,102,0.4)] hover:bg-[#1EBE5D] transition-all hover:scale-110 z-50 flex items-center justify-center group animate-pulse hover:animate-none"
        aria-label="Contatar via WhatsApp"
      >
        <MessageCircle size={28} />
        {/* Tooltip that shows permanently so mobile users can see without hover */}
        <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-semibold px-3 py-1.5 rounded-lg shadow-lg opacity-100 whitespace-nowrap pointer-events-none">
          Enviar Mensagem
        </span>
      </a>
    </div>
  );
}

export default App;
