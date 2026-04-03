import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const RobotAnimation = ({ src = "https://lottie.host/c9fa0472-a34d-4cbf-a5fd-c14de581bd31/QZ3Jyt3QtL.lottie", className = "" }) => {
  return (
    <div className={`relative w-full max-w-lg mx-auto aspect-square overflow-visible ${className}`}>
      {/* Background Glow */}
      <div className="absolute inset-0 bg-neon-cyan/20 blur-[80px] rounded-full scale-90 pointer-events-none" />
      
      <DotLottieReact
        src={src}
        loop
        autoplay
        className="w-full h-full relative z-10 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]"
      />

      {/* Cybernetic Frame Overlay */}
      <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-cyan/30 rounded-tl-xl" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-cyan/30 rounded-tr-xl" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-cyan/30 rounded-bl-xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-cyan/30 rounded-br-xl" />
      </div>
      
      {/* Dynamic Scan Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-40 animate-scan pointer-events-none z-20" />
    </div>
  );
};

export default RobotAnimation;
