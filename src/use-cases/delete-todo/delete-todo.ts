import { left, right, Either } from "../../shared/either";
import { Todo, TodoProps } from "../../entities/todo";
import DeleteTodoGateway from "./delete-todo-gateway";
import { DeleteTodoResponse } from "./delete-todo-response";

export class DeleteTodo {
  private readonly deleteTodoGateway: DeleteTodoGateway;

  constructor(deleteTodoGateway: DeleteTodoGateway) {
    this.deleteTodoGateway = deleteTodoGateway;
  }

  async execute(id: string): Promise<DeleteTodoResponse> {
    try {
      const todo = await this.deleteTodoGateway.findById(id);

      if (!todo) {
        return left(new Error("todo not found"));
      }

      await this.deleteTodoGateway.delete(todo.id);

      return right(true);
    } catch (error) {
      console.log(error);
      return left(new Error("unknown error"));
    }
  }
}
