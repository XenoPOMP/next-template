import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { type ReactNode } from 'react';

import CoreLayout from '@/src/components/layout/CoreLayout/CoreLayout';
import Providers from '@/src/components/layout/Providers/Providers';
import { useEnv } from '@/src/hooks/use-env';
import { generateOpenGraph, generateStaticMetadata } from '@/src/utils/seo';

import { AppConstants } from './app.constants';
import './globals.scss';

const mainFont = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  const env = useEnv();

  return generateStaticMetadata({
    title: {
      template: `%s | ${AppConstants.appName}`,
      default: AppConstants.appName,
    },
    description: 'Generated by create next app',
    appleWebApp: {
      title: AppConstants.appName,
      capable: false,
    },
    alternates: {
      canonical: env.getOrThrow('CANONICAL_URL'),
      languages: {
        // ru: env.getOrThrow('CANONICAL_URL'),

        // Should be changed to another one, if i18n has been implemented
        'x-default': env.getOrThrow('CANONICAL_URL'),
      },
    },
    openGraph: generateOpenGraph({
      title: 'Main page',
      description: 'This is a main page',
    }),
  });
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ru'>
      <body className={mainFont.className}>
        <Providers>
          <CoreLayout>{children}</CoreLayout>
        </Providers>
      </body>
    </html>
  );
}
