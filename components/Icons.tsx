import React from "react";

type SvgProps = { size?: number; color?: string; strokeWidth?: number; style?: React.CSSProperties };

function ic(paths: string[], { size = 24, color = "currentColor", strokeWidth = 1.8, style }: SvgProps = {}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style}>
      {paths.map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}

const Tooth = ({ size = 24, color = "currentColor", style }: SvgProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={style}>
    <path d="M12 2.2c-2.3 0-3.1 1-4.8 1-1.2 0-2.3-.6-3.3.2C2.4 4.7 2.6 8 3.4 11c.6 2.2.7 3.6 1.1 5.4.4 1.8.7 4.2 1.9 4.4 1.3.2 1.4-2 1.7-3.6.3-1.5.6-2.8 1.9-2.8s1.6 1.3 1.9 2.8c.3 1.6.4 3.8 1.7 3.6 1.2-.2 1.5-2.6 1.9-4.4.4-1.8.5-3.2 1.1-5.4.8-3 1-6.3-.5-7.6-1-.8-2.1-.2-3.3-.2-1.7 0-2.5-1-4.8-1z"/>
  </svg>
);

const Check = ({ size = 24, color = "currentColor", strokeWidth = 2 }: SvgProps) =>
  ic(["M5 13l4 4L19 7"], { size, color, strokeWidth });

const Calendar = ({ size = 24, color = "currentColor" }: SvgProps) =>
  ic(["M8 2v4", "M16 2v4", "M3 9h18", "M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z", "M9 14l2 2 4-4"], { size, color });

const WhatsApp = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff">
    <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96A9.96 9.96 0 0 0 12.04 2Zm5.84 14.24c-.25.7-1.45 1.34-2 1.42-.53.08-1.2.11-1.94-.12-.45-.14-1.02-.33-1.76-.65-3.1-1.34-5.12-4.46-5.28-4.67-.15-.2-1.26-1.67-1.26-3.18 0-1.52.8-2.26 1.08-2.57.28-.31.61-.39.81-.39.2 0 .41 0 .58.01.19.01.44-.07.69.53.25.6.86 2.1.94 2.25.08.16.13.34.03.55-.1.2-.15.33-.3.5-.15.18-.32.4-.46.53-.15.16-.3.33-.13.64.17.31.76 1.25 1.62 2.02 1.12.99 2.05 1.3 2.36 1.45.31.16.49.13.67-.08.18-.2.77-.9.97-1.2.2-.31.41-.26.69-.16.28.1 1.78.84 2.09 1 .31.15.51.23.59.36.08.13.08.74-.17 1.43Z"/>
  </svg>
);

const WhatsAppSmall = ({ size = 19 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96A9.96 9.96 0 0 0 12.04 2Zm5.84 14.24c-.25.7-1.45 1.34-2 1.42-.53.08-1.2.11-1.94-.12-.45-.14-1.02-.33-1.76-.65-3.1-1.34-5.12-4.46-5.28-4.67-.15-.2-1.26-1.67-1.26-3.18 0-1.52.8-2.26 1.08-2.57.28-.31.61-.39.81-.39.2 0 .41 0 .58.01.19.01.44-.07.69.53.25.6.86 2.1.94 2.25.08.16.13.34.03.55-.1.2-.15.33-.3.5-.15.18-.32.4-.46.53-.15.16-.3.33-.13.64.17.31.76 1.25 1.62 2.02 1.12.99 2.05 1.3 2.36 1.45.31.16.49.13.67-.08.18-.2.77-.9.97-1.2.2-.31.41-.26.69-.16.28.1 1.78.84 2.09 1 .31.15.51.23.59.36.08.13.08.74-.17 1.43Z"/>
  </svg>
);

const Instagram = ({ size = 19 }: { size?: number }) =>
  ic(["M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Z", "M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z", "M17.5 6.5h.01"], { size });

const Facebook = ({ size = 19 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.5 8.5h-2v-1.3c0-.6.4-.7.6-.7h1.3V4l-2-.01c-2.2 0-2.7 1.65-2.7 2.7v1.8H9v2.3h1.7V20h2.8v-6.5h1.9l.3-2.3Z"/>
  </svg>
);

const Pin = ({ size = 19, color = "currentColor" }: SvgProps) =>
  ic(["M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11Z", "M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"], { size, color });

const Clock = ({ size = 19, color = "currentColor" }: SvgProps) =>
  ic(["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z", "M12 7v5l3 2"], { size, color });

const Chevron = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.45)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 6l6 6-6 6"/>
  </svg>
);

const serviceIcons = [
  ["M12 2.2c-2.3 0-3.1 1-4.8 1-1.2 0-2.3-.6-3.3.2C2.4 4.7 2.6 8 3.4 11c.6 2.2.7 3.6 1.1 5.4.4 1.8.7 4.2 1.9 4.4 1.3.2 1.4-2 1.7-3.6.3-1.5.6-2.8 1.9-2.8s1.6 1.3 1.9 2.8c.3 1.6.4 3.8 1.7 3.6 1.2-.2 1.5-2.6 1.9-4.4.4-1.8.5-3.2 1.1-5.4.8-3 1-6.3-.5-7.6-1-.8-2.1-.2-3.3-.2-1.7 0-2.5-1-4.8-1z"],
  ["M9 12l2 2 4-4", "M3 5h18v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"],
  ["M12 3v1", "M18.36 5.64l-.7.7", "M21 12h-1", "M18.36 18.36l-.7-.7", "M12 21v-1", "M5.64 18.36l.7-.7", "M3 12h1", "M5.64 5.64l.7.7", "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"],
  ["M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"],
];

const Service = ({ index, size = 17, color = "currentColor" }: { index: number; size?: number; color?: string }) =>
  ic(serviceIcons[index % serviceIcons.length], { size, color });

const linkIconMap: Record<string, string[]> = {
  map: ["M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11Z", "M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"],
  instagram: ["M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Z", "M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z", "M17.5 6.5h.01"],
  person: ["M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z", "M4 20c0-4 3.6-7 8-7s8 3 8 7"],
};

const Link = ({ icon, size = 20, color = "currentColor" }: { icon: "map" | "instagram" | "person"; size?: number; color?: string }) =>
  ic(linkIconMap[icon] ?? linkIconMap.map, { size, color });

const Icons = { Tooth, Check, Calendar, WhatsApp, WhatsAppSmall, Instagram, Facebook, Pin, Clock, Chevron, Service, Link };
export default Icons;
