import { left, right, Either } from "../../shared/either";
import CreateTodoGateway from "./create-todo-gateway";
import { Todo, TodoProps } from "../../entities/todo";
import { CreateTodoResponse } from "./create-todo-response";

export class CreateTodo {
  private readonly createTodoGateway: CreateTodoGateway;

  constructor(createTodoGateway: CreateTodoGateway) {
    this.createTodoGateway = createTodoGateway;
  }

  async execute(todoProps: TodoProps): Promise<CreateTodoResponse> {
    try {
      const todoOrError: Either<Error, Todo> = Todo.build(todoProps);

      if (todoOrError.isLeft()) {
        return left(todoOrError.value);
      }

      const todo: Todo = todoOrError.value;

      await this.createTodoGateway.store(todo);

      return right(todo);
    } catch (error) {
      console.log(error);
      return left(new Error("unknown error"));
    }
  }
}
