import { getAlbum, getAlbums, getAlbumTracks } from '../src/album';

describe('Album', () => {
  let fetchedStub;
  let promise;

  beforeEach(() => {
    fetchedStub = jest.spyOn(global, 'fetch');
    promise = fetchedStub.mockResolvedValue({
      json: () => ({
        album: 'name'
      }),
    });
  });

  afterEach(() => {
    fetchedStub.mockRestore();
  })
  

  describe('smoke tests', () => {
    it('should have getAlbum method', () => {
      expect(getAlbum).toBeDefined();
    });

    it('should have getAlbums method', () => {
      expect(getAlbums).toBeDefined();
    });

    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).toBeDefined();
    });
  });

  describe('getAlbum', () => {
    it('should call fetch method', () => {
      const album = getAlbum();
      expect(fetchedStub).toHaveBeenCalledTimes(1);
    });

    it('should call fetch with the correct URL', () => {
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(fetchedStub).toHaveBeenCalledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');

      const album2 = getAlbum('4aawyAB9vmqN3uQ7FjRGTk');
      expect(fetchedStub).toHaveBeenCalledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk');
    });

    it('should return the correct data from Promise', () => {
      const mockedFetch = jest.fn().mockResolvedValue({ album: 'name'});
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(album).resolves.toEqual({ album: 'name' });
    });
  });

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const albums = getAlbums();
      expect(fetchedStub).toHaveBeenCalledTimes(1);
    });

    it('should call fetch with the correct URL', () => {
      const albums = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
      expect(fetchedStub).toHaveBeenCalledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk');
    });

    
    it('should return the correct data from Promise', () => {
      const mockedFetch = jest.fn().mockResolvedValue({ album: 'name'});
      const albums = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
      expect(albums).resolves.toEqual({ album: 'name' });
    });
  });

  describe('getAlbumsTracks', () => {
    it('should call fetch method', () => {
      const tracks = getAlbumTracks();
      expect(fetchedStub).toHaveBeenCalledTimes(1);
    });

    it('should call fetch with the correct URL', () => {
      const tracks = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(fetchedStub).toHaveBeenCalledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
    });

    it('should return the correct data from Promise', () => {
      const mockedFetch = jest.fn().mockResolvedValue({ album: 'name'});
      const tracks = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(tracks).resolves.toEqual({ album: 'name'});
    });
  });

});