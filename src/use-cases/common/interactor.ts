import Presenter from "./presenter";

export default abstract class Interactor<InputModel, ResponseModel> {
  private _presenter: Presenter<ResponseModel>;

  protected abstract execute(input: InputModel): Promise<ResponseModel>;

  constructor(presenter: any) {
    this._presenter = presenter;
  }

  public async run(input: InputModel) {
    try {
      const response = await this.execute(input);
      this._presenter.showSuccess(response);
    } catch (err) {
      console.log(err);
      return this._presenter.showError(
        new Error("use case create delete failed")
      );
    }
  }
}
