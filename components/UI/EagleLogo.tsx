import React from 'react';

interface EagleLogoProps {
  className?: string;
  size?: number;
}

export const EagleLogo: React.FC<EagleLogoProps> = ({ className = "", size = 48 }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Definições de Gradientes e Filtros */}
        <defs>
          <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <style>
            {`
              @keyframes scan {
                0% { transform: translateY(-100%); opacity: 0; }
                50% { opacity: 0.8; }
                100% { transform: translateY(100%); opacity: 0; }
              }
              .scan-line {
                animation: scan 3s linear infinite;
              }
              .eagle-path {
                stroke-dasharray: 300;
                stroke-dashoffset: 300;
                animation: draw-path 2s ease-out forwards;
              }
              @keyframes draw-path {
                to { stroke-dashoffset: 0; }
              }
            `}
          </style>
        </defs>

        {/* Forma Base da Águia (Minimalista/Geométrica) */}
        <path 
          d="M20 30L50 20L80 30L55 50L50 85L45 50L20 30Z" 
          stroke="url(#logo-grad)" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="eagle-path"
          filter="url(#glow)"
        />
        
        {/* Linhas de Velocidade/Asas Internas */}
        <path d="M35 40L45 45" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <path d="M65 40L55 45" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        
        {/* Olho Digital Central */}
        <circle cx="50" cy="35" r="2" fill="white" className="animate-pulse" />

        {/* Efeito de Scanline Interno */}
        <rect x="25" y="25" width="50" height="2" fill="#f97316" className="scan-line" opacity="0.5" />
      </svg>
    </div>
  );
};