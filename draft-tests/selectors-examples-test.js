const assert = require('assert');

describe('Selectors test', () => {
    beforeEach(function() {
        browser.setWindowSize(1900, 1200)
        browser.url('./')
    })

    it('By id', () => {
        const clickById = $("#contact-us")
        clickById.click();
        browser.pause(2000)
    });

    it('By class', () => {
         const clickByClass = $(".section-title")
         clickByClass.click();
         browser.pause(2000)
    });

    it('By xpath', () => {
        const clickByXpath = $("//h1[text()='CONTACT US']/../..")
        clickByXpath.click();
        browser.pause(2000)
    });

    it('By css', () => {
        const clickByCss = $("#contact-us h1")
        clickByCss.click();
        browser.pause(2000)
    });
});