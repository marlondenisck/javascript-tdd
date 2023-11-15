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
    let fetchedStub;

    beforeEach(() => {
      fetchedStub = jest.spyOn(global, 'fetch');
    });

    afterEach(() => {
      fetchedStub.mockRestore();
    })

    it('deve chamar a função fetch', () => {
      const artists = search();
      expect(fetchedStub).toHaveBeenCalled();
    });

    describe('Deve receber a URL correta', () => {
      test('Passando um tipo', () => {
        const artists = search('Incubus', 'artist');
        expect(fetchedStub).toHaveBeenCalledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=artist',
          {
            headers: {
              'Authorization': `Bearer ${process.env.TOKEN}`
            }
          }
        );
        const albuns = search('Incubus', 'album');
        expect(fetchedStub).toHaveBeenCalledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=album',
          {
            headers: {
              'Authorization': `Bearer ${process.env.TOKEN}`
            }
          }
        );
      });
    });

    it('should return the JSON Data from the Promise', () => {
      fetchedStub.mockResolvedValue({
        json: () => ({ body: 'json' }),
      });

      const artists = search('Incubus', 'artist');

      artists.then(data => {
        expect(data).toEqual({ body: 'json' });
      });
    });

  });

});