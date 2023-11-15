import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/main';

describe('Spotify wrapper', () => {
  let fetchedStub;
  let promise;

    beforeEach(() => {
      fetchedStub = jest.spyOn(global, 'fetch');
      promise = fetchedStub.mockResolvedValue({ json: () => ({ body: 'json' }) });
    });

    afterEach(() => {
      fetchedStub.mockRestore();
    })

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
      const artists = search();
      expect(fetchedStub).toHaveBeenCalled();
    });

    describe('Deve receber a URL correta', () => {
      test('Passando um tipo', () => {
        const artists = search('Incubus', 'artist');
        expect(fetchedStub).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');
        const albuns = search('Incubus', 'album');
        expect(fetchedStub).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
      });
    });

    it('deve retornar os dados JSON da promessa', () => {
      fetchedStub.mockResolvedValue({
        json: () => ({ body: 'json' }),
      });

      const artists = search('Incubus', 'artist');

      artists.then(data => {
        expect(data).toEqual({ body: 'json' });
      });
    });

  });

  describe('searchArtists', () => {
    it('deve chamar a função de busca', () => {
      const artists = searchArtists('Incubus');
      expect(fetchedStub).toHaveBeenCalledTimes(1);
    });

    it('deve chamar fetch com o URL correto', () => {
      const artists = searchArtists('Incubus');
      expect(fetchedStub).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

      const artists2 = searchArtists('Muse');
      expect(fetchedStub).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');
    });
  });

  describe('searchAlbums', () => {
    it('deve chamar a função de busca', () => {
      const albums = searchAlbums('Incubus');
      expect(fetchedStub).toHaveBeenCalledTimes(1);
    });

    it('deve chamar fetch com o URL correto', () => {
      const albums = searchAlbums('Incubus');
      expect(fetchedStub).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');

      const albums2 = searchAlbums('Muse');
      expect(fetchedStub).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Muse&type=album');
    });
  });

  describe('searchTracks', () => {
    it('should call fetch function', () => {
      const tracks = searchTracks('Incubus');
      expect(fetchedStub).toHaveBeenCalledTimes(1);
    });

    it('should call fetch with the correct URL', () => {
      const tracks = searchTracks('Incubus');
      expect(fetchedStub).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');

      const tracks2 = searchTracks('Muse');
      expect(fetchedStub).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Muse&type=track');
    });
  });

  describe('searchPlaylists', () => {
    it('should call fetch function', () => {
      const playlists = searchPlaylists('Incubus');
      expect(fetchedStub).toHaveBeenCalledTimes(1);
    });

    it('should call fetch with the correct URL', () => {
      const playlists = searchPlaylists('Incubus');
      expect(fetchedStub).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');

      const playlists2 = searchPlaylists('Muse');
      expect(fetchedStub).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist');
    });
  });

});