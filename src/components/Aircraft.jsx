// Original line-art aircraft (top-down, nose pointing right).
const INK = "#141414";

export function FighterJet({ className = "", accent = "#2f6fed", afterburner = true }) {
  return (
    <svg viewBox="0 0 124 60" className={className} aria-hidden="true">
      {afterburner && (
        <>
          <ellipse cx="4" cy="28" rx="6" ry="1.6" fill="#ff5a1f" opacity="0.85" />
          <ellipse cx="4" cy="32" rx="6" ry="1.6" fill="#ff5a1f" opacity="0.85" />
        </>
      )}
      {/* delta wings */}
      <path d="M84 28 L46 4 L37 4 L34 28 Z" fill="#fff" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M84 32 L46 56 L37 56 L34 32 Z" fill="#fff" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
      <line x1="44" y1="9" x2="40" y2="27" stroke={accent} strokeWidth="2" />
      <line x1="44" y1="51" x2="40" y2="33" stroke={accent} strokeWidth="2" />
      {/* tailplanes */}
      <path d="M26 28 L14 15 L9 15 L11 28 Z" fill="#fff" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M26 32 L14 45 L9 45 L11 32 Z" fill="#fff" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
      {/* fuselage */}
      <path d="M8 26 L22 25 L98 26.5 Q116 28 122 30 Q116 32 98 33.5 L22 35 L8 34 Z" fill="#fff" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
      <line x1="30" y1="30" x2="86" y2="30" stroke={INK} strokeOpacity="0.25" />
      {/* canopy */}
      <ellipse cx="98" cy="30" rx="8" ry="2.6" fill={accent} />
    </svg>
  );
}

export function RCPlane({ className = "", accent = "#ff5a1f" }) {
  return (
    <svg viewBox="0 0 120 50" className={className} aria-hidden="true">
      <path d="M50 25 L57 2 L68 2 L66 25 L68 48 L57 48 Z" fill="#fff" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
      <rect x="57" y="2" width="11" height="5" fill={accent} />
      <rect x="57" y="43" width="11" height="5" fill={accent} />
      <path d="M10 25 L15 12 L24 12 L23 25 L24 38 L15 38 Z" fill="#fff" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6 22 L92 21 Q106 22 108 25 Q106 28 92 29 L6 28 Z" fill="#fff" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
      <ellipse cx="82" cy="25" rx="8" ry="2.4" fill={INK} />
      <rect className="prop-blur" x="109" y="11" width="2.4" height="28" rx="1.2" fill={INK} opacity="0.7" />
    </svg>
  );
}

export function Drone({ className = "", accent = "#2f6fed" }) {
  const rotors = [
    [12, 12],
    [48, 12],
    [12, 48],
    [48, 48],
  ];
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <line x1="12" y1="12" x2="48" y2="48" stroke={INK} strokeWidth="2.5" />
      <line x1="48" y1="12" x2="12" y2="48" stroke={INK} strokeWidth="2.5" />
      {rotors.map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="10.5" fill={accent} fillOpacity="0.12" stroke={INK} strokeWidth="1.2" />
          <g className="spin">
            <rect x={cx - 9} y={cy - 1} width="18" height="2" rx="1" fill={INK} />
          </g>
        </g>
      ))}
      <rect x="21" y="21" width="18" height="18" rx="4" fill="#fff" stroke={INK} strokeWidth="1.6" />
      <circle cx="30" cy="30" r="3" fill="#ff5a1f" />
    </svg>
  );
}
