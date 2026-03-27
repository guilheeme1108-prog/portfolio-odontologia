import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export function Denture3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Rotate between -25 and +25 degrees based on mouse position
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculates percentage from -0.5 to 0.5
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      <div className="absolute inset-0 bg-gradient-to-t from-[#913c4c]/20 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Análise <span className="text-[#d47a8c]">Tridimensional</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Interaja com o modelo multidirecional. Passe o mouse sobre a peça abaixo para simular os ângulos reais e visualizar o encaixe cirúrgico de alta precisão.
          </p>
        </div>

        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full max-w-2xl h-[400px] md:h-[600px] flex items-center justify-center [perspective:1200px]"
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="w-full h-full relative flex items-center justify-center cursor-crosshair"
          >
            <img 
              src="/assets/denture-3d.jpg" 
              alt="Modelo 3D Dentadura Multidirecional"
              className="w-full h-full object-contain mix-blend-screen pointer-events-none drop-shadow-[0_0_40px_rgba(212,122,140,0.4)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
