import {test} from '../src/fixtures/test';
import {users} from '../src/data/testData';

test('WEB-01 valid login @web @p0 @smoke @regression', async ({loginPage, productsPage}) => {
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await productsPage.expectLoaded();
});
test('WEB-02 locked user @web @p0 @smoke @regression', async ({loginPage}) => {
    await loginPage.goto();
    await loginPage.login(users.locked.username, users.locked.password);
    await loginPage.expectError(/locked out/i);
});
test('WEB-08 invalid credentials @web @p1 @regression', async ({loginPage}) => {
    await loginPage.goto();
    await loginPage.login(users.invalid.username, users.invalid.password);
    await loginPage.expectError(/do not match/i);
});
