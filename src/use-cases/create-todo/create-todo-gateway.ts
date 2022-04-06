import { Todo } from "../../entities/todo";

export default interface CreateTodoGateway {
  store(todo: Todo): Promise<void>;
}
