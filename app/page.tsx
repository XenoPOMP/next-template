import cn from 'classnames';
import type { Metadata } from 'next';

import { Stack } from '@/components/ui';
import { generateStaticMetadata } from '@/utils/seo';

import styles from './main-page.module.scss';

export const metadata: Metadata = generateStaticMetadata({
  title: 'Main',
});

export default function Home() {
  return (
    <main className={cn(styles.mainPage)}>
      <Stack>index page</Stack>
    </main>
  );
}
