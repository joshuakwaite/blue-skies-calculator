import { BlueSkiesCalculatorPage } from './app.po';

describe('blue-skies-calculator App', () => {
  let page: BlueSkiesCalculatorPage;

  beforeEach(() => {
    page = new BlueSkiesCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
