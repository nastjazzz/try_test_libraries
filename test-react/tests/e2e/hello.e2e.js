const { expect } = require('@wdio/globals');
const HelloPage = require('../pages/hello.page');

describe('My hello page', () => {
    it('should toggle title', async () => {
        await HelloPage.open();

        await HelloPage.toggleTitle('hello');
        await expect(HelloPage.header).toBeExisting();

        await HelloPage.toggleBtn.click();
        await expect(HelloPage.header).not.toBeExisting();
    });

    it('shouldnt show title', async () => {
        await HelloPage.open();

        await HelloPage.toggleTitle('hellooo');
        await expect(HelloPage.header).not.toBeExisting();
        await HelloPage.toggleBtn.click();
        await expect(HelloPage.header).not.toBeExisting();

        await HelloPage.toggleTitle('hello');
        await expect(HelloPage.header).toBeExisting();
    });
});
