import {test, expect} from '../src/fixtures/test';
import {users, products} from '../src/data/testData';

test('WEB-03 add product @web @p0 @smoke @regression', async ({loginPage, productsPage, cartPage}) => {
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await productsPage.add(products.backpack);
    await productsPage.openCart();
    await cartPage.expectProduct(products.backpack);
});
test('WEB-07 remove product @web @p1 @regression', async ({loginPage, productsPage, cartPage, page}) => {
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await productsPage.add(products.backpack);
    await productsPage.openCart();
    await cartPage.remove(products.backpack);
    await expect(page.locator('.cart_item')).toHaveCount(0);
});
