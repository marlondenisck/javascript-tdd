import SpotifyWrapper from "./spotify";
import renderAlbums from "./albumList";
import renderAlbumInfo from "./albuminfo";
import renderAlbumTracks from "./albumtracks";

const albuns = SpotifyWrapper.searchAlbums('Bullet for my valentine');
const albumList = document.getElementById('album-list');

const album = SpotifyWrapper.getAlbum('4uNzDULQ9RAy0nxGaPbCDn');
const albumInfo = document.getElementById('album-info');

const albumTracks = SpotifyWrapper.getAlbumTracks('4uNzDULQ9RAy0nxGaPbCDn');
const albumTracksList = document.getElementById('album-tracks');

albuns.then(data => {
  renderAlbums(data.albums.items, albumList)
  console.log('albuns', data)
});

album.then(data => {
  renderAlbumInfo(data, albumInfo)
  console.log('album', data)
});

albumTracks.then(data => {
  renderAlbumTracks(data.items, albumTracksList)
  console.log('tracks', data)
});
