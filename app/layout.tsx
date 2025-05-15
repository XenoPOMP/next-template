import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

import { CoreLayout, Providers } from '@/components/layout';
import { env } from '@/utils/env';
import { generateOpenGraph } from '@/utils/seo';

import {
  APP_DEFAULT_TITLE,
  APP_DESCRIPTION,
  APP_NAME,
  APP_TITLE_TEMPLATE,
} from '@app/constants';

import './globals.scss';

const mainFont = Inter({
  subsets: ['latin', 'cyrillic'],
});

/**
 * Generic application`s metadata generation.
 */
export async function generateMetadata(): Promise<Metadata> {
  const CANONICAL_URL = env.CANONICAL_URL;

  return {
    applicationName: APP_NAME,
    metadataBase: new URL(CANONICAL_URL),
    title: {
      default: APP_NAME,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    appleWebApp: {
      capable: false,
      statusBarStyle: 'default',
      title: APP_DEFAULT_TITLE,
      // startupImage: []
    },
    alternates: {
      canonical: CANONICAL_URL,
      languages: {
        // ru: CANONICAL_URL,

        // Should be changed to another one, if i18n has been implemented
        'x-default': CANONICAL_URL,
      },
    },
    formatDetection: {
      telephone: false,
    },
    openGraph: generateOpenGraph(),
    twitter: {
      card: 'summary',
      title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
      },
      description: APP_DESCRIPTION,
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#202020' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
};

/**
 * Top-level app layout. Contains providers, core layout.
 *
 * @constructor
 * @todo Update next-themes and remove suppressHydrationWarning
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='ru'
      dir='ltr'
      suppressHydrationWarning
    >
      <body className={mainFont.className}>
        <Providers>
          <CoreLayout>{children}</CoreLayout>
        </Providers>
      </body>
    </html>
  );
}
