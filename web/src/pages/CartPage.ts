import {Page, expect} from '@playwright/test';

export class CartPage {
    constructor(private page: Page) {
    };

    async expectProduct(n: string) {
        await expect(this.page.locator('.cart_item').filter({hasText: n})).toBeVisible();
    };

    async remove(n: string) {
        await this.page.locator('.cart_item').filter({hasText: n}).getByRole('button', {name: /remove/i}).click();
    };

    async checkout() {
        await this.page.getByTestId('checkout').click();
    }
}
