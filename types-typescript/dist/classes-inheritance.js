"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
// Superclase
class Item {
    constructor(id, title) {
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
    set title(title) {
        this._title = title;
    }
}
// get y set
class Picture extends Item {
    constructor(id, title, orientation) {
        super(id, title);
        this._orientation = orientation;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(o) {
        this._orientation = o;
    }
    toString() {
        return `[id: ${this._id},
        title: ${this._title},
        orientation: ${this.orientation}
    ]`;
    }
}
Picture.photoOrientation = PhotoOrientation;
class Album extends Item {
    constructor(id, title) {
        super(id, title);
        this._pictures = [];
    }
    addPicture(picture) {
        this._pictures.push(picture);
    }
}
const album = new Album(1, 'Personal pictures');
const picture = new Picture(1, 'Platzi session', PhotoOrientation.Square);
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
