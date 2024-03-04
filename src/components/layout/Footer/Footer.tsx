import cn from 'classnames';
import { type FC } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './Footer.module.scss';
import type { FooterProps } from './Footer.props';

const Footer: FC<FooterProps> = () => {
  return (
    <footer className={cn(styles.appFooter)}>
      <UiContainer>Footer</UiContainer>
    </footer>
  );
};

export default Footer;
