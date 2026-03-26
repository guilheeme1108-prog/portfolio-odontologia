import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export function InteractiveSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoDuration, setVideoDuration] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Sync video current time with scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (videoRef.current && videoDuration > 0) {
      videoRef.current.currentTime = latest * videoDuration;
    }
  });

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration);
    }
  };

  const scaleImage = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  return (
    <section ref={containerRef} className="h-[200vh] bg-[#f8fafc] relative">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col md:flex-row items-center justify-center p-4">
        
        {/* Decorative Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-white/80"></div>
          <div className="absolute w-[800px] h-[800px] bg-rose-100 rounded-full mix-blend-multiply opacity-20 filter blur-3xl -top-40 -right-40"></div>
          <div className="absolute w-[600px] h-[600px] bg-indigo-100 rounded-full mix-blend-multiply opacity-20 filter blur-3xl bottom-0 left-0"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left pt-20 md:pt-0"
          >
            <span className="text-rose-700 font-extrabold tracking-widest uppercase text-sm mb-4 block">Educação e Transparência</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[--color-text-main] mb-6 leading-tight">
              A complexidade do seu sorriso, resolvida com <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-600">Precisão</span>
            </h2>
            <p className="text-xl text-[--color-text-muted] leading-relaxed">
              Como uma máquina precisa e complexa, cada parte do seu tratamento é planejada e unida para formar um sorriso completo, saudável e belo!
            </p>
            <div className="mt-8 flex items-center justify-center md:justify-start gap-4 text-sm font-medium text-slate-500">
              <span className="w-10 h-px bg-slate-300"></span>
              Role a página para visualizar a montagem
              <span className="w-10 h-px bg-slate-300"></span>
            </div>
          </motion.div>

          {/* Interactive Video Container */}
          <div className="flex-1 w-full h-[50vh] md:h-[80vh] relative flex items-center justify-center">
            
            <motion.div style={{ scale: scaleImage }} className="relative w-full h-full max-w-lg mx-auto flex items-center justify-center">
              <video
                ref={videoRef}
                src="/hero-video.mp4"
                className="absolute inset-0 w-full h-full object-contain filter drop-shadow-2xl mix-blend-multiply"
                muted
                playsInline
                preload="auto"
                onLoadedMetadata={handleLoadedMetadata}
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
