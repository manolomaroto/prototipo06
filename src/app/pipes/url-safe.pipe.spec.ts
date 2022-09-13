import { SafePipe } from './url-safe.pipe';

xdescribe('UrlSafePipe', () => {
  it('create an instance', () => {
    const pipe = new SafePipe();
    expect(pipe).toBeTruthy();
  });
});
