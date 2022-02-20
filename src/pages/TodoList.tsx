import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListSelector } from '../store/selectors/todo-selector';
import TodoItemCreator from 'components/todo/TodoItemCreator';
import TodoItem from 'components/todo/TodoItem';
import TodoListFilters from 'components/todo/TodoListFilters';
import TodoListStats from 'components/todo/TodoListStats';

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListSelector);

  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map(todoItem => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}
