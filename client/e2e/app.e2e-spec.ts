import { WsChatBotPage } from './app.po';

describe('ws-chat-bot App', () => {
  let page: WsChatBotPage;

  beforeEach(() => {
    page = new WsChatBotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
