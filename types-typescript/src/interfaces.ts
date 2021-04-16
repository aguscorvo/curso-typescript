export {};

// Funcion para mostrar una fotografia
enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

interface Picture {
  title: string;
  date: string;
  orientation: PhotoOrientation;
}

function showPicture(picture: Picture) {
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

interface PictureConfig {
  title?: string;
  date?: string;
  orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig) {
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

// Interfaz: usuario
interface User {
  readonly id: number; //solo lectura
  username: string;
  isPro: boolean;
}

let user: User;
user = { id: 10, username: 'aguscorvo', isPro: true };
console.log('user', user);
user.username = 'paparazzi';
// user.id = 11; // error
console.log('user', user);
