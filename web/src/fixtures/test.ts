import {test as base, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {ProductsPage} from '../pages/ProductsPage';
import {CartPage} from '../pages/CartPage';
import {CheckoutPage} from '../pages/CheckoutPage';

type F = { loginPage: LoginPage; productsPage: ProductsPage; cartPage: CartPage; checkoutPage: CheckoutPage };
export const test = base.extend<F>({
    loginPage: async ({page}, use) => use(new LoginPage(page)),
    productsPage: async ({page}, use) => use(new ProductsPage(page)),
    cartPage: async ({page}, use) => use(new CartPage(page)),
    checkoutPage: async ({page}, use) => use(new CheckoutPage(page))
});
export {expect};
