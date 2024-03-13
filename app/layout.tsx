import type { Metadata } from 'next';
import '@/app/ui/globals.css';
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'Résumé Generator',
  description: 'Create a résumé that stands out.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
