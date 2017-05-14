import { Weissdev.Github.IoPage } from './app.po';

describe('weissdev.github.io App', () => {
  let page: Weissdev.Github.IoPage;

  beforeEach(() => {
    page = new Weissdev.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
