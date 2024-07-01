import { Browser, chromium, expect, Page, test } from "@playwright/test";
import { User } from "../../models/user";
import { Form } from "../../models/form";
import { loginPage } from "../../pages/loginPage";
import { BookTestDrivePage } from "../../pages/BookTestDrivePage";
import { DesignAndOrderPage } from "../../pages/DesignAndOrderPage";
import { ShopAccessoriesPage } from "../../pages/ShopAccessoriesPage";

test.describe.configure({ mode: 'parallel' });
// let browser: Browser;

// test.beforeEach(async ({ page }) => {
//   browser = await chromium.launch();
//   page = await browser.newPage();
// });

// test.afterEach(async ({ page }) => {
//   await page.close()
//   await browser.close();
// });

test("Book Test driver for Existing customer", async ({ page }) => {
  test.setTimeout(150000);
  let LoginPage: loginPage;
  let bookTestDrivePage: BookTestDrivePage;
  let shopAccessoriesPage: ShopAccessoriesPage;
  LoginPage = new loginPage(page);
  bookTestDrivePage = new BookTestDrivePage(page);
  shopAccessoriesPage = new ShopAccessoriesPage(page);

  await LoginPage.navigate();
  await shopAccessoriesPage.clickMenu();
  // await bookTestDrivePage.AsserterifytheTitle();
  // await bookTestDrivePage.AsssertModelTab();
  await bookTestDrivePage.choosetheModel();
  // await bookTestDrivePage.AsserttheModelSelected();
  await bookTestDrivePage.clickLocationMenubtn();
  // await LoginPage.verifyPopupHandle();
  // await bookTestDrivePage.navigateToBooktestDrive();
  // await bookTestDrivePage.selectVehicleAccessrios();

});


test("Verify the Polestar design and order", async ({ page }) => {
  test.setTimeout(150000);
  let LoginPage: loginPage;
  let bookTestDrivePage: BookTestDrivePage;
  let designAndOrderPage: DesignAndOrderPage;
  let shopAccessoriesPage: ShopAccessoriesPage;
  LoginPage = new loginPage(page);
  bookTestDrivePage = new BookTestDrivePage(page);
  designAndOrderPage = new DesignAndOrderPage(page);
  shopAccessoriesPage = new ShopAccessoriesPage(page);
  await LoginPage.navigate();
  await shopAccessoriesPage.clickMenu();
  await bookTestDrivePage.clickBookTest();
  await designAndOrderPage.selectPolishModel();
  await designAndOrderPage.AssertVehicleSpecTitle();
  await designAndOrderPage.clickExistingSigninBtn();
});


test.only("Verify the Polestar Shop accessories", async ({ page }) => {
  test.setTimeout(150000);
  let LoginPage: loginPage;
  let shopAccessoriesPage: ShopAccessoriesPage;
  LoginPage = new loginPage(page);
  shopAccessoriesPage = new ShopAccessoriesPage(page);
  await LoginPage.navigate();
  await shopAccessoriesPage.clickMenu();
  await shopAccessoriesPage.selectshopMenu();
  await shopAccessoriesPage.AssertCheckAllTypeofAccessories();
});