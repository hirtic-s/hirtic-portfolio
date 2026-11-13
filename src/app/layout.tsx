import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import Script from "next/script";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-schibsted",
});

export const metadata: Metadata = {
  title: "Hirtic Selvavinayagam: Java and Spring Boot backend engineer",
  description:
    "New-grad backend engineer, VIT class of 2026. Spring Boot projects AvailAPI, Vanish Vault and GooDeals with public code, and an internship at Yokogawa UAE.",
  openGraph: {
    type: "website",
    title: "Hirtic Selvavinayagam, Java backend engineer",
    description: "Three shipped Spring Boot projects, live demos and public code.",
    images: ["/share.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#18191b",
};

// Design kit (public/assets) deal: type service, palette graphite-safety-orange (dark, at the owner's ask), pairing schibsted, radius soft,
// buttons arrow. Keep the :root block after the kit's stylesheets: system.css sets the defaults.
const tokens = `
:root {
  --p-bg: #18191b; --p-surface: #222427; --p-ink: #eff0f1; --p-muted: #9c9ea3;
  --p-accent: #ff4a1f; --p-accent-ink: #18191b; --p-action: #ff4a1f; --p-action-ink: #18191b;
  --p-inv-bg: #eff0f1; --p-inv-surface: #dedfe0; --p-inv-ink: #18191b; --p-inv-muted: #5b5c5e;
  --p-inv-accent: #18191b; --p-inv-accent-ink: #eff0f1; --p-inv-action: #18191b; --p-inv-action-ink: #eff0f1;
  --font-display: var(--font-schibsted), "Schibsted Grotesk", system-ui, sans-serif;
  --font-text: var(--font-schibsted), "Schibsted Grotesk", system-ui, sans-serif;
  --display-weight: 400;
  --display-tracking: -0.035em;
  --display-tracking-xl: -0.042em;
  --ly-scale: 0.98;
}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={schibsted.variable}
      data-type="service"
      data-radius="soft"
      data-buttons="arrow"
      data-motion=""
      suppressHydrationWarning
    >
      <head>
        <meta name="site-kind" content="other" />
        <meta name="page-type" content="service" />
        <link rel="stylesheet" href="/assets/system.css" />
        <link rel="stylesheet" href="/assets/ui/cards.css" />
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        <link rel="stylesheet" href="/assets/layout/layout.css" />
        <link rel="stylesheet" href="/assets/icons/icon.css" />
        <link rel="stylesheet" href="/assets/diagrams/diagram.css" />
        <style dangerouslySetInnerHTML={{ __html: tokens }} />
        <link rel="stylesheet" href="/assets/site.css" />
        {/* the hero's entrance and the moment guard, set before the first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700);" +
              "document.documentElement.classList.add('mo-js');setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500)",
          }}
        />
        <link rel="modulepreload" href="/assets/moments/moments.js" />
        <link rel="modulepreload" href="/assets/moments/lib.js" />
        <link rel="modulepreload" href="/assets/moments/word-highlight/moment.js" />
      </head>
      <body className="ic-dark" suppressHydrationWarning>
        {children}
        {/* the kit's scripts run after hydration so they never fight React over the DOM */}
        <Script type="module" src="/assets/system.js" strategy="afterInteractive" />
        <Script type="module" src="/assets/motion/motion.js" strategy="afterInteractive" />
        <Script type="module" src="/assets/layout/layout.js" strategy="afterInteractive" />
        <Script type="module" src="/assets/diagrams/mount.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
