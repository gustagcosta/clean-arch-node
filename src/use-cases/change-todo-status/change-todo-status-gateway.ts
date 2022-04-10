import { Todo } from "../../entities/todo";
import { ChangeTodoStatusInputModel } from "./change-todo-status-interactor";

export interface ChangeTodoStatusGateway {
  update(changeTodoStatusInputModel: ChangeTodoStatusInputModel): Promise<void>;
}
