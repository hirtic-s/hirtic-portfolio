"use client";

import { useEffect, useRef } from "react";

const CODE_LINES = [
  "public static void main(String[] args) {",
  "  import boto3",
  "  JWT.builder().setSubject(user)",
  "  def predict(model, data):",
  "    return model.forward(data)",
  "  @Autowired",
  "  private UserService userService;",
  "  s3 = boto3.client('s3')",
  "  System.out.println(result);",
  "  response = requests.post(url)",
  "  .setExpiration(expDate)",
  "  docker-compose up -d",
  "  SELECT * FROM users WHERE",
  "  class Pipeline(nn.Module):",
  "  kubectl apply -f deploy.yml",
  "  @RestController",
  "  from sklearn import metrics",
  "  .signWith(SignatureAlgorithm)",
  "  HashMap<String, List<Node>>",
  "  async def fetch_data(url):",
];

export default function CodeMascot() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create two sets of code columns for continuous scrolling
    const container = containerRef.current;
    if (!container) return;

    const columns = container.querySelectorAll(".code-col");
    columns.forEach((col, i) => {
      const delay = -(i * 2.3); // stagger columns
      (col as HTMLElement).style.animationDelay = `${delay}s`;
    });
  }, []);

  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-3 select-none">
      <svg
        viewBox="0 0 200 220"
        className="w-full h-full drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Monitor Body */}
        <rect
          x="20"
          y="10"
          width="160"
          height="130"
          rx="16"
          ry="16"
          fill="#111111"
          stroke="#10b981"
          strokeWidth="3"
        />

        {/* Inner Screen */}
        <rect
          x="32"
          y="22"
          width="136"
          height="106"
          rx="8"
          ry="8"
          fill="#0a0f0a"
        />

        {/* Screen bezel highlight */}
        <rect
          x="32"
          y="22"
          width="136"
          height="106"
          rx="8"
          ry="8"
          fill="none"
          stroke="#10b981"
          strokeWidth="0.5"
          opacity="0.3"
        />

        {/* Clip path for code inside screen */}
        <defs>
          <clipPath id="screenClip">
            <rect x="34" y="24" width="132" height="102" rx="6" ry="6" />
          </clipPath>

          {/* Glow filter */}
          <filter id="codeGlow">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Scrolling code columns behind the face */}
        <g clipPath="url(#screenClip)" opacity="0.6" filter="url(#codeGlow)">
          {/* Column 1 */}
          <g className="code-col mascot-code-scroll">
            {CODE_LINES.map((line, i) => (
              <text
                key={`c1-${i}`}
                x="38"
                y={30 + i * 12}
                fill="#10b981"
                fontSize="5"
                fontFamily="monospace"
                opacity={0.4 + (i % 3) * 0.2}
              >
                {line.slice(0, 18)}
              </text>
            ))}
            {CODE_LINES.map((line, i) => (
              <text
                key={`c1b-${i}`}
                x="38"
                y={30 + (CODE_LINES.length + i) * 12}
                fill="#10b981"
                fontSize="5"
                fontFamily="monospace"
                opacity={0.4 + (i % 3) * 0.2}
              >
                {line.slice(0, 18)}
              </text>
            ))}
          </g>

          {/* Column 2 */}
          <g className="code-col mascot-code-scroll" style={{ animationDelay: "-3s" }}>
            {CODE_LINES.map((line, i) => (
              <text
                key={`c2-${i}`}
                x="92"
                y={30 + i * 12}
                fill="#10b981"
                fontSize="5"
                fontFamily="monospace"
                opacity={0.3 + (i % 4) * 0.15}
              >
                {line.slice(5, 23)}
              </text>
            ))}
            {CODE_LINES.map((line, i) => (
              <text
                key={`c2b-${i}`}
                x="92"
                y={30 + (CODE_LINES.length + i) * 12}
                fill="#10b981"
                fontSize="5"
                fontFamily="monospace"
                opacity={0.3 + (i % 4) * 0.15}
              >
                {line.slice(5, 23)}
              </text>
            ))}
          </g>
        </g>

        {/* Face elements on top of code */}
        <g>
          {/* Left eye — open, happy arc */}
          <path
            d="M 62 62 Q 68 52 74 62"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Right eye — wink */}
          <line
            x1="120"
            y1="60"
            x2="134"
            y2="60"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Big smile */}
          <path
            d="M 72 82 Q 100 108 128 82"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Mouth interior for character */}
          <path
            d="M 78 85 Q 100 104 122 85"
            fill="#e53e3e"
            stroke="none"
          />
        </g>

        {/* Monitor Stand */}
        <rect x="85" y="140" width="30" height="12" rx="2" fill="#111111" stroke="#10b981" strokeWidth="1.5" />
        <rect x="70" y="150" width="60" height="8" rx="4" fill="#111111" stroke="#10b981" strokeWidth="1.5" />

        {/* Left Arm */}
        <g>
          <line x1="20" y1="90" x2="6" y2="75" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
          {/* Hand / wave */}
          <circle cx="4" cy="73" r="4" fill="#10b981" opacity="0.8" />
        </g>

        {/* Right Arm */}
        <g>
          <line x1="180" y1="90" x2="194" y2="100" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="196" cy="102" r="4" fill="#10b981" opacity="0.8" />
        </g>

        {/* Speech Bubble with heart */}
        <g className="mascot-float">
          <rect x="155" y="2" width="32" height="22" rx="8" fill="#10b981" opacity="0.9" />
          <polygon points="160,24 165,24 158,30" fill="#10b981" opacity="0.9" />
          {/* Heart */}
          <path
            d="M 171 8 C 167 4, 161 8, 165 13 L 171 18 L 177 13 C 181 8, 175 4, 171 8 Z"
            fill="white"
          />
        </g>

        {/* Subtle power LED */}
        <circle cx="100" cy="134" r="2" fill="#10b981" className="mascot-led-blink" />
      </svg>

      {/* Animated code overlay using HTML div for smooth CSS animation */}
      <div
        ref={containerRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}
