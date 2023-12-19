function createMarkup(data) {
  return data.map(album => `
    <div class="list-item">
      <img src="${album.images[2].url}" alt="${album.name}" class="list-image">
      <div class="list-description">
        <p class="list-title">${album.name}</p>
        <p class="list-subtitle">${album.artists[0].name}</p>
      </div>
    </div>`).join('');
}

function renderAlbums(data, element) {
//   if (!data || element) return '';
// console.log('data', data)
// console.log('element', element)
  const markup = createMarkup(data);

  element.innerHTML = markup;
}


export default renderAlbums