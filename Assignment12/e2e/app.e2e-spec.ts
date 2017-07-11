import { Assignment12Page } from './app.po';

describe('assignment12 App', () => {
  let page: Assignment12Page;

  beforeEach(() => {
    page = new Assignment12Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
