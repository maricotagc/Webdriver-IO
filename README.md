# Udemy_Webdriverio

NodeJs contains:
------------------------------------
1. npm: node pack manager which manages other packages (webdriver, mocha, chai, etc).
2. node: executes JS files. To find out version use command: node -v
3. selenium webdriver: package I will use (automation tool).
4. "npm init" is a command used every time a new project is started and it creates JSON.
5. JSON is the file that handles all dependencies withing the project. To check dependencies needed go to www.npmjs.com and search
    for webdriverio.
7. WDIO file has all configurationsS for tests.
8. mocha is a package (framework) which has a standard of test cases (describe, it...)

Useful commands:
--------------------------------------
"npm test" --> to execute tests
"npm test -- --logLevel=verbose" --> to execute TC and see logs in console
"npm test -- --spec=tests/TESTTOBEEXECUTED.js" --> to execute specific test within tests directory

Creating new project
--------------------------------------
1. install node
2. create project folder
3. get into the project folder and type: npm init (it creates the package.json)
4. npm install -save-dev webdriverio@4.13.2
5. npm install -save-dev mocha@5.2.0
6. npm install -save-dev selenium-standalone@6.15.3 
7. ./node_modules/.bin/selenium-standalone install
8. ./node_modules/.bin/selenium-standalone start (localhost:4444/wd/hub/static/resource/hub.html)
9. create a test example to get Title (titleTest.js - copy from webpage)
10. run it: node title.js
11. ./node_modules/.bin/wdio (run the wizard)
  - on local machine
  - mocha
  - type Yes
  - ./tests/**/*.js
  - dot
  - selenium-standalone
  - silence
  - ./errorShort
  - wwww.webdriveruniversity.com 
12. open wdio.conf and change it to chrome (browserName: 'chrome') 
13. create a folder called "tests" and move .js files into it
14. npm install -save-dev mocha@latest
15. npm install -save-dev chai@latest
16. wdio file: services: ['selenium-standalone'],
17. npm install wdio-selenium-standalone-service -save-dev
18. json:  "test": "wdio"
19. wdio: create at the beginning of the file: var baseUrl = 'http://www.luxoft.com';
20. wdio: update baseUrl = baseUrl, (at the middle of file)
21. wdio: 
beforeSession: function (config, capabilities, specs) {
                   expect = require('chai').expect;
                   should = require('chai').should();
               },
               
Useful websites:
-----------------------------------------------
1. chaijs.com 
2. nodejs.org./api/assert.html

Commands within test cases:
-----------------------------------------------
1. expect(var).to.equal('expectedValue')
2. expect(url).to.include('TextContainedInURL', 'Text in case of mismatch');
3. browser.setViewportSize
4. browser.getTitle()
5. browser.pause(miliseconds)
6. var.should.equal('expectedValue')
7. this.timeout(miliseconds)
8. browser.debug();
9. DEBUG=true npm test -- --spec=tests/webdriverUniversityTest.js
10. .exit to leave debug mode
11. it.only('test Name', function(done)
12. it.skip('test Name', function(done)  
13. browser.getCssProperty('#udemy-promo-thumbnail', 'height');
14. before hooks: https://mochajs.org/#hooks
15. browser.setValue("locator",'Joe');
16. browser.getTabIds();
17. browser.switchTab(tabIds[1]);
18. browser.click(selector)
19. browser.isExisting('selector);
20. browser.isVisible('selector');
21. browser.hasFocus('selector');
22. browser.isEnabled("selector");
23. browser.isSelected("selector");
24. browser.isVisibleWithinViewport("selector");

