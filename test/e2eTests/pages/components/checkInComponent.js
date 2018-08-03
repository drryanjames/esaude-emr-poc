const Component = require('./component');

const LOG_TAG = '[CheckInComponent]';

/**
 * Functions that help tests interact with the checkin UI.
 * Effectivey, this component helps tests check the patient in
 * @extends Component
 */
class CheckInComponent extends Component {
  /** Clicks the check in button */
  clickCheckIn() {
    this.I.say(`${LOG_TAG} Click the check in button`);
    this.I.waitForElement({css: '.checkin button'});
    this.I.click({css: '.checkin button'});

    this.I.say(`${LOG_TAG} Waiting for the check in to complete`);
    this.I.waitForInvisible('#overlay');

    this.I.say(`${LOG_TAG} Wait a second to let the next page load`);

  }

  /** Verifies the check in was successful */
  verifyCheckIn() {
    this.I.say(`${LOG_TAG} Validate the check in message appears`);
    this.I.see('Deu entrada hoje em');
  }
}

module.exports = CheckInComponent;
