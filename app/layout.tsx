// Dependencies
import type { Metadata } from 'next';

// Styles
import './globals.css';

export const metadata: Metadata = {
  title: 'PMJ Building Services',
  description: 'All aspects of building work undertaken.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-gb">
      <body>{children}</body>
    </html>
  );
}
