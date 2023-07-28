import { ComponentProps, FC } from 'react';

import {
  type IDescTag,
  type INoIndexTag,
  type IOgTitleTag,
} from './MetaTag.interface';

/**
 * Construct meta tag.
 *
 * @param props
 * @constructor
 */
const MetaTag: FC<ComponentProps<'meta'>> & {
  NoIndex: FC<INoIndexTag>;
  Description: FC<IDescTag>;
  OgTitle: FC<IOgTitleTag>;
} = props => {
  return <meta {...props} />;
};

MetaTag.NoIndex = ({ noIndex, noFollow }) => {
  const getContent = (): string | undefined => {
    const output: ReturnType<typeof getContent>[] = [];

    /** If no one argument was passed, return undefined. */
    if (noIndex === undefined && noFollow === undefined) {
      return undefined;
    }

    if (noIndex) output.push('noindex');
    if (noFollow) output.push('nofollow');

    return output.join(', ');
  };

  return <meta name={'robots'} content={getContent()} />;
};

MetaTag.Description = ({ description }) => {
  return <meta name={'description'} content={description} />;
};

MetaTag.OgTitle = ({ title }) => {
  return <meta name={'og:title'} content={title} />;
};

export default MetaTag;
