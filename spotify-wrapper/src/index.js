import {
  search,
  searchArtists,
  searchAlbums,
  searchPlaylists,
} from './search';

import {
  getAlbum,
  getAlbums,
  getAlbumTracks,
} from './album';

// impedir o 'require' seja executado no browser
// if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  // module.exports = {
  //   search,
  //   searchArtists,
  //   searchAlbums,
  //   searchPlaylists,
  //   getAlbum,
  //   getAlbums,
  //   getAlbumTracks,
  // };
// }

export { search,
  searchArtists,
  searchAlbums,
  searchPlaylists,
  getAlbum,
  getAlbums,
  getAlbumTracks };