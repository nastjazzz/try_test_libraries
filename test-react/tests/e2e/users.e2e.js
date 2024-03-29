const { expect } = require('@wdio/globals');
const UsersPage = require('../pages/users.page');

describe('My users page', () => {
    it('load users', async () => {
        await UsersPage.loadData();
    });

    it('delete user', async () => {
        await UsersPage.loadData();
        await UsersPage.deleteUser();
    });
});
