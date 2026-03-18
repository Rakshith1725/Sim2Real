import React from 'react';

const Logo = ({ className = "h-12 w-auto", iconColor = "#22d3ee" }) => {
  return (
    <div className={`flex items-center gap-3 ${className} group`}>
      {/* Sleek Robot Icon with adjusted viewBox for full visibility */}
      <svg
        viewBox="-5 -5 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto drop-shadow-[0_0_12px_rgba(34,211,238,0.4)] transition-transform duration-500 group-hover:scale-103 overflow-visible"
      >
        {/* Antennas with pulse */}
        <line x1="25" y1="12" x2="25" y2="4" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="25" cy="4" r="2.5" fill={iconColor} className="animate-pulse" />
        <g stroke={iconColor} strokeWidth="1" className="animate-flicker">
          <line x1="21" y1="1" x2="29" y2="1" />
          <line x1="25" y1="-2" x2="25" y2="4" />
        </g>

        {/* Floating Gear */}
        <g transform="translate(42, 16) scale(0.65)" fill={iconColor} className="animate-[spin_12s_linear_infinite]">
          <path d="M12,8.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S12.8,8.5,12,8.5z M20,11.5l-2.1-0.2 c-0.2-0.6-0.4-1.2-0.7-1.7l1.3-1.6l-1.4-1.4l-1.6,1.4c-0.5-0.3-1.1-0.5-1.7-0.7V5h-2v2.1c-0.6,0.2-1.2,0.4-1.7,0.7L8.5,6.4L7.1,7.8 l1.3,1.6c-0.3,0.5-0.5,1.1-0.7,1.7L5.5,11.5v2l2.1,0.2c0.2,0.6,0.4,1.2,0.7,1.7l-1.3,1.6l1.4,1.4l1.6-1.3c0.5,0.3,1.1,0.5,1.7,0.7V20 h2v-2.1c0.6-0.2,1.2-0.4,1.7-0.7l1.6,1.3l1.4-1.4l-1.3-1.6c0.3-0.5,0.5-1.1,0.7-1.7l2.1-0.2V11.5z M12,15.5c-1.9,0-3.5-1.6-3.5-3.5 s1.6-3.5,3.5-3.5s3.5,1.6,3.5,3.5S13.9,15.5,12,15.5z" transform="translate(-12,-12)" />
        </g>

        {/* Main Robot Head */}
        <path
          d="M10,18 C10,14 14,12 25,12 C36,12 40,14 40,18 L40,32 C40,36 36,40 25,40 C14,40 10,36 10,32 Z"
          fill="#050610"
          stroke={iconColor}
          strokeWidth="3"
        />
        
        {/* Face Shield */}
        <path
          d="M15,22 C15,20 18,18 25,18 C32,18 35,20 35,22 L35,30 C35,32 32,34 25,34 C18,34 15,32 15,30 Z"
          fill={iconColor}
          fillOpacity="0.1"
          stroke={iconColor}
          strokeWidth="1.5"
        />
        
        {/* Digital Eyes */}
        <rect x="18" y="24" width="6" height="3" rx="1.5" fill={iconColor} className="animate-flicker" />
        <rect x="26" y="24" width="6" height="3" rx="1.5" fill={iconColor} className="animate-flicker" />
        
        {/* Neck/Base Structure */}
        <path d="M18,40 L32,40 L34,44 L16,44 Z" fill={iconColor} />
        <path d="M12,45 L38,45 L39,48 L11,48 Z" fill={iconColor} />
      </svg>

      {/* Modern, Bold Brand Text */}
      <div className="flex flex-col justify-center leading-[1] select-none text-white whitespace-nowrap">
        <span className="text-2xl md:text-3xl font-black uppercase tracking-[-0.04em] font-sans">
          Sim<span className="text-neon-cyan drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">2</span>Real
        </span>
      </div>
    </div>
  );
};

export default Logo;
