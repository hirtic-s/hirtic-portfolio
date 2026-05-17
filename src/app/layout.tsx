import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const excon = localFont({
  src: "./fonts/Excon-Variable.woff2",
  variable: "--font-excon",
  display: "swap",
  adjustFontFallback: "Arial",
});

const okine = localFont({
  src: [
    { path: "./fonts/made-okine-sans/MADEOkineSansPERSONALUSE-Thin.otf", weight: "100", style: "normal" },
    { path: "./fonts/made-okine-sans/MADEOkineSansPERSONALUSE-Light.otf", weight: "300", style: "normal" },
    { path: "./fonts/made-okine-sans/MADEOkineSansPERSONALUSE-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/made-okine-sans/MADEOkineSansPERSONALUSE-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/made-okine-sans/MADEOkineSansPERSONALUSE-Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/made-okine-sans/MADEOkineSansPERSONALUSE-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-okine",
  display: "swap",
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  title: "Hirtic Selvavinayagam | Software Engineer",
  description: "Portfolio of Hirtic Selvavinayagam - Software Engineer specializing in robust backend architectures and predictive modeling.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${excon.variable} ${okine.variable} dark scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased overflow-x-hidden font-body bg-black text-[#e5e1e4]">
        {/* Instant CSS preloader — renders before JS hydrates, eliminates black flash */}
        <div
          id="css-preloader"
          style={{
            position: 'fixed',
            inset: 0,
            background: '#000000',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'css-preloader-fade 0.5s ease-in-out 1.4s forwards',
            pointerEvents: 'none',
          }}
        >
          <style>{`
            @keyframes css-preloader-fade {
              to { opacity: 0; visibility: hidden; }
            }
            @keyframes css-dot-pulse {
              0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
              40% { transform: scale(1); opacity: 1; }
            }
          `}</style>
          <div style={{ display: 'flex', gap: '10px' }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  animation: `css-dot-pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
