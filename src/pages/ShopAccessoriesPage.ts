import { expect, Locator, Page } from "@playwright/test";
import test from "node:test";

export class ShopAccessoriesPage {

  readonly page: Page;
  draggableElement: Locator;
  droppableElement: Locator;
  verifytheTitleElement: Locator;
  clickBookTestDriveBtn: Locator;
  clickMenuBtn: Locator;
  clickBooktest: Locator;
  verifypagetitle: Locator;
  verifytheModelTab: Locator;
  selecttheModel: Locator;
  verifytheModelSelected: Locator;
  clickLocationMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.draggableElement = page.locator('id=draggable')
    this.droppableElement = page.getByLabel('Simple').locator('#droppable')
    // this.verifytheTitleElement=page.locator("//title[contains(text(),'Boka en provkörning')]");
    this.clickBookTestDriveBtn = page.locator("(//span[contains(text(),'Boka provkörning')])[3]");
    this.clickMenuBtn = page.locator("svg[aria-label='menu']");
    this.clickBooktest = page.locator("(//font[contains(text(),'Book a test drive')])[4]");
    this.verifypagetitle = page.locator("(//font[contains(text(),'Book a test drive')])[2]");
    this.verifytheModelTab = page.locator("//*[contains(text(),'Select model')]");
    this.selecttheModel = page.locator("//img[@alt='Polestar 2']");
    this.verifytheModelSelected = page.locator("(//*[name()='svg'][@aria-label='check'])[5]");
    this.clickLocationMenu = page.locator("//button[@data-dd-action-name='at-polestar']");
    this.clickMenuBtn = page.locator("svg[aria-label='menu']");
  }

   async clickMenu(){
      await this.clickMenuBtn.click();
   }

  async selectshopMenu() {
    await this.page.getByRole('menuitem', { name: 'Shop' }).click();
    // await this.page.screenshot({ path: "screenshots/Test.png" });
    await this.page.getByTestId('extras-link-container').getByRole('button', { name: 'Till vår webbshop' }).click();
  }

  async AssertCheckAllTypeofAccessories(){
    await expect(this.page.getByRole('button', { name: 'Alla' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Vinterhjul' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Sommarhjul' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Laddning' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Exteriör' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Interiör' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Tjänster' })).toBeVisible();
  }
}