import cn from 'classnames';
import { Metadata } from 'next';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import { generateMetadata } from '@/src/utils/generateMetadata';

import styles from './main-page.module.scss';

export const metadata: Metadata = generateMetadata({
  title: 'Main',
});

export default function Home() {
  return (
    <main className={cn(styles.mainPage)}>
      <UiContainer>index page</UiContainer>
    </main>
  );
}
