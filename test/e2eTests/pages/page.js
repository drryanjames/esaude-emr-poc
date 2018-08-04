const Component = require('./components/component');
const translator = require('./../translator');

//TypeScript Definitions provide autocompletion in Visual Studio Code and other IDEs Definitions were generated in steps.d.ts Load them by adding at the top of a test file:

/// <reference path="../tests/steps.d.ts"/>

/**
 * Represents a page on the POC website
 * A page consists of functions that help tests interact with the POC page
 * and can have multiple components which add common functionality.
 * Subclasses of Page pass in options that define when the page is loaded
 * and the names of the page's components, if any.
 * This class adds the component's properties
 * to the class instance which lets tests call component methods
 * on the instance as if they were one object. See Compoent for more details.
 *
 */

class Page {
  constructor(options) {

    if(!options) {
      options={isLoaded:{ urlPart:"", element: ""}};
    }

    // Make sure the components array is inialized
    options.components = options.components || [];

    this.options = options;

    // Every page should have the header component
    if (!this.options.components.includes('header')) {
      // eslint-disable-next-line angular/log
      console.error("no header found on page, adding...");
      this.options.components.push('header');
    }
  }

  /** Initializes the page */
  _init() {
    this.I = actor();

    // Add each component to this page
    this.options.components.forEach(name => this._addComponent(name));
  }

  /** Validates that the page is loaded */
  isLoaded() {

    //https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagewaitfornavigationoptions
    //await page.waitForNavigation();  // The navigationPromise resolves after navigation has finished
    //default timeout is disabled
    //options={timeout: 60, waitUntil: domcontentloaded};
    //This doesnt seem to work however, check with the actual source

    this.I.waitForNavigation();

    this.I.seeInCurrentUrl(this.options.isLoaded.urlPart);

    // If there is an overlay, wait for it
    this.I.waitForInvisible('#overlay');
  }

  /**
   * Gets an instance of the component
   * and copies its properties and functions
   * to this page
   * @param {string} componentName - the name of the component to add
   */
  _addComponent(componentName) {
    const component = Component.create(componentName);
    component.addToPage(this);
  }

  /**
   * Translate using the default locale
   * @param {string} key - the key used to get the translated value
   */
  translate(key) {
    return translator.translate(key);
  }
}

module.exports = Page;
