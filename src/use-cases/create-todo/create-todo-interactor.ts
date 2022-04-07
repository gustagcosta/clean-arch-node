import { Todo, TodoProps } from "../../entities/todo";
import Interactor from "../common/interactor";
import Presenter from "../common/presenter";
import { CreateTodoGateway } from "./create-todo-gateway";

export interface CreateTodoInteractorParams {
  createTodoGateway: CreateTodoGateway;
  createTodoPresenter: Presenter<Todo>;
}

export default class CreateTodoInteractor extends Interactor<TodoProps, Todo> {
  private _gateway: CreateTodoGateway;

  constructor(params: CreateTodoInteractorParams) {
    super(params.createTodoPresenter);
    this._gateway = params.createTodoGateway;
  }

  protected async execute(todoProps: TodoProps): Promise<Todo> {
    const todo = Todo.build(todoProps);

    await this._gateway.store(todo);

    return todo;
  }
}
