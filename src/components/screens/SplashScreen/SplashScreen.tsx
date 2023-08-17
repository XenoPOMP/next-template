import cn from 'classnames';
import { FC } from 'react';

import styles from './SplashScreen.module.scss';
import type { SplashScreenProps } from './SplashScreen.props';

const SplashScreen: FC<SplashScreenProps> = ({}) => {
  return <aside className={cn(styles.splashScreen)}>Loading ...</aside>;
};

export default SplashScreen;
