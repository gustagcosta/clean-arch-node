import { Todo } from "../../entities/todo";

export interface DeleteTodoGateway {
  deleteById(id: String): Promise<void>;
}
