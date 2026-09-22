import {Page, expect} from '@playwright/test';


export class ProductsPage {
    constructor(private page: Page) {
    };

    async expectLoaded() {
        await expect(this.page.getByTestId('title')).toHaveText('Products');
    };

    async add(name: string) {
        const item = this.page.locator('.inventory_item').filter({hasText: name});
        await item.getByRole('button', {name: /add to cart/i}).click();
    };

    async openCart() {
        await this.page.getByTestId('shopping-cart-link').click();
    };

    async expectCartCount(n: number) {
        await expect(this.page.getByTestId('shopping-cart-badge')).toHaveText(String(n));
    }
}
