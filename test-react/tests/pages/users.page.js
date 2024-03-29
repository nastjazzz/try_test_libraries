const { $, $$, browser } = require('@wdio/globals');
const Page = require('./page');

class UsersPage extends Page {
    get loadingTitle() {
        return $('#users-loading');
    }

    get usersList() {
        return $('#users-list');
    }

    get usersItems() {
        //return browser.react$$('User');
        //return $$('#user-elem');
        return $$('#users-list');
    }

    async loadData() {
        try {
            await this.open();
            (await this.loadingTitle).waitForDisplayed({ timeout: 2000 });
            (await this.usersList).waitForDisplayed({ timeout: 2000 });
        } catch (e) {
            throw new Error('Cannot load users data');
        }
    }

    async deleteUser() {
        try {
            const usersCount = await this.usersItems[0].$$('div').length;
            console.log('!!!', { usersCount });
            if (!usersCount) {
                throw new Error('no users');
            }

            await this.usersItems[0].$$('div')[0].$('#user-delete').click();

            const usersCountAfterDelete = await this.usersItems[0].$$('div').length;
            if (usersCount - usersCountAfterDelete !== 1) {
                throw new Error('cannot delete user :(((');
            }
        } catch (e) {
            throw new Error('Cannot delete user' + e);
        }
    }

    open() {
        return super.open('users-test');
    }
}

module.exports = new UsersPage();
