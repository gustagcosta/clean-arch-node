import { Todo, TodoProps } from "../../entities/todo";
import Interactor from "../common/interactor";
import Presenter from "../common/presenter";
import { DeleteTodoGateway } from "./delete-todo-gateway";

export interface DeleteTodoInteractorParams {
  deleteTodoGateway: DeleteTodoGateway;
  deleteTodoPresenter: Presenter<void>;
}

export default class DeleteTodoInteractor extends Interactor<string, void> {
  private _gateway: DeleteTodoGateway;

  constructor(params: DeleteTodoInteractorParams) {
    super(params.deleteTodoPresenter);
    this._gateway = params.deleteTodoGateway;
  }

  // it doesn't smell good, maybe it will change soon
  // abstract to smaller methods on gateway or do some validations
  protected async execute(id: string): Promise<void> {
    await this._gateway.deleteById(id);
  }
}
