"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Funcion para mostrar una fotografia
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.table({ picture });
}
let myPic = {
    title: 'Test title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape,
};
showPicture(myPic);
showPicture({
    title: 'hola',
    date: '2001-01',
    orientation: PhotoOrientation.Panorama,
    //extra: 'test' //error
});
function generatePicture(config) {
    const pic = { title: 'Default', date: '2020-03' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({ title: 'Travel pic' });
console.log('picture', picture);
picture = generatePicture({ title: 'Travel pic', date: '2021-04' });
console.log('picture', picture);
let user;
user = { id: 10, username: 'aguscorvo', isPro: true };
console.log('user', user);
user.username = 'paparazzi';
// user.id = 11; // error
console.log('user', user);
