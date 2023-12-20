import SpotifyWrapper from "./spotify";
import searchEnterTrigger from "./searchTrigger";
import renderAlbumInfo from "./albuminfo";
import renderAlbumTracks from "./albumtracks";

const album = SpotifyWrapper.getAlbum('4uNzDULQ9RAy0nxGaPbCDn');
const albumInfo = document.getElementById('album-info');

const albumTracks = SpotifyWrapper.getAlbumTracks('4uNzDULQ9RAy0nxGaPbCDn');
const albumTracksList = document.getElementById('album-tracks');

searchEnterTrigger();

album.then(data => {
  renderAlbumInfo(data, albumInfo)
  console.log('album', data)
});

albumTracks.then(data => {
  renderAlbumTracks(data.items, albumTracksList)
  console.log('tracks', data)
});
