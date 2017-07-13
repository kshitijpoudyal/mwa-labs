import { Assignment13Page } from './app.po';

describe('assignment13 App', () => {
  let page: Assignment13Page;

  beforeEach(() => {
    page = new Assignment13Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
