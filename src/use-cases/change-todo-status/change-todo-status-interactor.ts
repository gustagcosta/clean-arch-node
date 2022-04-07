import Interactor from "../common/interactor";
import Presenter from "../common/presenter";
import { ChangeTodoStatusGateway } from "./change-todo-status-gateway";

export type ChangeTodoStatusInputModel = {
  done: boolean;
  id: string;
};

type ChangeTodoStatusInteractorParams = {
  changeTodoStatusGateway: ChangeTodoStatusGateway;
  changeTodoStatusPresenter: Presenter<void>;
};

export default class ChangeTodoStatusInteractor extends Interactor<
  ChangeTodoStatusInputModel,
  void
> {
  private _gateway: ChangeTodoStatusGateway;

  constructor(params: ChangeTodoStatusInteractorParams) {
    super(params.changeTodoStatusPresenter);
    this._gateway = params.changeTodoStatusGateway;
  }

  // it doesn't smell good, maybe it will change soon
  // abstract to smaller methods on gateway or do some validations
  protected async execute(input: ChangeTodoStatusInputModel): Promise<void> {
    await this._gateway.update(input);
  }
}
