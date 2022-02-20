import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListAtom } from 'atoms/todo-atom';
import { TodosGetPayload } from 'types/todo';

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState<string>('');
  const setTodoList = useSetRecoilState<TodosGetPayload>(todoListAtom);

  const addItem = () => {
    setTodoList(oldTodoList => [
      ...oldTodoList,
      { id: getId(), text: inputValue, isComplete: false }
    ]);
    setInputValue('');
  };

  const handleInputChange = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

let id = 0;
function getId() {
  return id++;
}
