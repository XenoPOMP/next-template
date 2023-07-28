import { PropsWith } from '@xenopomp/advanced-types';
import Head from 'next/head';
import { FC } from 'react';

import { AppConstants } from '@/app/app.constants';
import MetaTag from '@/src/components/seo/MetaTag/MetaTag';

import { type IMeta } from './meta.interface';

const getTitle = (title: string) => `${title} | ${AppConstants.appName}`;

const Meta: FC<PropsWith<'children', IMeta>> = ({
  children,
  title,
  description,
}) => {
  return (
    <>
      <Head>
        <title>{getTitle(title)}</title>

        {description ? (
          <>
            <MetaTag.Description description={description} />
            <MetaTag.OgTitle title={getTitle(title)} />
          </>
        ) : (
          <>
            <MetaTag.NoIndex noIndex noFollow />
          </>
        )}
      </Head>

      {children}
    </>
  );
};

export default Meta;
