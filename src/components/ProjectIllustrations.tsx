/**
 * Inline SVG illustrations for each project — consistent line-art style with
 * the Arctic Blue palette. Kept dependency-free (no external images) so the
 * build never breaks and works under any base path.
 */

export function ForestFireIllustration() {
  return (
    <svg
      viewBox="0 0 400 176"
      className="h-full w-full"
      role="img"
      aria-label="AI-based forest fire prediction concept"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* soft grid */}
      <defs>
        <pattern id="ff-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="#E2E8F0" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="176" fill="url(#ff-grid)" opacity="0.5" />

      {/* data trend line */}
      <path
        d="M16 132 L64 108 L112 120 L160 84 L208 96 L256 60 L304 72 L352 40"
        fill="none"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        [64, 108],
        [160, 84],
        [256, 60],
        [352, 40],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3.5" fill="#38BDF8" />
      ))}

      {/* tree silhouettes */}
      {[
        [40, 150],
        [110, 150],
        [190, 150],
        [270, 150],
        [350, 150],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`} stroke="#172554" strokeWidth="2" fill="#EFF6FF">
          <path d="M0 0 L-10 -22 L10 -22 Z" fill="#60A5FA" opacity="0.45" />
          <path d="M0 -8 L-12 -28 L12 -28 Z" fill="#60A5FA" opacity="0.6" />
          <path d="M0 -16 L-10 -36 L10 -36 Z" fill="#60A5FA" opacity="0.8" />
        </g>
      ))}

      {/* nodes overlay */}
      <g>
        <circle cx="304" cy="72" r="9" fill="#fff" stroke="#2563EB" strokeWidth="2" />
        <circle cx="352" cy="40" r="9" fill="#fff" stroke="#38BDF8" strokeWidth="2" />
      </g>
    </svg>
  );
}

export function BlockchainHealthIllustration() {
  return (
    <svg
      viewBox="0 0 400 176"
      className="h-full w-full"
      role="img"
      aria-label="Blockchain-based healthcare data access concept"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="176" fill="#EFF6FF" opacity="0.6" />

      {/* chain of blocks */}
      {[40, 130, 220, 310].map((x, i) => (
        <g key={i}>
          <rect
            x={x}
            y={64}
            width="56"
            height="56"
            rx="10"
            fill="#fff"
            stroke="#2563EB"
            strokeWidth="2"
          />
          {/* medical cross inside */}
          <path
            d={`M${x + 28} 76 v36 M${x + 10} 92 h36`}
            stroke="#38BDF8"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {i < 3 && (
            <path
              d={`M${x + 56} 92 h18`}
              stroke="#60A5FA"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          )}
        </g>
      ))}

      {/* data flow above */}
      <path
        d="M68 64 Q140 28 200 40 Q300 56 352 64"
        fill="none"
        stroke="#2563EB"
        strokeWidth="1.5"
        strokeDasharray="3 5"
        opacity="0.7"
      />
      <circle cx="68" cy="64" r="3" fill="#38BDF8" />
      <circle cx="200" cy="40" r="3" fill="#38BDF8" />
      <circle cx="352" cy="64" r="3" fill="#38BDF8" />

      {/* lock badge */}
      <g transform="translate(330 124)">
        <rect x="-14" y="-10" width="28" height="24" rx="6" fill="#2563EB" />
        <rect x="-9" y="-18" width="18" height="12" rx="4" fill="none" stroke="#2563EB" strokeWidth="3" />
        <circle cx="0" cy="2" r="3" fill="#fff" />
      </g>
    </svg>
  );
}

export function TraceSecIllustration() {
  return (
    <svg
      viewBox="0 0 400 176"
      className="h-full w-full"
      role="img"
      aria-label="AI-based security incident reconstruction concept"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="ts-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#EFF6FF" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
      </defs>
      <rect width="400" height="176" fill="url(#ts-bg)" />

      {/* event timeline axis */}
      <path d="M24 96 H376" stroke="#E2E8F0" strokeWidth="2" />
      {[48, 120, 200, 280, 352].map((x, i) => (
        <g key={i}>
          <line x1={x} y1={88} x2={x} y2={104} stroke="#64748B" strokeWidth="2" />
          <text
            x={x}
            y={116}
            textAnchor="middle"
            fontSize="9"
            fill="#64748B"
            fontFamily="Inter, sans-serif"
          >
            T{i + 1}
          </text>
        </g>
      ))}

      {/* correlated nodes */}
      {[
        { x: 48, y: 56, c: '#2563EB' },
        { x: 120, y: 72, c: '#60A5FA' },
        { x: 200, y: 48, c: '#38BDF8' },
        { x: 280, y: 64, c: '#2563EB' },
        { x: 352, y: 40, c: '#38BDF8' },
      ].map((n, i) => (
        <g key={i}>
          {i < 4 && (
            <line
              x1={n.x}
              y1={n.y}
              x2={[48, 120, 200, 280, 352][i + 1]}
              y2={[56, 72, 48, 64, 40][i + 1]}
              stroke="#60A5FA"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              opacity="0.7"
            />
          )}
          <circle cx={n.x} cy={n.y} r="7" fill="#fff" stroke={n.c} strokeWidth="2.5" />
          <circle cx={n.x} cy={n.y} r="2.5" fill={n.c} />
        </g>
      ))}

      {/* log lines */}
      {[140, 152, 164].map((y, i) => (
        <g key={i} transform={`translate(24 ${y})`}>
          <rect width="350" height="6" rx="3" fill="#E2E8F0" />
          <rect width={120 + i * 40} height="6" rx="3" fill="#38BDF8" opacity="0.5" />
        </g>
      ))}
    </svg>
  );
}
