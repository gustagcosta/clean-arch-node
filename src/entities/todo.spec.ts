import { Todo, TodoProps } from "./todo";

describe("Todo entity tests", () => {
  it("should be able to create a new todo with all fields correct", () => {
    const todoProps: TodoProps = {
      description: "a todo test",
      done: false
    };

    const todoOrError = Todo.build(todoProps);

    if (todoOrError.isLeft()) {
      throw new Error(todoOrError.value.message);
    }

    if (todoOrError.isRight()) {
      expect(todoOrError.value).toBeTruthy();
      expect(todoOrError.value.id).toBeTruthy();
    }
  });

  it("should be able to create a new todo without done field", () => {
    const todoProps: TodoProps = {
      description: "a todo test"
    };

    const todoOrError = Todo.build(todoProps);

    if (todoOrError.isLeft()) {
      throw new Error(todoOrError.value.message);
    }

    if (todoOrError.isRight()) {
      expect(todoOrError.value.props.done).toBeFalsy();
    }
  });

  it("should be able to create a new todo with id", () => {
    const todoProps: TodoProps = {
      description: "a todo test"
    };

    const mockId = "dd-11-22";

    const todoOrError = Todo.build(todoProps, mockId);

    if (todoOrError.isLeft()) {
      throw new Error(todoOrError.value.message);
    }

    if (todoOrError.isRight()) {
      expect(todoOrError.value.id).toEqual(mockId);
    }
  });

  it("should not be able to create a new todo without description", () => {
    const todoProps: TodoProps = {
      description: ""
    };

    expect(() => Todo.build(todoProps)).toThrowError();
  });
});
