
import {API_URL, token} from './config';

export const getAlbum = id => {
  return fetch(`${API_URL}/albums/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    
  }})
    .then(response => response.json())
    .catch(err => console.log(err));
}

export const getAlbums = ids => {
  return fetch(`${API_URL}/albums/?ids=${ids}`, {
    headers: {
      Authorization: `Bearer ${token}`
  }})
  .then(response => response.json())
  .catch(err => console.log(err));
}


  // export const getAlbum = id =>
//   fetch(`https://api.spotify.com/v1/albums/${id}`, {
//     headers: {
//       Authorization: `Bearer ${process.env.TOKEN}`
//   }}).then(data => data.json())

export const getAlbumTracks = id => {
  return fetch(`${API_URL}/albums/${id}/tracks`, {
    headers: {
      Authorization: `Bearer ${token}`
  }})
  .then(response => response.json())
  .catch(err => console.log(err));
}


