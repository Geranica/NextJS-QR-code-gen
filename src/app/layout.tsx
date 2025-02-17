import type { Metadata } from 'next';
import { inter } from '@/shared/styles/fonts';

import { QRCodeStoreProvider } from '@/features/QRCode/QRCodeProvider';

import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QRCodeStoreProvider>
      <html lang="en">
        <body className={`${inter.variable} antialiased`}>{children}</body>
      </html>
    </QRCodeStoreProvider>
  );
}
