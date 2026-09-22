import {test} from '../src/fixtures/test';
import {users, products, checkout} from '../src/data/testData';

test('WEB-04 complete purchase @web @p0 @smoke @regression', async ({
                                                                        loginPage,
                                                                        productsPage,
                                                                        cartPage,
                                                                        checkoutPage
                                                                    }) => {
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await productsPage.expectLoaded();
    await productsPage.add(products.backpack);
    await productsPage.expectCartCount(1);
    await productsPage.openCart();
    await cartPage.expectProduct(products.backpack);
    await cartPage.checkout();
    await checkoutPage.fill(checkout);
    await checkoutPage.continue();
    await checkoutPage.finish();
    await checkoutPage.expectConfirmation();
});