import { useOutside } from '@pacote/react-use-outside';
import { useState } from 'react';

export const useOutSide = <Ref extends HTMLElement>() => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const ref = useOutside<Ref>('click', () => setIsShown(false));

  return { isShown, setIsShown, ref };
};
