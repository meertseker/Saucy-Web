import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saucy AI - Professional Vocal Mixing in Seconds",
  description: "Transform raw vocals into professional mixes with AI-powered presets. Get studio-quality results in seconds, not hours.",
  keywords: "AI vocal mixing, FL Studio presets, vocal processing, music production, audio mixing",
  authors: [{ name: "Saucy AI" }],
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
