import type { ForProps } from './For.props';

/**
 * Run same function to array of data.
 *
 * @constructor
 *
 * @example
 * const data = [1, 2, 3];
 *
 * return <For each={data}>{item => <div>Row #{item}</div>}</For>;
 */
function For<ItemType>({ each, children }: ForProps<ItemType>) {
  return <>{each.map((item, index) => children?.(item, index))}</>;
}

export default For;
