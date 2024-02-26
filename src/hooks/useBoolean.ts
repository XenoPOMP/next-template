'use client';

import { useState } from 'react';

type UseBooleanType = [
  value: boolean,
  toggleValue: () => void,
  changeValue: (newValue: boolean) => void,
];

/**
 * useBoolean hook allows to store **boolean** state.
 *
 * **Not working inside server components!**
 *
 * @param initialValue
 *
 * @example
 * 'use client';
 *
 * const Page: FC<{}> = ({}) => {
 *  const [triggered, toggleTrigger, setTrigger] = useBoolean(false);
 *
 *  return <>{triggered ? 'Triggered' : 'Not triggered'}</>;
 * }
 *
 * export default Page;
 */
const useBoolean = (initialValue?: boolean): UseBooleanType => {
  // prettier-ignore
  const [localValue, setLocalValue] = useState<boolean>(initialValue ?? false);

  return [
    localValue,
    () => setLocalValue(prevValue => !prevValue),
    newValue => setLocalValue(newValue),
  ];
};

export default useBoolean;
