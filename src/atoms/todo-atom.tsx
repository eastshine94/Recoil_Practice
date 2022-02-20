import { atom } from 'recoil';
import { TodosGetPayload } from 'types/todo';

export const todoListAtom = atom<TodosGetPayload>({
  key: 'todoListState',
  default: []
});
