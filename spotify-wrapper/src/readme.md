## How to use

### ES6

```js
// to import a specific method
import { method } from 'spotify-wrapper';

// to import everything
import * as spotifyWrapper from 'spotify-wrapper';
```

### CommonJS

```js
var spotifyWrapper = require('spotify-wrapper');
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="spotify-wrapper.umd.js"></script>

<!-- to import minified version -->
<script src="spotify-wrapper.umd.min.js"></script>
```

After that the library will be available to the Global as `spotifyWrapper`. Follow an example:

```js
const albums = spotifyWrapper.searchAlbums('Choosen Artist');
```

## Methods

> Follow the methods that the library provides.

### search(query, types)

> Search for informations about artists, albums, tracks or playlists. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/).

**Arguments**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`query`   |*string*           | 'Any search query'                      |
|`type`    |*Array of strings* | ['artist', 'album', 'track', 'playlist']|

**Example**

```js
search('Incubus', ['artist', 'album'])
  .then(data => {
    // do what you want with the data
  })
```

### searchAlbums(query)

> Search for informations about Albums with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *album*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
searchAlbums('Incubus')
  .then(data => {
    // do what you want with the data
  })
```

### searchArtists(query)

> Search for informations about Artists with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *artist*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
searchArtists('Incubus')
  .then(data => {
    // do what you want with the data
  })
```

### searchTracks(query)

> Search for informations about Tracks with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *track*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
searchTracks('Drive')
  .then(data => {
    // do what you want with the data
  })
```

### searchPlaylists(query)

> Search for informations about Playlist with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *playlist*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
searchPlaylists('Happy Day')
  .then(data => {
    // do what you want with the data
  })
```

### getAlbum(id)

> Search for informations about a specific Album with provided id. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-album/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`   |*string* | 'Specific id'|


**Example**

```js
getAlbum('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

### getAlbums(ids)

> Search for informations about some Albums with all id's. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-several-albums/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`ids`   |*Array of strings* | ['id1', 'id2']|

**Example**

```js
getAlbum(['4aawyAB9vmqN3uQ7FjRGTy', '1A2GTWGtFfWp7KSQTwWOyo'])
  .then(data => {
    // do what you want with the data
  })
```

### getAlbumTracks(id)

> Search for all tracks in a specific Album with provided id. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-album-tracks/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`   |*string* | 'Specific id'|

**Example**

```js
getAlbum('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```