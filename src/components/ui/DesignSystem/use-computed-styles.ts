import { useRef } from 'react';

// eslint-disable-next-line jsdoc/require-jsdoc
export const useComputedStyles = <
  R extends HTMLHeadingElement | HTMLParagraphElement = HTMLHeadingElement,
>() => {
  const ref = useRef<R | null>(null);

  return {
    ref,
    computed: ref.current?.computedStyleMap(),
    style: ref.current?.style,
  };
};
