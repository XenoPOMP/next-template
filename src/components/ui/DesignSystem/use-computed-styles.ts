import { useRef } from 'react';

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
