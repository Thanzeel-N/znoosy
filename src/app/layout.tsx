import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://snoozy-sleep-atelier.harilalhari9910.chatgpt.site'),
  title: 'Snoozy — Sleep Deeper, Live Better',
  description: 'Discover a more considered kind of comfort. Explore the Snoozy mattress collection, thoughtful materials, and the art of a beautifully rested life.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Snoozy — The Art of Rest', description: 'Thoughtfully designed. Deeply restorative. A better night begins here.', images: [{ url: '/images/ritual.jpg', width: 1200, height: 800 }], type: 'website' },
  twitter: { card: 'summary_large_image' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
