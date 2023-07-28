/**
 * Type for Redux action.
 *
 * **A** generic is payload type.
 */
export type ReduxAction<A> = {
  payload: A;
  type: string;
};
