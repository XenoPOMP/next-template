import type Link from 'next/link';
import type { ComponentProps } from 'react';

export type LogoProps = Partial<Pick<ComponentProps<typeof Link>, 'href'>>;
