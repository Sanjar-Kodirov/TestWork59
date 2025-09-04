import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AuthHydrator from '@/components/AuthHydrator/AuthHydrator';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'TestWork59',
  description: 'DummyJSON products with auth',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <AuthHydrator />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
