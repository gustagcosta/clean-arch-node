import { Either, left, right } from "../../shared/either";
import ChangeTodoStatusDto from "./change-todo-status-dto";
import ChangeTodoStatusGateway from "./change-todo-status-gateway";
import { ChangeTodoStatusResponse } from "./change-todo-status-response";

export class ChangeTodoStatus {
  private readonly changeTodoStatusGateway: ChangeTodoStatusGateway;

  constructor(changeTodoStatusGateway: ChangeTodoStatusGateway) {
    this.changeTodoStatusGateway = changeTodoStatusGateway;
  }

  async execute(
    changeTodoStatusDto: ChangeTodoStatusDto
  ): Promise<ChangeTodoStatusResponse> {
    try {
      const todo = await this.changeTodoStatusGateway.findById(
        changeTodoStatusDto.id
      );

      if (!todo) {
        return left(new Error("todo not found"));
      }

      todo.props.done = changeTodoStatusDto.done;

      await this.changeTodoStatusGateway.update(todo);

      return right(todo);
    } catch (error) {
      console.log(error);
      return left(new Error("unknown error"));
    }
  }
}
