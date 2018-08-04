const Page = require('./page');

const LOG_TAG = '[ClinicDashboardPage]';

/**
 * Represents the clinic dashboard page
 * and includes functionality that facilitates interacting
 * with the page during tests
 * @extends Page
 */
class ClinicDashboardPage extends Page {
  constructor() {
    super({
      isLoaded: {
        element: '[ng-app="clinic"]',
        urlPart: '/clinic/#/dashboard',
      },

      components: ['tabs', 'actions']
    });

    this.tabs = {
      summary: 'a[ui-sref="dashboard.summary"]',
      chart: 'a[ui-sref="dashboard.chart"]',
      consultation: 'a[ui-sref="dashboard.consultation"]',
      prescriptions: 'a[ui-sref="dashboard.prescriptions"]',
      laboratory: 'a[ui-sref="dashboard.laboratory"]',
      current: 'a[ui-sref="dashboard.current"]',
    };
  }

  /** Clicks the consultation tab */
  clickConsultationTab() {
    this.clickTab(this.tabs.consultation);
  }

  /** Clicks the add vitals button */
  clickAddVitals() {
    const vitalsServiceId = '003';
    const addButton = `[data-qa-service-id="${vitalsServiceId}"] button[data-qa-type="add"]`;

    this.I.say(`${LOG_TAG} Click the add button`);
    this.I.waitForElement(addButton);
    this.I.click(addButton);

    this.I.say(`${LOG_TAG} waiting for adult vitals form to load`);


    const vitalsAdultFormPage = require('./vitalsAdultFormPage');
    vitalsAdultFormPage._init();
    vitalsAdultFormPage.isLoaded();
    return vitalsAdultFormPage;
  }
}

module.exports = new ClinicDashboardPage();
