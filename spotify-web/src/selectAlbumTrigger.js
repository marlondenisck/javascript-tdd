import SpotifyWrapper from "./spotify";
import renderAlbumInfo from "./albuminfo";
import renderAlbumTracks from "./albumtracks";

const listAlbums = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');

function makeRequest(albumId) {
  SpotifyWrapper.getAlbum(albumId)
    .then(data => renderAlbumInfo(data, albumInfo))
    .then(data => renderAlbumTracks(data.tracks.items, albumTracks));
}

export default function selectAlbumTrigger() {
  listAlbums.addEventListener('click', (e) => {
    const target = e.target;
    makeRequest(target.getAttribute('data-album-id'));
  });
}