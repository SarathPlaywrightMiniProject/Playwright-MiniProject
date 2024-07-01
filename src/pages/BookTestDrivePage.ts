import { expect, Locator, Page } from "@playwright/test";
import test from "node:test";

export class BookTestDrivePage {

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

  async clickLocationMenubtn() {
    await this.clickLocationMenu.dblclick();
  }

  async clickBookTest() {
    await this.clickBooktest.click();
  }
  // async AsserterifytheTitle() {
  //   await expect(this.verifypagetitle).toBeVisible();
  // }

  async AsssertModelTab() {
    await expect(this.verifytheModelTab).toBeVisible();
  }

  async choosetheModel() {
    await this.selecttheModel.dblclick();
  }

  async AsserttheModelSelected() {
    await expect(this.verifytheModelSelected).toBeVisible();
  }

  async navigateToBooktestDrive() {
    // Perform navigate to vehicle config
    await this.page.getByLabel('Meny').click();
    await expect(this.page.getByRole('menuitem', { name: 'Boka provkörning' })).toBeVisible();
    await this.clickBookTestDriveBtn.click();
    await expect(this.verifytheTitleElement).toBeVisible();
  }

  async selectVehicleAccessrios() {
    await this.page.getByTestId('selectable-card-ps2').click();
    await expect(this.page.getByRole('heading', { name: 'Välj plats' })).toBeVisible();
    await this.page.getByTestId('selectable-card-at-polestar').click();
    await this.page.getByTestId('at-polestar-list-gothenburg').click();
    await this.page.getByLabel('Single motor').check();
    await this.page.getByTestId('calendar').locator('div').filter({ hasText: '1julimåndag1h 30min12:30 - 14' }).getByTestId('selectable-date').first().click();
    await expect(this.page.getByRole('heading', { name: 'Ange kontaktuppgifter' })).toBeVisible();
  }
  async verifyDroppedText() {
    await expect(this.droppableElement).toContainText('Dropped');
  }
}