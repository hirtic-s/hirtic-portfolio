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
  title: "Gallery Portfolio | Software Engineer",
  description: "Portfolio of Hirtic Selvavinayagam - Software Engineer specializing in robust backend architectures and predictive modeling.",
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
        {children}
      </body>
    </html>
  );
}
