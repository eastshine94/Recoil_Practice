export interface TodosGetPayloadItem {
  id: number;
  text: string;
  isComplete: boolean;
}

export type TodosGetPayload = TodosGetPayloadItem[];

export interface TodoPostData {
  id: number;
  text: string;
  isComplete: boolean;
}
