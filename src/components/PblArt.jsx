import { useReducedMotion } from "framer-motion";

// Original illustrations for the PBL achievement cards.
const INK = "#141414";

function Bin({ x, y, level, color }) {
  const h = 16;
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-2" y="-3" width="18" height="3" rx="1" fill={INK} />
      <rect x="0" y="0" width="14" height={h} rx="2" fill="#fff" stroke={INK} strokeWidth="1.4" />
      <rect x="2" y={h - 2 - (h - 4) * level} width="10" height={(h - 4) * level} rx="1" fill={color} />
    </g>
  );
}

function Ping({ x, y, anim, delay = "0s" }) {
  return (
    <g transform={`translate(${x} ${y})`} fill="none" stroke="#2f6fed" strokeWidth="1.4" strokeLinecap="round">
      {[5, 9].map((r, i) => (
        <path key={r} d={`M${-r} 0 A${r} ${r} 0 0 1 ${r} 0`} opacity={anim ? 0 : 0.7}>
          {anim && (
            <animate
              attributeName="opacity"
              values="0;0.9;0"
              dur="2s"
              begin={`${parseFloat(delay) + i * 0.25}s`}
              repeatCount="indefinite"
            />
          )}
        </path>
      ))}
    </g>
  );
}

export function WasteArt() {
  const anim = !useReducedMotion();
  return (
    <svg viewBox="0 0 320 140" className="h-full w-full" role="img" aria-label="City map: smart bins report fill levels and a truck follows an optimized route to the full ones">
      <rect width="320" height="140" fill="#eef6ef" />
      {/* blocks */}
      {[
        [8, 8, 52, 22], [80, 8, 80, 22], [180, 8, 75, 22], [275, 8, 38, 22],
        [8, 50, 52, 45], [80, 50, 80, 45], [180, 50, 75, 45], [275, 50, 38, 45],
        [8, 115, 52, 20], [80, 115, 80, 20], [180, 115, 75, 20], [275, 115, 38, 20],
      ].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="4" fill="#dcebdd" />
      ))}
      {/* roads */}
      <g stroke="#fff" strokeWidth="12">
        <line x1="0" y1="40" x2="320" y2="40" />
        <line x1="0" y1="105" x2="320" y2="105" />
        <line x1="70" y1="0" x2="70" y2="140" />
        <line x1="170" y1="0" x2="170" y2="140" />
        <line x1="265" y1="0" x2="265" y2="140" />
      </g>
      {/* optimized route */}
      <path
        id="pbl-route"
        d="M0 105 H70 V40 H170 V105 H265 V40 H320"
        fill="none"
        stroke="#ff5a1f"
        strokeWidth="2.5"
        strokeDasharray="6 5"
        strokeLinejoin="round"
      >
        {anim && <animate attributeName="stroke-dashoffset" from="22" to="0" dur="1s" repeatCount="indefinite" />}
      </path>
      {/* bins: full ones are on the route, the nearly empty one is skipped */}
      <Bin x={48} y={18} level={0.9} color="#ef4444" />
      <Bin x={180} y={83} level={0.65} color="#f59e0b" />
      <Bin x={276} y={18} level={0.85} color="#ef4444" />
      <Bin x={112} y={117} level={0.2} color="#22c55e" />
      <Ping x={55} y={11} anim={anim} />
      <Ping x={187} y={76} anim={anim} delay="0.6s" />
      <Ping x={283} y={11} anim={anim} delay="1.2s" />
      <text x="296" y="133" textAnchor="end" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#2f6fed">
        ESP32 → MQTT
      </text>
      {/* truck */}
      <g transform={anim ? undefined : "translate(170 70) rotate(90)"}>
        {anim && (
          <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
            <mpath href="#pbl-route" />
          </animateMotion>
        )}
        <rect x="-11" y="-5" width="14" height="10" rx="1.5" fill="#fff" stroke={INK} strokeWidth="1.4" />
        <rect x="3" y="-4" width="7" height="8" rx="1.5" fill={INK} />
        <rect x="-9" y="-2" width="10" height="4" rx="1" fill="#22c55e" />
      </g>
    </svg>
  );
}

export function BatteryArt() {
  const anim = !useReducedMotion();
  const crack = "M98 38 L106 56 L96 70 L108 84 L100 102";
  return (
    <svg viewBox="0 0 320 140" className="h-full w-full" role="img" aria-label="Simulation of a self-healing battery: a crack closes up and capacity recovers">
      <rect width="320" height="140" fill="#fff4ec" />
      <text x="14" y="20" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#ff5a1f" letterSpacing="1.5">
        SIMULATION
      </text>

      {/* battery */}
      <rect x="36" y="38" width="140" height="64" rx="10" fill="#fff" stroke={INK} strokeWidth="2" />
      <rect x="176" y="58" width="8" height="24" rx="2" fill={INK} />
      <rect x="43" y="45" height="50" width={anim ? 60 : 118} rx="6" fill="#22c55e" opacity="0.85">
        {anim && <animate attributeName="width" values="60;60;126;126;60" keyTimes="0;0.3;0.6;0.9;1" dur="6s" repeatCount="indefinite" />}
      </rect>
      {/* micro-capsules releasing healing agent */}
      {[
        [60, 60, 0],
        [140, 80, 0.4],
        [70, 88, 0.8],
        [150, 52, 1.2],
      ].map(([cx, cy, d]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="#ffd2bf" stroke="#ff5a1f" strokeWidth="1">
          {anim && (
            <>
              <animate attributeName="cx" values={`${cx};102;102;${cx}`} keyTimes="0;0.45;0.9;1" dur="6s" begin={`${d}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.4;0.5;0.95;1" dur="6s" begin={`${d}s`} repeatCount="indefinite" />
            </>
          )}
        </circle>
      ))}
      {/* crack, then the healed seam drawing over it */}
      <path d={crack} fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinejoin="round" opacity={anim ? 1 : 0}>
        {anim && <animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.35;0.6;0.92;1" dur="6s" repeatCount="indefinite" />}
      </path>
      <path
        d={crack}
        fill="none"
        stroke="#16a34a"
        strokeWidth="3"
        strokeLinejoin="round"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset={anim ? 1 : 0}
      >
        {anim && <animate attributeName="stroke-dashoffset" values="1;1;0;0;1" keyTimes="0;0.35;0.6;0.92;1" dur="6s" repeatCount="indefinite" />}
      </path>

      {/* capacity graph */}
      <g fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#6b6a65">
        <line x1="214" y1="30" x2="214" y2="106" stroke={INK} strokeOpacity="0.3" />
        <line x1="214" y1="106" x2="306" y2="106" stroke={INK} strokeOpacity="0.3" />
        <text x="216" y="26">capacity</text>
        <text x="306" y="118" textAnchor="end">cycles</text>
      </g>
      <polyline
        points="216,44 238,47 252,86 268,62 286,50 304,47"
        fill="none"
        stroke="#2f6fed"
        strokeWidth="2.2"
        strokeLinejoin="round"
        strokeLinecap="round"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="0"
      >
        {anim && <animate attributeName="stroke-dashoffset" values="1;0;0" keyTimes="0;0.7;1" dur="6s" repeatCount="indefinite" />}
      </polyline>
      <circle cx="252" cy="86" r="3" fill="#ef4444" />
      <text x="256" y="96" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#ef4444">damage</text>
      <text x="270" y="58" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#16a34a">healed</text>
    </svg>
  );
}

export default function PblArt({ kind }) {
  if (kind === "waste") return <WasteArt />;
  if (kind === "battery") return <BatteryArt />;
  return null;
}
