import { Album } from './album';
import { PhotoOrientation } from './photo-orientation';
import { Picture } from './picture';
import { User } from './user';

const user = new User(1, 'aguscorvo', 'Agustina', true);
const album = new Album(2, 'Frontend memes');
const picture = new Picture(
  1,
  'Typescript',
  '2021-04',
  PhotoOrientation.Square
);

user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
console.log('album', album);

user.removeAlbum(album);
console.log('user', user);
