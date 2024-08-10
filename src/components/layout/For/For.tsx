import type { ForProps } from './For.props';

/**
 * Run same function to array of data.
 * @param data
 * @param children
 * @constructor
 */
function For<ItemType>({ data, children }: ForProps<ItemType>) {
  return <>{data.map((item, index) => children?.(item, index))}</>;
}

export default For;