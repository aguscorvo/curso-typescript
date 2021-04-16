"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
// get y set
class Picture {
    constructor(id, title, orientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(o) {
        this._orientation = o;
    }
    toString() {
        return `[id: ${this.id},
        title: ${this.title},
        orientation: ${this.orientation}
    ]`;
    }
}
class Album {
    constructor(id, title) {
        this._id = id;
        this._title = title;
        this._pictures = [];
    }
    addPicture(picture) {
        this._pictures.push(picture);
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
const album = new Album(1, 'Personal pictures');
const picture = new Picture(1, 'Platzi session', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album', album);
// Accediendo a los miembros publicos
console.log('picture.id', picture.id); // get id();
picture.id = 100; // private, set id(100)
picture.title = 'Another title'; // private
album.title = 'Personal activities'; // private
console.log('album', album);
