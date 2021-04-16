export abstract class Item {
  protected readonly id: number;
  protected title: string;
  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
}
