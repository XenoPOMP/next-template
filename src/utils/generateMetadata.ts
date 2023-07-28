import { Metadata } from 'next';

type CustomMetadata = Omit<Metadata, 'robots'> & {
  robots?: {
    noIndex?: boolean;
    noFollow?: boolean;
  };
};

/**
 * This utility allows to generate Next 13
 * [Metadata object] (https://nextjs.org/docs/app/api-reference/functions/generate-metadata#the-metadata-object).
 *
 * @param props
 */
export const generateMetadata = (props: CustomMetadata): Metadata => {
  const getRobotsContent = (): string | null => {
    const output: ReturnType<typeof getRobotsContent>[] = [];

    /** If no one argument was passed, return undefined. */
    if (
      props.robots?.noIndex === undefined &&
      props.robots?.noFollow === undefined
    ) {
      return null;
    }

    if (props.robots?.noIndex) output.push('noindex');
    if (props.robots?.noFollow) output.push('nofollow');

    return output.join(', ');
  };

  return { ...props, robots: getRobotsContent() };
};
