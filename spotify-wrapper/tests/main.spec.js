import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/main';

describe('Spotify wrapper', () => {
  describe('smoke tests', () => {
    it('deve existir o método "search"', () => {
      expect(search).toBeInstanceOf(Function)
    });
    it('deve existir o método "searchAlbums"', () => {
      expect(searchAlbums).toBeInstanceOf(Function)
    });
    it('deve existir o método "searchArtists"', () => {
      expect(searchArtists).toBeInstanceOf(Function)
    });
    it('deve existir o método "searchPlaylists"', () => {
      expect(searchPlaylists).toBeInstanceOf(Function)
    });
    it('deve existir o método "searchTracks"', () => {
      expect(searchTracks).toBeInstanceOf(Function)
    });
    
    
  
  })

  describe('Generic Search', () => {
    it('deve chamar a função fetch', () => {
      const fetchedStub = jest.spyOn(global, 'fetch');
      const artists = search();

      expect(fetchedStub).toHaveBeenCalled();
      fetchedStub.mockRestore();
    });

    it('deve receber o URL correta', () => {
      const fetchedStub = jest.spyOn(global, 'fetch');
      const artists = search('Incubus', 'artist');

      expect(fetchedStub).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');
      const albuns = search('Incubus', 'album');
      expect(fetchedStub).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
    });
  });
});