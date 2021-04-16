export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

// Superclase
abstract class Item {
  protected readonly _id: number;
  protected _title: string;

  constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
  }

  get id() {
    return this._id;
  }

  //   set id(id: number) {
  //     this._id = id;
  //   }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }
}

// get y set

class Picture extends Item {
  public static photoOrientation = PhotoOrientation;
  //Propiedades
  private _orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    super(id, title);
    this._orientation = orientation;
  }

  get orientation() {
    return this._orientation;
  }

  set orientation(o: PhotoOrientation) {
    this._orientation = o;
  }

  public toString() {
    return `[id: ${this._id},
        title: ${this._title},
        orientation: ${this.orientation}
    ]`;
  }
}

class Album extends Item {
  private _pictures: Picture[];

  public constructor(id: number, title: string) {
    super(id, title);
    this._pictures = [];
  }

  public addPicture(picture: Picture) {
    this._pictures.push(picture);
  }
}

const album: Album = new Album(1, 'Personal pictures');
const picture: Picture = new Picture(
  1,
  'Platzi session',
  PhotoOrientation.Square
);
album.addPicture(picture);
console.log('album', album);

// Accediendo a los miembros publicos
console.log('picture.id', picture.id); // get id();

// picture._id = 100; // private, set id(100)
picture._title = 'Another title'; // private
album._title = 'Personal activities'; // private
console.log('album', album);

// const item = new Item(1, 'NewItem');
// console.log('item', item);

// probar el miembro estatico de clase Picture
console.log('PhotoOrientation', Picture.photoOrientation.Landscape);
