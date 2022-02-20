import { selector } from 'recoil';
import { todoListAtom, todoListFilterAtom } from 'store/atoms/todo-atom';
import { TodosGetPayload, TodosStatGetPayload } from 'types/todo';

export const filteredTodoListSelector = selector<TodosGetPayload>({
  key: 'filteredTodoListSelector',
  get: ({ get }) => {
    const filter = get(todoListFilterAtom);
    const list = get(todoListAtom);

    switch (filter) {
      case 'Show Completed':
        return list.filter(item => item.isComplete);
      case 'Show Uncompleted':
        return list.filter(item => !item.isComplete);
      default:
        return list;
    }
  }
});

export const todoListStatSelector = selector<TodosStatGetPayload>({
  key: 'todoListStatSelector',
  get: ({ get }) => {
    const todoList = get(todoListAtom);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter(item => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted
    };
  }
});
