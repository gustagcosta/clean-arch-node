import { Todo, TodoProps } from "../../entities/todo";
import Presenter from "../common/presenter";
import { CreateTodoGateway } from "./create-todo-gateway";
import CreateTodoInteractor, {
  CreateTodoInteractorParams
} from "./create-todo-interactor";

class PresenterImp implements Presenter<Todo> {
  showSuccess(response: Todo): void {
    console.log(response);
  }
  showError(error: Error): void {
    console.error(error);
  }
}

class CreateTodoGatewayImp implements CreateTodoGateway {
  store(_todo: Todo): Promise<void> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
}

describe("Create todo interactor tests", () => {
  it("see if the create todo use case is working as expected", async () => {
    const createTodoGateway = new CreateTodoGatewayImp();
    const createTodoPresenter = new PresenterImp();
    const todoProps: TodoProps = { description: "test", done: false };
    const params: CreateTodoInteractorParams = {
      createTodoGateway,
      createTodoPresenter
    };

    const createTodoInteractor = new CreateTodoInteractor(params);

    expect(async () => await createTodoInteractor.run(todoProps)).toBeTruthy();
  });
});
