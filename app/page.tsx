import cn from 'classnames';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './main-page.module.scss';

export default function Home() {
  return (
    <main className={cn(styles.mainPage)}>
      <UiContainer>index page</UiContainer>
    </main>
  );
}
