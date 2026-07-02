import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ultimate Gamenight',
  description: 'The whole game show, in your living room.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
