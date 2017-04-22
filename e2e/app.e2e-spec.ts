import { NgAttackPage } from './app.po';

describe('ng-attack App', () => {
  let page: NgAttackPage;

  beforeEach(() => {
    page = new NgAttackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
