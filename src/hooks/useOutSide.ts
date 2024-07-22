'use client';

import { useOutside } from '@pacote/react-use-outside';
import { useState } from 'react';

/**
 * Detects clicks outside ref element and changes
 * state according to it.
 *
 * Returns state and ref.
 */
export const useOutSide = <Ref extends HTMLElement>() => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const ref = useOutside<Ref>('click', () => setIsShown(false));

  return { isShown, setIsShown, ref };
};
