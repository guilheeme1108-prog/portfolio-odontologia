import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export function About() {
  const experiences = [
    {
      icon: <GraduationCap size={24} />,
      title: "Graduação em Odontologia",
      institution: "Universidade Federal de Sergipe (UFS)",
      type: "Formação Acadêmica"
    },
    {
      icon: <Award size={24} />,
      title: "Pós-Graduação em Gestão Empresarial",
      institution: "Faculdade Internacional Signorelli (RJ)",
      type: "Especialização"
    },
    {
      icon: <BookOpen size={24} />,
      title: "Cursos e Aperfeiçoamentos",
      items: [
        "Aperfeiçoamento em Endodontia",
        "Imersão em facetas indiretas",
        "Manifestações bucais e ISTs",
        "Legislação Federal para Odontologia (RDC 1002)"
      ],
      type: "Capacitação Contínua"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[--color-text-main] mb-4"
          >
            Sobre a Doutora
          </motion.h2>
          <div className="w-20 h-1 bg-[--color-accent] mx-auto rounded-full mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-[--color-text-muted]">
            Com uma sólida formação profissional e constante busca por atualização, 
            a Dra. Antônia Patrícia une técnica, ciência e acolhimento para oferecer o melhor em saúde bucal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[--color-bg-light] border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-rose-50 text-[--color-accent-dark] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[--color-accent-dark] group-hover:text-white transition-colors">
                {exp.icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-2 block">{exp.type}</span>
              <h3 className="text-xl font-bold text-[--color-text-main] mb-3">{exp.title}</h3>
              {exp.institution && (
                <p className="text-[--color-text-muted] leading-relaxed">{exp.institution}</p>
              )}
              {exp.items && (
                <ul className="space-y-2 mt-4">
                  {exp.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[--color-text-muted]">
                      <div className="w-1.5 h-1.5 bg-[--color-accent] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
