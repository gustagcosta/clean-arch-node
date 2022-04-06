import { Todo } from "../../entities/todo";

export default interface ChangeTodoStatusGateway {
  findById(id: string): Promise<Todo>;
  update(todo: Todo): Promise<void>;
}
