import { expect, Locator, Page } from "@playwright/test";
import test from "node:test";

export class DesignAndOrderPage {

  readonly page: Page;
  draggableElement: Locator;
  droppableElement: Locator;
  verifytheTitleElement: Locator;
  clickBookTestDriveBtn: Locator;
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
    this.clickBooktest = page.locator("(//font[contains(text(),'Book a test drive')])[4]");
    this.verifypagetitle = page.locator("(//font[contains(text(),'Book a test drive')])[2]");
    this.verifytheModelTab = page.locator("//*[contains(text(),'Select model')]");
    this.selecttheModel = page.locator("//img[@alt='Polestar 2']");
    this.verifytheModelSelected = page.locator("(//*[name()='svg'][@aria-label='check'])[5]");
    this.clickLocationMenu = page.locator("//button[@data-dd-action-name='at-polestar']");
  }



  async selectPolishModel() {
    await this.page.getByRole('menuitem', { name: 'Polish 2' }).click();
    await this.page.getByRole('menuitem', { name: 'Design and order' }).click();
  }

async AssertVehicleSpecTitle(){
  await expect(this.page.getByRole('button', { name: 'Standard range Single motor' })).toBeVisible();
  await expect(this.page.getByRole('heading', { name: 'Exteriör' })).toBeVisible();
  await expect(this.page.getByRole('heading', { name: 'Uppgraderingar' })).toBeVisible();
  await expect(this.page.locator('#upgrades-selector').getByText('Individuella tillval')).toBeVisible();
}

  async clickExistingSigninBtn() {
    await this.page.getByRole('button', { name: 'Fortsätt' }).click();
    await this.page.getByRole('button', { name: 'Logga in' }).click();
  }
}