import { Todo, TodoProps } from "./todo";

describe("Todo entity tests", () => {
  it("should be able to create a new todo with all fields correct", () => {
    const todoProps: TodoProps = {
      description: "a todo test",
      done: false
    };

    const todo = Todo.build(todoProps);

    expect(todo).toBeTruthy();
  });

  it("should be able to create a new todo without done field", () => {
    const todoProps: TodoProps = {
      description: "a todo test"
    };

    const todo = Todo.build(todoProps);

    expect(todo.props.done).toBeFalsy();
  });

  it("should be able to create a new todo with id", () => {
    const todoProps: TodoProps = {
      description: "a todo test"
    };

    const mockId = "dd-11-22";

    const todo = Todo.build(todoProps, mockId);

    expect(todo.id).toEqual(mockId);
  });

  it("should not be able to create a new todo without description", () => {
    const todoProps: TodoProps = {
      description: ""
    };

    expect(() => Todo.build(todoProps)).toThrowError();
  });
});
