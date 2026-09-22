import {Page, expect} from '@playwright/test';

export class CheckoutPage {
    constructor(private page: Page) {
    };

    async fill(d: any) {
        await this.page.getByTestId('firstName').fill(d.firstName);
        await this.page.getByTestId('lastName').fill(d.lastName);
        await this.page.getByTestId('postalCode').fill(d.postalCode);
    };

    async continue() {
        await this.page.getByTestId('continue').click();
    };

    async finish() {
        await this.page.getByTestId('finish').click();
    };

    async expectConfirmation() {
        await expect(this.page.getByTestId('complete-header')).toHaveText('Thank you for your order!');
    };

    async expectError(t: RegExp | string) {
        await expect(this.page.getByTestId('error')).toContainText(t);
    }
}
