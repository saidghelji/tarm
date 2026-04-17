import React, { useEffect, useState, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);
  
  // Set a timeout to ensure the placeholder is shown if video takes too long to load
  useEffect(() => {
    // If video hasn't loaded after 5 seconds, check if it's actually playing
    const timeoutId = setTimeout(() => {
      if (!videoLoaded && videoRef.current) {
        // If video is actually playing but event didn't fire, set loaded to true
        if (!videoRef.current.paused && videoRef.current.currentTime > 0) {
          setVideoLoaded(true);
        }
      }
    }, 5000);
    
    return () => clearTimeout(timeoutId);
  }, [videoLoaded]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Adjust effect intensity based on device type
      const intensityFactor = isMobile ? 0.3 : 1;
      const x = (e.clientX / window.innerWidth - 0.5) * 10 * intensityFactor;
      const y = (e.clientY / window.innerHeight - 0.5) * 10 * intensityFactor;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: { x: number; y: number; radius: number; speed: number }[] = [];
    // Adjust number of particles based on device type
    const numParticles = isMobile ? 50 : 100;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        // Adjust particle size based on device type
        radius: Math.random() * (isMobile ? 2 : 3) + 1,
        // Adjust particle speed based on device type
        speed: Math.random() * (isMobile ? 0.8 : 1) + 0.5,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        particle.y += particle.speed;
        if (particle.y > window.innerHeight) {
          particle.y = 0;
          particle.x = Math.random() * window.innerWidth;
        }
      });
    };

    const animate = () => {
      drawParticles();
      requestAnimationFrame(animate);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <section id="accueil" className="relative h-screen overflow-hidden perspective-1000">
      <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none" />
      {/* Background Video with 3D effect - scaled based on device type */}
      <div 
        className="absolute inset-0 z-0 transform-gpu transition-transform duration-200 ease-out"
        style={{ 
          transform: `rotateX(${-mousePosition.y * (isMobile ? 0.5 : 1)}deg) rotateY(${mousePosition.x * (isMobile ? 0.5 : 1)}deg) scale(1.1)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Placeholder image while video is loading */}
        {!videoLoaded && (
          <img 
            src="/media/image-waiting.png" 
            alt="Background placeholder" 
            className="w-full h-full object-cover"
          />
        )}
        <video 
          ref={videoRef}
          src="/media/background_v.webm" 
          className={`w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => console.error("Video failed to load")}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content with subtle parallax effect - adjusted for device type */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex items-center">
        <div 
          className="max-w-2xl text-white"
          style={{ 
            transform: `translateX(${mousePosition.x * (isMobile ? -0.2 : -0.5)}px) translateY(${mousePosition.y * (isMobile ? -0.2 : -0.5)}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Créez le lieu où vous aimez  <span className="text-amber-400">vivre, travailler, recevoir</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
            TARM — votre partenaire de confiance pour réinventer vos espaces résidentiels et commerciaux avec style et précision.


          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#devis" 
              className="px-6 py-3 bg-amber-700 text-white rounded hover:bg-amber-800 transition-colors text-center sm:text-left"
            >
              Demander un devis gratuit
            </a>
            <a 
              href="#services" 
              className="px-6 py-3 bg-transparent border border-white text-white rounded hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center sm:justify-start"
            >
              Découvrir nos services
              <ChevronRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - maintained on all devices with responsive sizing */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className={`${isMobile ? 'w-6 h-10' : 'w-8 h-12'} border-2 border-white rounded-full flex justify-center p-1 transition-all duration-300`}>
          <div className={`${isMobile ? 'w-1 h-2' : 'w-1 h-3'} bg-white rounded-full mt-1 animate-pulse`}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;





