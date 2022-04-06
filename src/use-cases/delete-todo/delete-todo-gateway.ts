import { Todo } from "../../entities/todo";

export default interface DeleteTodoGateway {
  delete(id: string): Promise<void>;
  findById(id: String): Promise<Todo>;
}
