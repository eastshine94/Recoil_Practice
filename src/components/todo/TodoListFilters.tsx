import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterAtom } from 'store/atoms/todo-atom';
import { TodoListFilterKey } from 'types/todo';

const FILTER_OPTIONS: Record<TodoListFilterKey, string> = {
  'Show All': 'All',
  'Show Completed': 'Completed',
  'Show Uncompleted': 'Uncompleted'
};

export default function TodoListFilters() {
  const [filter, setFilter] =
    useRecoilState<TodoListFilterKey>(todoListFilterAtom);

  const updateFilter = ({
    target: { value }
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(value as TodoListFilterKey);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        {Object.entries(FILTER_OPTIONS).map(([key, title]) => (
          <option value={key} key={key}>
            {title}
          </option>
        ))}
      </select>
    </>
  );
}
