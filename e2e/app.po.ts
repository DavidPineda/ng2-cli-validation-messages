import { browser, element, by } from 'protractor';

export class Ng2CliValidationMessagesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('demo-app-root h1')).getText();
  }
}
