import cn from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';

import { Heading } from '@/components/ui/kit';

import { useComputedStyles } from './use-computed-styles.ts';

// eslint-disable-next-line jsdoc/require-jsdoc
const createSection = (
  isSub: boolean = false,
): FC<PropsWithChildren & { heading?: string }> => {
  const level = isSub ? 3 : 2;
  const gap = isSub ? 'gap-[2.4rem]' : 'gap-[3.2rem]';

  return ({ children, heading }) => (
    <div className={cn('flex flex-col', gap)}>
      {heading && (
        <header>
          <Heading level={level}>{heading}</Heading>
        </header>
      )}
      {children}
    </div>
  );
};

const Section = createSection();
const SubSection = createSection(true);

// eslint-disable-next-line jsdoc/require-jsdoc
const AutoHeading = ({
  level,
}: Pick<ComponentProps<typeof Heading>, 'level'>) => {
  const { ref, computed } = useComputedStyles<HTMLHeadingElement>();

  return (
    <Heading
      level={level}
      ref={ref}
      className={cn('tabular-nums')}
    >
      {`H${level}`}
      {' - font-size: '}
      {computed?.get('font-size')?.toString()}
      {', leading: '}
      {computed?.get('line-height')?.toString()}
    </Heading>
  );
};

// eslint-disable-next-line jsdoc/require-jsdoc
const AutoText = ({ size }: { size: 24 | 20 | 16 | 14 }) => {
  const fontSize = `${size / 10}rem`;
  const { ref, computed } = useComputedStyles<HTMLParagraphElement>();

  return (
    <p
      ref={ref}
      style={{
        fontSize,
      }}
      className={cn('tabular-nums')}
    >
      {`p${size}`}
      {` - font-size: `}
      {computed?.get('font-size')?.toString()}
      {`, leading: `}
      {computed?.get('line-height')?.toString()}
    </p>
  );
};

// eslint-disable-next-line jsdoc/require-jsdoc
const AutoPadding = ({ level }: { level: 1 | 2 | 3 | 4 | 5 }) => {
  const levelMap: Record<typeof level, string> = {
    1: '5.6rem',
    2: '3.2rem',
    3: '2.4rem',
    4: '1.6rem',
    5: '0.8rem',
  };

  const marginRight = levelMap[level];
  const { ref, computed } = useComputedStyles<HTMLParagraphElement>();

  return (
    <div className={cn('flex items-center')}>
      <p
        ref={ref}
        className={cn('tabular-nums')}
        style={{
          marginRight,
        }}
      >
        Level {level}: {computed?.get('margin-right')?.toString()}
      </p>
    </div>
  );
};

/**
 * This component is only used to preview app`s design system.
 * @constructor
 */
const DesignSystem: FC<unknown> = () => {
  const [_, update] = useState(false);

  useEffect(() => {
    update(prev => !prev);
  }, []);

  return (
    <div className={cn('flex flex-col gap-[5.6rem] tabular-nums')}>
      <Heading level={1}>Design system</Heading>

      <Section heading='Paddings'>
        <div>
          {([1, 2, 3, 4, 5] as const).map(lvl => (
            <AutoPadding
              level={lvl}
              key={lvl}
            />
          ))}
        </div>
      </Section>

      <Section heading='Text'>
        <SubSection heading='Fonts'>
          <div>Main: Inter</div>
        </SubSection>

        <SubSection heading='Headings'>
          <div>
            {([1, 2, 3, 4, 5] as const).map(lvl => (
              <AutoHeading
                level={lvl}
                key={lvl}
              />
            ))}
          </div>
        </SubSection>

        <SubSection heading='Text'>
          <div>
            {([24, 20, 16, 14] as const).map(size => (
              <AutoText
                size={size}
                key={size}
              />
            ))}
          </div>
        </SubSection>
      </Section>
    </div>
  );
};

export default DesignSystem;
