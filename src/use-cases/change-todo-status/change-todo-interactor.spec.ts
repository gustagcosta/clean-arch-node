import { Todo } from "../../entities/todo";
import Presenter from "../common/presenter";
import { ChangeTodoStatusGateway } from "./change-todo-status-gateway";
import ChangeTodoStatusInteractor, {
  ChangeTodoStatusInputModel,
  ChangeTodoStatusInteractorParams
} from "./change-todo-status-interactor";

class PresenterImp implements Presenter<void> {
  showSuccess(): void {
    console.log("changed");
  }
  showError(error: Error): void {
    console.error(error);
  }
}

class ChangeTodoStatusGatewayImp implements ChangeTodoStatusGateway {
  update(
    changeTodoStatusInputModel: ChangeTodoStatusInputModel
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
}

describe("Delete todo interactor tests", () => {
  it("see if the change todo status use case is working as expected", async () => {
    const changeTodoStatusGateway = new ChangeTodoStatusGatewayImp();
    const changeTodoStatusPresenter = new PresenterImp();

    const inputModel: ChangeTodoStatusInputModel = {
      done: false,
      id: "salve"
    };

    const params: ChangeTodoStatusInteractorParams = {
      changeTodoStatusGateway,
      changeTodoStatusPresenter
    };

    const createTodoInteractor = new ChangeTodoStatusInteractor(params);

    expect(async () => await createTodoInteractor.run(inputModel)).toBeTruthy();
  });
});
