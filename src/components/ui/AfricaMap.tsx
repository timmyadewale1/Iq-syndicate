/**
 * AfricaMap - a simplified, stylized continent silhouette (not
 * survey-accurate) used as a decorative, floating illustration. Good
 * enough for an editorial accent; swap for a licensed vector map if
 * geographic precision is ever required.
 */
export default function AfricaMap({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} style={{ animation: "float-slow 6s ease-in-out infinite" }}>
      <svg viewBox="0 0 220 240" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <defs>
          <filter id="map-warm" x="-10%" y="-10%" width="120%" height="120%">
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.86 0 0 0 0 0.62 0 0 0 0 0.31 0 0 0 1 0"
            />
          </filter>
        </defs>

        {/* dashed orbit ring */}
        <circle
          cx="110"
          cy="120"
          r="112"
          fill="none"
          stroke="rgba(215,184,146,0.7)"
          strokeWidth="1.4"
          strokeDasharray="4 8"
        />

        {/* actual continent artwork from the provided SVG asset */}
        <image
          href="/images/africa.svg"
          x="18"
          y="18"
          width="184"
          height="204"
          preserveAspectRatio="xMidYMid meet"
          filter="url(#map-warm)"
        />

        {/* Nigeria marker (kept commented out) */}
        {/* <g transform="translate(96,108)">
          <circle r="10" fill="rgba(215,184,146,0.25)" />
          <circle r="4" fill="#d7b892" />
        </g> */}
      </svg>
    </div>
  );
}