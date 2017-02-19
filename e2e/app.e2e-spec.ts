import { AlduinoPortfolioPage } from './app.po';

describe('alduino-portfolio App', () => {
  let page: AlduinoPortfolioPage;

  beforeEach(() => {
    page = new AlduinoPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
