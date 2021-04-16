import { Item } from './item';
import { PhotoOrientation } from './photo-orientation';

export class Picture extends Item {
  private _date: string;
  private _orientation: PhotoOrientation;
  public constructor(
    id: number,
    title: string,
    date: string,
    orientation: PhotoOrientation
  ) {
    super(id, title);
    this._date = date;
    this._orientation = orientation;
  }
  public toString() {
    return `[id: ${this.id},
                   title: ${this.title},
                   orientation: ${this._orientation}]`;
  }
}
