//TypeScript Definitions provide autocompletion in Visual Studio Code and other IDEs Definitions were generated in steps.d.ts Load them by adding at the top of a test file:

/// <reference path="../tests/steps.d.ts"/>

const Page = require('./page');

/**
 * Represents the login page
 * and includes functionality that facilitates interacting
 * with the page during tests
 * @extends Page
 */
class LoginPage extends Page {

  constructor() {
    super({
      isLoaded: {
        element: '#username',
        urlPart: '/login',
      },
    });

    this.fields = {
      username: '#username',
      password: '#password'
    };

    this.loginButton = {css: '.btn'};
  }

  /**
   * Logs the user in
   * Unless you are testing this functionality directly
   * you should not call this function. Instead, call I.login(userInfo)
   * @param {string} userInfo.username - username to login with
   * @param {string} userInfo.password - the user's password
   */
  login(userInfo) {

    const I = this.I;

    I.amOnPage('/home/index.html#/login');

    I.fillField(this.fields.username, userInfo.username);
    I.fillField(this.fields.password, userInfo.password);

    I.click(this.loginButton);

    // Wait for the page to load (event) or 30 seconds (default)
    // Set actor options in Codecept.conf.js, check there for waitForTimeout

    // Helps the caller detect whether login was
    // successful or not
    return {
      // Dashboard != Logged In...
      // Dashboard requires POC roles

      // If logged in, the user name, home and logout are in the header component

      // If login was successful we should be taken to the dashboard
      successful() {
      //Available dashboard options are dependent on POC Roles
        const dashboardPage = require('./dashboardPage');
        dashboardPage._init();
        dashboardPage.isLoaded();
        return dashboardPage;
/*
        //just the basic standard page with no specific features besides username, home, and logout
        let loggedInPage = new Page(
          {
          isLoaded: {
            //element: '#username',
            urlPart: '/dashboard',
          },
          components: ["header"]
        });

        loggedInPage._init();
        loggedInPage.isLoaded();
        return loggedInPage;
        */
      },
      // If the login was unsuccessful an error should pop up
      async unsuccessful(errorMessage) {

        I.waitForInvisible("#overlay");

        let whatIsaw = await I.grabTextFrom(".alert");
        I.say("I saw \"" + whatIsaw + "\"");

        I.see(errorMessage);
      },
    };
  }
}

module.exports = new LoginPage();
