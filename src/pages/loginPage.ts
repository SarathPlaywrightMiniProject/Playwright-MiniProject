import { expect, Locator, Page } from "@playwright/test";
// import {url} from "../requests/ConfigProperties.json";

export class loginPage {
  
  readonly page: Page;
  readonly toolTipButton: Locator;
 
  constructor(page: Page) {
    this.page = page;
    this.toolTipButton = page.locator('id=toolTipButton')
  }

  // async navigate() {
  //   await this.page.goto("https://www.polestar.com/se");
  // }

  async verifyPopupHandle() {
    await this.page.locator('li').filter({ hasText: 'Functional Functional' }).locator('span').first().click();
    await this.page.locator('li').filter({ hasText: 'Performance Performance' }).locator('span').first().click();
    await this.page.locator('li').filter({ hasText: 'Targeting and Advertising Targeting and Advertising' }).locator('span').first().click();
    await this.page.getByRole('button', { name: 'Accept all' }).click();
  }
  
   async gettooltipText() {
    // Wait for the tooltip to appear
    const tooltip = await this.page.waitForSelector('.tooltip-inner');
    // Get the tooltip text
    return await tooltip.innerText();
  }

  async navigate(){
    const targetUrl = 'https://www.polestar.com/se';
    await this.page.goto(targetUrl);
    await this.page.locator('li').filter({ hasText: 'Functional Functional' }).locator('span').first().click();
    await this.page.locator('li').filter({ hasText: 'Performance Performance' }).locator('span').first().click();
    await this.page.locator('li').filter({ hasText: 'Targeting and Advertising Targeting and Advertising' }).locator('span').first().click();
    await this.page.getByRole('button', { name: 'Accept all' }).click();

  // Wait for the page to load
  await this.page.waitForLoadState('networkidle');

  // Open Google Translate with the target URL for translation
  const translateUrl = `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=${encodeURIComponent(targetUrl)}`;
  await this.page.goto(translateUrl);

  // Wait for the translation to complete by checking for a known element on the translated page
  // await this.page.waitForSelector('#result_box, .result-shield-container');
  }
}