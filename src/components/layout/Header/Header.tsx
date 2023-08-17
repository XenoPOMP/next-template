import { FC } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import type { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header>
      <UiContainer>Header</UiContainer>
    </header>
  );
};

export default Header;
