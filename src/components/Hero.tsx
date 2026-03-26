import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-white to-[--color-primary]">
      {/* Background Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-[--color-accent-dark] font-medium text-sm mb-6 shadow-sm border border-rose-100">
              <Sparkles size={16} />
              <span>Saúde e Estética Dental</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[--color-text-main] leading-tight mb-6">
              Transformando sorrisos com <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">Excelência e Cuidado</span>
            </h1>
            <p className="text-lg md:text-xl text-[--color-text-muted] mb-8 max-w-2xl mx-auto lg:mx-0">
              Dra. Antônia Patrícia Seixas, cirurgiã-dentista dedicada a oferecer tratamentos odontológicos humanizados, seguros e de alta qualidade técnica.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 bg-[--color-accent-dark] hover:bg-rose-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Agendar Avaliação
                <ArrowRight size={20} />
              </a>
              <a 
                href="#about" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-[--color-text-main] hover:bg-gray-50 border border-gray-200 rounded-full font-semibold transition-all shadow-sm flex items-center justify-center"
              >
                Conhecer a Dra.
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-md lg:max-w-full"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[--color-accent] to-rose-200 rounded-[2.5rem] transform rotate-3 scale-105 opacity-50 z-0"></div>
              <img 
                src="/assets/dentist-photo-clean.png" 
                alt="Dra. Antônia Patrícia Seixas" 
                className="relative z-10 w-full h-auto object-cover rounded-[2.5rem] shadow-2xl border-4 border-white aspect-[4/5]"
                style={{ objectPosition: 'center top' }}
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Especialista</p>
                  <p className="text-xs text-gray-500">Credibilidade</p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
