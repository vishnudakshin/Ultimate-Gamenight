import type { Metadata } from 'next';
import { Unbounded, Poppins, Space_Mono } from 'next/font/google';
import './globals.css';

const unbounded = Unbounded({
  weight: ['500', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-unbounded',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ultimate Gamenight',
  description: 'The whole game show, in your living room.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${unbounded.variable} ${poppins.variable} ${spaceMono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3/dist/tabler-icons.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
