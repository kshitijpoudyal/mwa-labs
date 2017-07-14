import { Assignment14Page } from './app.po';

describe('assignment14 App', () => {
  let page: Assignment14Page;

  beforeEach(() => {
    page = new Assignment14Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
