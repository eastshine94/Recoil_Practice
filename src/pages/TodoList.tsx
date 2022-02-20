import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListAtom } from '../atoms/todo-atom';
import TodoItemCreator from 'components/todo/TodoItemCreator';
import TodoItem from 'components/todo/TodoItem';

export default function TodoList() {
  const todoList = useRecoilValue(todoListAtom);

  return (
    <div>
      <TodoItemCreator />
      {todoList.map(todoItem => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}
