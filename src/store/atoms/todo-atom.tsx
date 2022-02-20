import { atom } from 'recoil';
import { TodoListFilterKey, TodosGetPayload } from 'types/todo';

export const todoListAtom = atom<TodosGetPayload>({
  key: 'todoListState',
  default: []
});

export const todoListFilterAtom = atom<TodoListFilterKey>({
  key: 'todoListFilterState',
  default: 'Show All'
});
