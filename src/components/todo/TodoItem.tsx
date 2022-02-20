import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListAtom } from 'store/atoms/todo-atom';
import { TodosGetPayload, TodosGetPayloadItem } from 'types/todo';

interface TodoItemProps {
  item: TodosGetPayloadItem;
}

export default function TodoItem({ item }: TodoItemProps) {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  const index = todoList.findIndex(listItem => listItem === item);

  const editItemText = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}

function replaceItemAtIndex(
  arr: TodosGetPayload,
  index: number,
  newValue: TodosGetPayloadItem
) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: TodosGetPayload, index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
