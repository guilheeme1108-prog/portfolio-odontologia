import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, message } = formData;
    
    const text = `*Novo Contato via Site*\n\n*Nome:* ${name}\n*Contato:* ${phone}\n*Email:* ${email}\n*Mensagem:* ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappNumber = "5579999919835";
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-[--color-primary] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl overflow-hidden relative">
          
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-60"></div>

          <div className="grid lg:grid-cols-5 gap-16 relative z-10">
            
            {/* Info Side */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-[--color-text-main] mb-4"
              >
                Vamos agendar sua consulta?
              </motion.h2>
              <p className="text-[--color-text-muted] mb-10">
                Entre em contato para avaliar sua saúde bucal. A Dra. Antônia Patrícia está pronta para atender você com o máximo de cuidado e técnica.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-[--color-accent-dark] flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone / WhatsApp</h4>
                    <p className="text-gray-600">79 9 9991-9835</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-[--color-accent-dark] flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Endereço</h4>
                    <p className="text-gray-600">Centro de Saúde Humanus Mais.<br/>Rua: Antônio Higino dos Santos, 1272.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-[--color-accent-dark] flex-shrink-0 font-bold">
                    @
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Instagram</h4>
                    <a href="https://instagram.com/dra.patriciaseixas" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline">@dra.patriciaseixas</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-gray-50 rounded-[2rem] p-8 md:p-10 border border-gray-100"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Nome Completo</label>
                    <input id="name" required value={formData.name} onChange={handleChange} type="text" className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[--color-accent] focus:ring-4 focus:ring-rose-100 outline-none transition-all bg-white" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Telefone / WhatsApp</label>
                    <input id="phone" required value={formData.phone} onChange={handleChange} type="text" className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[--color-accent] focus:ring-4 focus:ring-rose-100 outline-none transition-all bg-white" placeholder="(00) 00000-0000" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <input id="email" required value={formData.email} onChange={handleChange} type="email" className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[--color-accent] focus:ring-4 focus:ring-rose-100 outline-none transition-all bg-white" placeholder="seu@email.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Mensagem</label>
                  <textarea id="message" required value={formData.message} onChange={handleChange} rows={4} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[--color-accent] focus:ring-4 focus:ring-rose-100 outline-none transition-all bg-white resize-none" placeholder="Como podemos ajudar?"></textarea>
                </div>

                <button type="submit" className="w-full bg-[--color-accent-dark] hover:bg-rose-800 text-white font-semibold py-4 rounded-2xl transition-all shadow-[0_8px_30px_rgb(145,60,76,0.4)] hover:shadow-[0_8px_40px_rgb(145,60,76,0.6)] flex items-center justify-center gap-2 group transform hover:-translate-y-1">
                  Enviar Mensagem
                  <Send size={18} className="translate-x-1 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
