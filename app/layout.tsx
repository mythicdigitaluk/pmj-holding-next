// Dependencies
import type { Metadata } from 'next';

// Styles
import './globals.css';

export const metadata: Metadata = {
  title: 'PMJ Building Services',
  description: 'All aspects of building work undertaken.',
  openGraph: {
    title: 'PMJ Building Services',
    description: 'All aspects of building work undertaken.',
    siteName: 'PMJ Building Services',
    url: 'https://pmjbuildingservices.co.uk',
    locale: 'en_GB',
    images: [
      {
        url: 'https://pmjbuildingservices.co.uk/social/thumbnail.png',
      },
    ],
  },
  twitter: {
    title: 'PMJ Building Services',
    description: 'All aspects of building work undertaken.',
    card: 'summary',
    creator: '@pmjbuilding',
    creatorId: '1689363542997151744',
    site: '@pmjbuilding',
    siteId: '1689363542997151744',
    images: [
      {
        url: 'https://pmjbuildingservices.co.uk/social/thumbnail.png',
      },
    ],
  },
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
