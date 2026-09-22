import {Page, expect} from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {
    };

    async goto() {
        await this.page.goto('/');
    };

    async login(u: string, p: string) {
        await this.page.getByPlaceholder('Username').click();
        await this.page.getByPlaceholder('Username').fill(u);
        await this.page.getByPlaceholder('Username').click();
        await this.page.getByPlaceholder('Password').fill(p);
        await this.page.getByRole('button', {name: 'Login'}).click();
    };

    async expectError(t: RegExp | string) {
        await expect(this.page.getByTestId('error')).toContainText(t);
    }
}
