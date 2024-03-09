import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Katharina Chalupsky',
  description: 'Graphic Designer, Illustrator, Web Developer from Vienna',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
