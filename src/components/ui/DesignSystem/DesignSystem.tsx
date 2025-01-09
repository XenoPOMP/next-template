import cn from 'classnames';
import {
  type ComponentProps,
  type FC,
  type PropsWithChildren,
  useEffect,
  useState,
} from 'react';

import { Heading } from '@/src/components/ui/kit';

import { useComputedStyles } from './use-computed-styles.ts';

const createSection = (
  isSub: boolean = false,
): FC<PropsWithChildren & { heading?: string }> => {
  const level = isSub ? 3 : 2;
  const gap = isSub ? 'gap-3' : 'gap-2';

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

const AutoHeading = ({
  level,
}: Pick<ComponentProps<typeof Heading>, 'level'>) => {
  const { ref, computed } = useComputedStyles<HTMLHeadingElement>();

  return (
    <Heading
      level={level}
      ref={ref}
    >
      {`H${level}`}
      {' - '}
      {computed?.get('font-size')?.toString()}
      {', '}
      {computed?.get('line-height')?.toString()}
    </Heading>
  );
};

const AutoText = ({ size }: { size: 24 | 20 | 16 | 14 }) => {
  const fontSize = `var(--p${size})`;
  const { ref, computed } = useComputedStyles<HTMLParagraphElement>();

  return (
    <p
      ref={ref}
      style={{
        fontSize,
      }}
    >
      {`p${size}`}
      {` - `}
      {computed?.get('font-size')?.toString()}
      {`, `}
      {computed?.get('line-height')?.toString()}
    </p>
  );
};

const AutoPadding = ({ level }: { level: 1 | 2 | 3 | 4 | 5 }) => {
  const marginRight = `var(--p-level-${level})`;
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
    <div className={cn('flex flex-col gap-1')}>
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
