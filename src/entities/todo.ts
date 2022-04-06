// This class should be responsible for create a todo with the validated fields
// and creating an id for it if it doesn't not exist

import { Either, left, right } from "../shared/either";
import { Entity } from "./common/entity";

export type TodoProps = {
  description: string;
  done?: boolean;
};

export class Todo extends Entity<TodoProps> {
  private constructor(props: TodoProps, id?: string) {
    super(props, id);
  }

  static build(props: TodoProps, id?: string): Either<Error, Todo> {
    if (!props.description) {
      return left(new Error("description field is required)"));
    }

    props.done = props.done || false;

    const todo = new Todo(props, id);

    return right(todo);
  }
}
