import { Ng2CliValidationMessagesPage } from './app.po';

describe('ng2-cli-validation-messages App', () => {
  let page: Ng2CliValidationMessagesPage;

  beforeEach(() => {
    page = new Ng2CliValidationMessagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('demo-app works!');
  });
});
