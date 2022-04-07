import { Todo } from "../../entities/todo";

export interface CreateTodoGateway {
  store(todo: Todo): Promise<void>;
}
