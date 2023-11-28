
const {test,expect} = require('@playwright/test');
const exp = require('constants');

test.describe('User Login Scenarios and UI element verification',()=>{

test.only('UI elements present', async ({ page }) => {
        await page.goto("https://integration-5ojmyuq-3c6ufwa5rxeda.ap-3.magentosite.cloud/signin");
        await expect(page.locator("//input[@placeholder='Ex: olivia@botti.com']")).toBeVisible();
        await expect(page.locator("//input[@placeholder='********************']")).toBeVisible();
        await expect(page.locator("//button[@type='submit']")).toBeVisible();
        // Add more assertions for other UI elements
    }),
    
test('Testing user login with correct credentials' , async({page})=>
{
   
    await page.goto('https://integration-5ojmyuq-3c6ufwa5rxeda.ap-3.magentosite.cloud/signin');

    const EmailField=page.locator("//input[@placeholder='Ex: olivia@botti.com']")
    const passwordField=page.locator("//input[@placeholder='********************']");
    const loginButton=page.locator("//button[@type='submit']")
    await page.locator();
    await page.waitForLoadState();
    await expect(page).toHaveURL('https://integration-5ojmyuq-3c6ufwa5rxeda.ap-3.magentosite.cloud/signin');
  
await EmailField.click();
await EmailField.type("testuser@fakemail.com");
await passwordField.type("HardCodedPassword123!");
await loginButton.click();
await page.close()
}),
test('Testing user login with incorrect password' , async({page})=>
{
    await page.goto('https://integration-5ojmyuq-3c6ufwa5rxeda.ap-3.magentosite.cloud/signin');

    const loginButton=page.locator("//button[@type='submit']")
    await page.locator();
    await page.waitForLoadState();
    await expect(page).toHaveURL('https://integration-5ojmyuq-3c6ufwa5rxeda.ap-3.magentosite.cloud/signin');
    await page.getByPlaceholder('Ex: olivia@botti.com').fill("testuser@fakemail.com");
    await page.getByPlaceholder('********************').fill("HardCodedPassword123!!");

    await loginButton.click();

const errorTextLogin= await page.waitForSelector('//span[text()=\'Incorrect username or password.\']');

const err=await errorTextLogin.textContent();
console.log(err);
expect(err).toContain('Incorrect username or password.');



}),

test('invalid username', async ({ page }) => {
    await page.goto('https://integration-5ojmyuq-3c6ufwa5rxeda.ap-3.magentosite.cloud/signin');
    await page.getByPlaceholder('Ex: olivia@botti.com').fill("testuser@fakemail.comm");
    await page.getByPlaceholder('********************').fill("HardCodedPassword123!");
    await page.click('text=Login');
    const errorTextLogin= await page.waitForSelector('//span[text()=\'Incorrect username or password.\']');
    const err=await errorTextLogin.textContent();
    console.log(err);
    expect(err).toContain('Incorrect username or password.');
}),

test('empty username', async ({ page }) => {
    await page.goto('https://integration-5ojmyuq-3c6ufwa5rxeda.ap-3.magentosite.cloud/signin');
    await page.fill('input[name="password"]', 'validPassword');
    await page.click('text=Login');
    // Add assertion to verify login failure
}),
test('empty password', async ({ page }) => {
    await page.goto('https://integration-5ojmyuq-3c6ufwa5rxeda.ap-3.magentosite.cloud/signin');
    await page.fill('input[name="username"]', 'validUsername');
    await page.click('text=Login');
    // Add assertion to verify login failure
}),
test('empty credentials', async ({ page }) => {
    await page.goto('https://integration-5ojmyuq-3c6ufwa5rxeda.ap-3.magentosite.cloud/signin');
    await page.click('text=Login');
    // Add assertion to verify login failure
}),
test('password visibility toggle', async ({ page }) => {
    await page.goto('https://integration-5ojmyuq-3c6ufwa5rxeda.ap-3.magentosite.cloud/signin');
    await page.fill('input[name="password"]', 'Password');
    // Toggle visibility
    await page.click('button#togglePasswordVisibility');
    // Add assertion to verify password visibility change
})



})