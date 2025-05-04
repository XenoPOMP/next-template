export type Response = boolean;
export type Error = unknown;
export interface MutationVariables {
  itemId: string;
  // If true, mutation function will fail
  shouldFail?: boolean;
  // Defined whether component should emulate request to server
  mockTimeout?: boolean;
}
export type Items = { id: string; name: string }[];
export type Likes = { itemId: string }[];
export type History = { type: string }[];
