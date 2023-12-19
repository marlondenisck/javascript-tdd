import SpotifyWrapper from "../src/spotify";


describe('Spotify Lib', () => {
  it('deve ser um objeto ', () => {
    expect(typeof SpotifyWrapper).toBe('object');
  });
  it('SpotifyWrapper.getAlbum deve ser uma  function', () => {
    expect(typeof SpotifyWrapper.getAlbum).toEqual('function');
  });
});