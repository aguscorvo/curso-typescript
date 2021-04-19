export abstract class Item {
  public readonly id: number;
  protected title: string;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
}
