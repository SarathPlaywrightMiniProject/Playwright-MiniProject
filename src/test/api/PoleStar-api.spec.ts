import { expect, test } from "@playwright/test";
import { API_GET_DATA_URL } from "../../TestData/apiURL.data";
import { UserData } from "../../TestData/api.data.json";

// import * as faker from 'faker';

let userId: string;
let username: string;
let isbn: string;


test.only("Verify the Sample data with Get Method", async ({ request }) => {
    const response = await request.get(`${API_GET_DATA_URL}`)
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    const responseUser = await response.text();
    expect(responseUser).toContain(UserData[0].Name);
    expect(responseUser).toContain(UserData[0].Email);
    expect(responseUser).toContain(UserData[0].Gender);
    expect(responseUser).toContain(UserData[0].Status);
})

