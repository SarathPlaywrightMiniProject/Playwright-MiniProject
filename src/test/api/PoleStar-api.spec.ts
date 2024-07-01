import { expect, test } from "@playwright/test";
import { API_GET_DATA_URL } from "../../TestData/apiURL.data";
import { UserData } from "../../TestData/api.data.json";
// import * as faker from 'faker';

let userId: string;
let username: string;
let isbn: string;
let USERName = 'Anilaabh Jha';
let email = 'jha_anilaabh@grant.example';

test("Verify the Sample data with Get Method", async ({ request }) => {
    const response = await request.get(`${API_GET_DATA_URL}`)
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    const responseUser = await response.json();
    console.log(responseUser);
    let responseUserName = await responseUser.body().then((b: { toString: () => string; }) => { 
        let data = JSON.parse(b.toString()); 
        return data.email;
    });
    //  assert on UserName from response equal to UserName from request
     await expect(responseUserName).toBe(USERName);

})

