export interface TodosGetPayloadItem {
  id: number;
  text: string;
  isComplete: boolean;
}

export type TodosGetPayload = TodosGetPayloadItem[];

export type TodoListFilterKey =
  | 'Show All'
  | 'Show Completed'
  | 'Show Uncompleted';

export interface TodosStatGetPayload {
  totalNum: number;
  totalCompletedNum: number;
  totalUncompletedNum: number;
  percentCompleted: number;
}
