const { $ } = require('@wdio/globals');
const Page = require('./page');

class HelloPage extends Page {
    get toggleBtn() {
        return $('#toggle');
    }

    get header() {
        return $('#hello');
    }

    get searchInput() {
        return $('#search');
    }

    async toggleTitle(text) {
        await this.searchInput.setValue(text);

        await this.toggleBtn.click();
    }

    open() {
        return super.open('hello');
    }
}

module.exports = new HelloPage();
