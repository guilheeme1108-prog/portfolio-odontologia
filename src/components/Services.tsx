import { motion } from 'framer-motion';
import { Microscope, Gem, Stethoscope, HeartPulse } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Stethoscope size={32} strokeWidth={1.5} />,
      title: "Endodontia",
      description: "Tratamento de canal seguro e indolor, focado em salvar e restaurar a saúde das raízes dentárias com tecnologia e precisão.",
      color: "blue"
    },
    {
      icon: <Gem size={32} strokeWidth={1.5} />,
      title: "Facetas Indiretas",
      description: "Transformação estética do seu sorriso através de lentes de contato dental e facetas de alta durabilidade e naturalidade.",
      color: "purple"
    },
    {
      icon: <Microscope size={32} strokeWidth={1.5} />,
      title: "Diagnóstico Avançado",
      description: "Amplo conhecimento na identificação e tratamento de manifestações bucais, garantindo saúde integral ao paciente.",
      color: "emerald"
    },
    {
      icon: <HeartPulse size={32} strokeWidth={1.5} />,
      title: "Prevenção e Saúde",
      description: "Check-ups regulares, limpezas profundas e orientações de higiene para manter seu sorriso saudável a longo prazo.",
      color: "rose"
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#fff0f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#332225] mb-4"
            >
              Áreas de Atuação
            </motion.h2>
            <div className="w-20 h-1 bg-[#d47a8c] mb-6"></div>
            <p className="text-lg text-slate-700">
              Conheça as especialidades e serviços oferecidos pela Dra. Antônia Patrícia, sempre priorizando qualidade técnica e as necessidades únicas de cada paciente.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start border border-white hover:border-rose-100"
            >
              <div className={`p-4 rounded-2xl mb-6 bg-${service.color}-50 text-${service.color}-500`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#332225] mb-3">{service.title}</h3>
              <p className="text-[#786568] leading-relaxed mb-6 flex-grow">{service.description}</p>
              
              <button className="text-[#913c4c] font-semibold text-sm inline-flex items-center gap-2 group mt-auto">
                Saber mais 
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
