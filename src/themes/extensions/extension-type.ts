import type themer from 'tailwindcss-themer';

export type TailwindExtension = NonNullable<
  Parameters<typeof themer>[0]['defaultTheme']
>['extend'];
