import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kevin J. Zea - kevinjzea',
  description:
    'Kevin J. Zea is a Frontend Developer with over 2 years of experience in the tech industry. Passionate about crafting visually captivating, user-centric, and accessible software applications. Seeking for building digital experiences that are not only visually appealing but also inclusive for all users.',
  authors: {
    name: 'Kevin J. Zea',
    url: 'https://kevinjzea.com',
  },
  keywords: 'kevinjzea, kevin zea, react developer, frontend developer, ui developer, nextjs developer, nextjs, react',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-black min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
