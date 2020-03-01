const assert = require('assert');

describe('Selectors test', () => {
    beforeEach(function() {
        browser.setWindowSize(1900, 1200)
        browser.url('./')
    })

    it('By id', () => {
        const clickById = $("#contact-us")
        clickById.click();

        console.log("Home Page Header: " + browser.getTitle())
        browser.pause(2000)

        browser.switchWindow('WebDriver | Contact Us')
        console.log("Contact Us Header: " + browser.getTitle())

        browser.closeWindow()
        browser.pause(2000)
    });
});