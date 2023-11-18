require('dotenv').config();

export const getAlbum = id => {
  return fetch(`https://api.spotify.com/v1/albums/${id}`)
    .then(response => response.json())
    .catch(err => console.log(err));
}

  // export const getAlbum = id =>
//   fetch(`https://api.spotify.com/v1/albums/${id}`, {
//     headers: {
//       Authorization: `Bearer ${process.env.TOKEN}`
//   }}).then(data => data.json())

export const getAlbumTracks = () => {}