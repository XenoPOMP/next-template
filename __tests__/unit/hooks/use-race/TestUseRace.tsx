import { fireEvent, render, screen } from '@testing-library/react';
import { type ComponentProps, type FC } from 'react';

import { useRaceStore } from '@/app/test/use-race-store.ts';

const TestUseRace: FC<{}> = () => {
  const { logs, addLog } = useRaceStore();

  return (
    <div>
      <button
        data-testid={'add-log'}
        onClick={() => addLog('New race')}
      >
        Add new race
      </button>

      {!!logs.length &&
        logs.map((log, _i) => (
          <p
            key={_i}
            data-testid={'race-log'}
            data-rejected={!log.startsWith('✅')}
          >
            {log}
          </p>
        ))}
    </div>
  );
};

export default function renderUseRaceTest(
  props?: ComponentProps<typeof TestUseRace>,
) {
  const result = render(<TestUseRace {...props} />);

  // DOM elements
  const addLogButton = screen.getByTestId('add-log');

  const racesCount = screen.getAllByTestId('race-log').length;

  return {
    result,
    racesCount,
    addLog: () => fireEvent.click(addLogButton),
  };
}
