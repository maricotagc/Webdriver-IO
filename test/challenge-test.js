const assert = require('assert');

describe('Challenge Test', () => {
    beforeEach(function() {
        browser.setWindowSize(1900, 1200)
        browser.url('./')
    })

//    it('1.Search URL', () => {
//        const urlName = browser.getUrl()
//        assert.equal(urlName, 'http://www.webdriveruniversity.com/');
//        console.log("Home Page Name is: " + urlName)
//        browser.pause(2000)
//    });
//
//    it('2.Get Title', () => {
//         const pageTitle = browser.getTitle()
//         assert.equal(pageTitle, 'WebDriverUniversity.com');
//         console.log("Page's Title is: " + pageTitle)
//         browser.pause(2000)
//        });
//
//    it('3.Click contact us button and focus on new page', () => {
//         const contactUsButton = $('#contact-us')
//         contactUsButton.waitForDisplayed(2000)
//         contactUsButton.click()
//         browser.switchWindow('WebDriver | Contact Us')
//         console.log('Window in focus: ' + browser.getUrl())
//         browser.pause(5000)
//        });

    it('4.Populate fields and submit', () => {
        const contactUsButton = $('#contact-us')
        contactUsButton.waitForDisplayed(2000)
        contactUsButton.click()
        browser.switchWindow('WebDriver | Contact Us')

        const firstName = $('[name="first_name"]')
        const lastName = $('[name="last_name"]')
        const email = $('[name="email"]')
        const comment = $('[name="message"]')
        const submitButton = $('[value="SUBMIT"]')

        firstName.waitForDisplayed();
        firstName.setValue('Mariana');
        lastName.waitForDisplayed();
        lastName.addValue('Moita');
        email.waitForDisplayed();
        email.addValue("maricotagc@gmail.com");
        comment.waitForDisplayed();
        comment.addValue("I wanna be an automation tester =)");

        submitButton.waitForDisplayed();
        submitButton.click()
        browser.pause(3000)

        const successfulSubmissionURL = browser.getUrl()
        browser.switchWindow('Gianni Bruno - Designer')
        assert.equal(successfulSubmissionURL, 'http://www.webdriveruniversity.com/Contact-Us/contact-form-thank-you.html');

        });
});