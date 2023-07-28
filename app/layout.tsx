import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { AppConstants } from '@/app/app.constants';
import Footer from '@/src/components/layout/Footer/Footer';
import Header from '@/src/components/layout/Header/Header';
import ReduxProvider from '@/src/redux/ReduxProvider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: `%s | ${AppConstants.appName}`,
    default: AppConstants.appName,
  },
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ReduxProvider>
          <Header />

          {children}

          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
