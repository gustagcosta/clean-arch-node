import Presenter from "../common/presenter";
import { DeleteTodoGateway } from "./delete-todo-gateway";
import DeleteTodoInteractor, {
  DeleteTodoInteractorParams
} from "./delete-todo-interactor";

class PresenterImp implements Presenter<void> {
  showSuccess(): void {
    console.log("ok deleted");
  }
  showError(error: Error): void {
    console.error(error);
  }
}

class DeleteTodoGatewayImp implements DeleteTodoGateway {
  deleteById(id: String): Promise<void> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
}

describe("Delete todo interactor tests", () => {
  it("see if the delete todo use case is working as expected", async () => {
    const deleteTodoGateway = new DeleteTodoGatewayImp();
    const deleteTodoPresenter = new PresenterImp();

    const id: string = "salve";

    const params: DeleteTodoInteractorParams = {
      deleteTodoGateway,
      deleteTodoPresenter
    };

    const createTodoInteractor = new DeleteTodoInteractor(params);

    expect(async () => await createTodoInteractor.run(id)).toBeTruthy();
  });
});
