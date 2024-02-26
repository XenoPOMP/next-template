import { fireEvent } from '@testing-library/react';

/** Click buttons in array. */
export const clickAll = <B extends HTMLElement = HTMLButtonElement>(
  buttons: Array<B>,
) => {
  for (const button of buttons) {
    fireEvent.click(button);
  }
};
