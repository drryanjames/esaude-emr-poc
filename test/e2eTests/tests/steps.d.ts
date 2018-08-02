
type ICodeceptCallback = (i: CodeceptJS.I, Data:any, Apis:any, ClinicDashboardPage:any, ClinicPage:any, DashboardPage:any, EditPatientPage:any, LabDashboardPage:any, LabPage:any, LoginPage:any, PatientDetailPage:any, PharmacyDashboardPage:any, PharmacyPage:any, RegisterPatientPage:any, RegistrationDashboardPage:any, RegistrationPage:any, ReportsDashboardPage:any, SocialDashboardPage:any, SocialPage:any, VitalsAdultFormPage:any, VitalsDashboardPage:any, VitalsPage:any) => void;

declare class FeatureConfig {
  retry(times:number): FeatureConfig
  timeout(seconds:number): FeatureConfig
  config(config:object): FeatureConfig
  config(helperName:string, config:object): FeatureConfig
}

declare class ScenarioConfig {
  throws(err:any) : ScenarioConfig;
  fails() : ScenarioConfig;
  retry(times:number): ScenarioConfig
  timeout(timeout:number): ScenarioConfig
  inject(inject:object): ScenarioConfig
  config(config:object): ScenarioConfig
  config(helperName:string, config:object): ScenarioConfig
}

interface ILocator {
  xpath?: string;
  css?: string;
  name?: string;
  value?: string;
  frame?: string;
  android?: string;
  ios?: string;
}

declare class Locator implements ILocator {
  xpath?: string;
  css?: string;
  name?: string;
  value?: string;
  frame?: string;
  android?: string;
  ios?: string;

  or(locator:string): Locator;
  find(locator:string): Locator;
  withChild(locator:string): Locator;
  find(locator:string): Locator;
  at(position:number): Locator;
  first(): Locator;
  last(): Locator;
  inside(locator:string): Locator;
  before(locator:string): Locator;
  after(locator:string): Locator;
  withText(locator:string): Locator;
  withAttr(locator:object): Locator;
  as(locator:string): Locator;
}

declare function actor(customSteps?: {}): CodeceptJS.I;
declare function Feature(title: string, opts?: {}): FeatureConfig;
declare function Scenario(title: string, callback: ICodeceptCallback): ScenarioConfig;
declare function Scenario(title: string, opts: {}, callback: ICodeceptCallback): ScenarioConfig;
declare function xScenario(title: string, callback: ICodeceptCallback): ScenarioConfig;
declare function xScenario(title: string, opts: {}, callback: ICodeceptCallback): ScenarioConfig;
declare function Data(data: any): any;
declare function xData(data: any): any;
declare function Before(callback: ICodeceptCallback): void;
declare function BeforeSuite(callback: ICodeceptCallback): void;
declare function After(callback: ICodeceptCallback): void;
declare function AfterSuite(callback: ICodeceptCallback): void;

declare function locate(selector: string): Locator;
declare function locate(selector: ILocator): Locator;
declare function within(selector: string, callback: Function): Promise<any>;
declare function within(selector: ILocator, callback: Function): Promise<any>;
declare function session(selector: string, callback: Function): Promise<any>;
declare function session(selector: ILocator, callback: Function): Promise<any>;
declare function session(selector: string, config: any, callback: Function): Promise<any>;
declare function session(selector: ILocator, config: any, callback: Function): Promise<any>;
declare function pause(): void;

declare const codecept_helper: any;

declare namespace CodeceptJS {
  export interface I {
    amAcceptingPopups() : void,
    acceptPopup() : void,
    amCancellingPopups() : void,
    cancelPopup() : void,
    seeInPopup(text: string) : void,
    grabPopupText() : Promise<string>,
    amOnPage(url: string) : void,
    resizeWindow(width: number, height: number) : void,
    haveRequestHeaders(customHeaders: string) : void,
    moveCursorTo(locator: ILocator, offsetX?: number, offsetY?: number) : void,
    moveCursorTo(locator: string, offsetX?: number, offsetY?: number) : void,
    dragAndDrop(source: string, destination: string) : void,
    refreshPage() : void,
    scrollPageToTop() : void,
    scrollPageToBottom() : void,
    scrollTo(locator: ILocator, offsetX?: number, offsetY?: number) : void,
    scrollTo(locator: string, offsetX?: number, offsetY?: number) : void,
    seeInTitle(text: string) : void,
    grabPageScrollPosition() : Promise<string>,
    seeTitleEquals(text: string) : void,
    dontSeeInTitle(text: string) : void,
    grabTitle() : Promise<string>,
    switchToNextTab(num?: number) : void,
    switchToPreviousTab(num?: number) : void,
    closeCurrentTab() : void,
    closeOtherTabs() : void,
    openNewTab() : void,
    grabNumberOfOpenTabs() : Promise<string>,
    seeElement(locator: ILocator) : void,
    seeElement(locator: string) : void,
    dontSeeElement(locator: ILocator) : void,
    dontSeeElement(locator: string) : void,
    seeElementInDOM(locator: ILocator) : void,
    seeElementInDOM(locator: string) : void,
    dontSeeElementInDOM(locator: ILocator) : void,
    dontSeeElementInDOM(locator: string) : void,
    click(locator: ILocator, context?: ILocator) : void,
    click(locator: string, context?: ILocator) : void,
    click(locator: ILocator, context?: string) : void,
    click(locator: string, context?: string) : void,
    doubleClick(locator: ILocator, context?: ILocator) : void,
    doubleClick(locator: string, context?: ILocator) : void,
    doubleClick(locator: ILocator, context?: string) : void,
    doubleClick(locator: string, context?: string) : void,
    rightClick(locator: ILocator, context?: ILocator) : void,
    rightClick(locator: string, context?: ILocator) : void,
    rightClick(locator: ILocator, context?: string) : void,
    rightClick(locator: string, context?: string) : void,
    checkOption(field: ILocator, context?: ILocator) : void,
    checkOption(field: string, context?: ILocator) : void,
    checkOption(field: ILocator, context?: string) : void,
    checkOption(field: string, context?: string) : void,
    seeCheckboxIsChecked(field: ILocator) : void,
    seeCheckboxIsChecked(field: string) : void,
    dontSeeCheckboxIsChecked(field: ILocator) : void,
    dontSeeCheckboxIsChecked(field: string) : void,
    pressKey(key: string) : void,
    fillField(field: ILocator, value: string) : void,
    fillField(field: string, value: string) : void,
    clearField(field: ILocator) : void,
    clearField(field: string) : void,
    appendField(field: ILocator, value: string) : void,
    appendField(field: string, value: string) : void,
    seeInField(field: ILocator, value: string) : void,
    seeInField(field: string, value: string) : void,
    dontSeeInField(field: ILocator, value: string) : void,
    dontSeeInField(field: string, value: string) : void,
    attachFile(locator: ILocator, pathToFile: string) : void,
    attachFile(locator: string, pathToFile: string) : void,
    selectOption(select: ILocator, option: string) : void,
    selectOption(select: string, option: string) : void,
    grabNumberOfVisibleElements(locator: ILocator) : Promise<string>,
    grabNumberOfVisibleElements(locator: string) : Promise<string>,
    seeInCurrentUrl(url: string) : void,
    dontSeeInCurrentUrl(url: string) : void,
    seeCurrentUrlEquals(url: string) : void,
    dontSeeCurrentUrlEquals(url: string) : void,
    see(text: string, context?: ILocator) : void,
    see(text: string, context?: string) : void,
    seeTextEquals(text: string, context?: ILocator) : void,
    seeTextEquals(text: string, context?: string) : void,
    dontSee(text: string, context?: ILocator) : void,
    dontSee(text: string, context?: string) : void,
    grabSource() : Promise<string>,
    grabBrowserLogs() : Promise<string>,
    grabCurrentUrl() : Promise<string>,
    seeInSource(text: string) : void,
    dontSeeInSource(text: string) : void,
    seeNumberOfElements(selector: string, num: number) : void,
    seeNumberOfVisibleElements(locator: ILocator, num: number) : void,
    seeNumberOfVisibleElements(locator: string, num: number) : void,
    setCookie(cookie: string) : void,
    seeCookie(name: string) : void,
    dontSeeCookie(name: string) : void,
    grabCookie(name: string) : Promise<string>,
    clearCookie(name: string) : void,
    executeScript(fn: Function) : void,
    executeAsyncScript(fn: Function) : void,
    grabTextFrom(locator: ILocator) : Promise<string>,
    grabTextFrom(locator: string) : Promise<string>,
    grabValueFrom(locator: ILocator) : Promise<string>,
    grabValueFrom(locator: string) : Promise<string>,
    grabHTMLFrom(locator: ILocator) : Promise<string>,
    grabHTMLFrom(locator: string) : Promise<string>,
    grabCssPropertyFrom(locator: ILocator, cssProperty: string) : Promise<string>,
    grabCssPropertyFrom(locator: string, cssProperty: string) : Promise<string>,
    seeCssPropertiesOnElements(locator: ILocator, cssProperties: string) : void,
    seeCssPropertiesOnElements(locator: string, cssProperties: string) : void,
    seeAttributesOnElements(locator: ILocator, attributes: string) : void,
    seeAttributesOnElements(locator: string, attributes: string) : void,
    grabAttributeFrom(locator: ILocator, attr: string) : Promise<string>,
    grabAttributeFrom(locator: string, attr: string) : Promise<string>,
    saveScreenshot(fileName: string, fullPage: string) : void,
    wait(sec: number) : void,
    waitForEnabled(locator: ILocator, sec: number) : void,
    waitForEnabled(locator: string, sec: number) : void,
    waitForValue(locator: ILocator, value: string, sec: number) : void,
    waitForValue(locator: string, value: string, sec: number) : void,
    waitNumberOfVisibleElements(locator: ILocator, num: number, sec: number) : void,
    waitNumberOfVisibleElements(locator: string, num: number, sec: number) : void,
    waitForElement(locator: ILocator, sec: number) : void,
    waitForElement(locator: string, sec: number) : void,
    waitForVisible(locator: ILocator, sec: number) : void,
    waitForVisible(locator: string, sec: number) : void,
    waitForInvisible(locator: ILocator, sec: number) : void,
    waitForInvisible(locator: string, sec: number) : void,
    waitToHide(locator: ILocator, sec: number) : void,
    waitToHide(locator: string, sec: number) : void,
    waitInUrl(urlPart: string, sec?: number) : void,
    waitUrlEquals(urlPart: string, sec?: number) : void,
    waitForText(text: string, sec?: number, context?: ILocator) : void,
    waitForText(text: string, sec?: number, context?: string) : void,
    waitForRequest(urlOrPredicate: string, sec?: number) : void,
    waitForResponse(urlOrPredicate: string, sec?: number) : void,
    switchTo(locator: ILocator) : void,
    switchTo(locator: string) : void,
    waitForFunction(fn: Function, argsOrSec?: string, sec?: number) : void,
    waitForNavigation(opts?: string) : void,
    waitUntil(fn: Function, sec?: number) : void,
    waitUntilExists(locator: ILocator, sec: number) : void,
    waitUntilExists(locator: string, sec: number) : void,
    waitForDetached(locator: ILocator, sec: number) : void,
    waitForDetached(locator: string, sec: number) : void,
    debug(msg: string) : void,
    debugSection(section: string, msg: string) : void,
    amFollowingRequestRedirects() : void,
    amNotFollowingRequestRedirects() : void,
    setRequestTimeout(newTimeout: string) : void,
    resetRequestHeaders() : void,
    sendGetRequest(url: string, headers?: string) : void,
    sendPostRequest(url: string, payload?: string, headers?: string) : void,
    sendPatchRequest(url: string, payload?: string, headers?: string) : void,
    sendPutRequest(url: string, payload?: string, headers?: string) : void,
    sendDeleteRequest(url: string, headers?: string) : void,
    login(userInfo: string) : void,
    say(msg: string) : void,
    retryStep(opts: string) : void,

  }

  export interface Data {

  }


  export interface Apis {
    cleanUp() : void,

  }


  export interface ClinicDashboardPage {
    clickTab(tabElement: string) : void,
    clickBackFromDashboard(returnPage: string) : void,
    clickTransferPatientButton() : void,
    clickViewPatientButton() : void,
    clickEditPatientButton() : void,
    clickDeletePatientButton() : void,
    transferToRegistrationModule() : void,
    transferToSocialModule() : void,
    transferToVitalsModule() : void,
    transferToClinicModule() : void,
    transferToPharmacyModule() : void,
    transferToLabModule() : void,
    transferToReportsModule() : void,
    clickHome() : void,
    verifySuccessToast(message?: string) : void,
    logout() : void,
    clickConsultationTab() : void,
    clickAddVitals() : void,
    isLoaded() : void,
    translate(key: string) : void,

  }


  export interface ClinicPage {
    disableAutoSelect() : void,
    search(text: string) : void,
    clickSearchResult(patient: string) : void,
    clearSearch(text: string) : void,
    seePatientRecord(patient: string) : void,
    dontSeePatientRecord(patient: string) : void,
    seeNoResults() : void,
    searchForPatientByIdAndSelect(patient: string) : void,
    clickHome() : void,
    verifySuccessToast(message?: string) : void,
    logout() : void,
    isLoaded() : void,
    translate(key: string) : void,

  }


  export interface DashboardPage {
    clickHome() : void,
    verifySuccessToast(message?: string) : void,
    logout() : void,
    navigateToClinicPage() : void,
    navigateToLabPage() : void,
    navigateToPharmacyPage() : void,
    navigateToRegistrationPage() : void,
    navigateToReportPage() : void,
    navigateToSocialPage() : void,
    navigateToVitalsPage() : void,
    isLoaded() : void,
    translate(key: string) : void,

  }


  export interface EditPatientPage {
    clickHome() : void,
    verifySuccessToast(message?: string) : void,
    logout() : void,
    isLoaded() : void,
    translate(key: string) : void,

  }


  export interface LabDashboardPage {
    clickTab(tabElement: string) : void,
    clickBackFromDashboard(returnPage: string) : void,
    clickTransferPatientButton() : void,
    clickViewPatientButton() : void,
    clickEditPatientButton() : void,
    clickDeletePatientButton() : void,
    transferToRegistrationModule() : void,
    transferToSocialModule() : void,
    transferToVitalsModule() : void,
    transferToClinicModule() : void,
    transferToPharmacyModule() : void,
    transferToLabModule() : void,
    transferToReportsModule() : void,
    clickHome() : void,
    verifySuccessToast(message?: string) : void,
    logout() : void,
    isLoaded() : void,
    translate(key: string) : void,

  }


  export interface LabPage {
    disableAutoSelect() : void,
    search(text: string) : void,
    clickSearchResult(patient: string) : void,
    clearSearch(text: string) : void,
    seePatientRecord(patient: string) : void,
    dontSeePatientRecord(patient: string) : void,
    seeNoResults() : void,
    searchForPatientByIdAndSelect(patient: string) : void,
    clickHome() : void,
    verifySuccessToast(message?: string) : void,
    logout() : void,
    isLoaded() : void,
    translate(key: string) : void,

  }


  export interface LoginPage {
    clickHome() : void,
    verifySuccessToast(message?: string) : void,
    logout() : void,
    login(userInfo: string) : void,
    isLoaded() : void,
    translate(key: string) : void,

  }


  export interface PatientDetailPage {
    clickHome() : void,
    verifySuccessToast(message?: string) : void,
    logout() : void,
    isLoaded() : void,
    translate(key: string) : void,

  }


  export interface PharmacyDashboardPage {
    disableAutoSelect() : void,
    search(text: string) : void,
    clickSearchResult(patient: string) : void,
    clearSearch(text: string) : void,
    seePatientRecord(patient: string) : void,
    dontSeePatientRecord(patient: string) : void,
    seeNoResults() : void,
    searchForPatientByIdAndSelect(patient: string) : void,
    clickCheckIn() : void,
    verifyCheckIn() : void,
    clickTab(tabElement: string) : void,
    clickBackFromDashboard(returnPage: string) : void,
    clickTransferPatientButton() : void,
    clickViewPatientButton() : void,
    clickEditPatientButton() : void,
    clickDeletePatientButton() : void,
    transferToRegistrationModule() : void,
    transferToSocialModule() : void,
    transferToVitalsModule() : void,
    transferToClinicModule() : void,
    transferToPharmacyModule() : void,
    transferToLabModule() : void,
    transferToReportsModule() : void,
    clickHome() : void,
    verifySuccessToast(message?: string) : void,
    logout() : void,
    isLoaded() : void,
    translate(key: string) : void,

  }


  export interface PharmacyPage {
    disableAutoSelect() : void,
    search(text: string) : void,
    clickSearchResult(patient: string) : void,
    clearSearch(text: string) : void,
    seePatientRecord(patient: string) : void,
    dontSeePatientRecord(patient: string) : void,
    seeNoResults() : void,
    searchForPatientByIdAndSelect(patient: string) : void,
    clickHome() : void,
    verifySuccessToast(message?: string) : void,
    logout() : void,
    isLoaded() : void,
    translate(key: string) : void,

  }


  export interface RegisterPatientPage {
    clickHome() : void,
    verifySuccessToast(message?: string) : void,
    logout() : void,
    isLoaded() : void,
    fillIdentifierForm(patient: string) : void,
    fillNameForm(patient: string) : void,
    selectGender(patient: string) : void,
    fillBirthDateForm(patient: string) : void,
    fillContactForm(patient: string) : void,
    selectProvenience(patient: string) : void,
    fillHIVTestForm(patient: string) : void,
    clickNext(seconds?: string) : void,
    confirmPatientData(patient: string) : void,
    translate(key: string) : void,

  }


  export interface RegistrationDashboardPage {
    clickCheckIn() : void,
    verifyCheckIn() : void,
    clickTab(tabElement: string) : void,
    clickBackFromDashboard(returnPage: string) : void,
    clickTransferPatientButton() : void,
    clickViewPatientButton() : void,
    clickEditPatientButton() : void,
    clickDeletePatientButton() : void,
    transferToRegistrationModule() : void,
    transferToSocialModule() : void,
    transferToVitalsModule() : void,
    transferToClinicModule() : void,
    transferToPharmacyModule() : void,
    transferToLabModule() : void,
    transferToReportsModule() : void,
    deletePatientModalIsLoaded() : void,
    deletePatient(deleteReason: string) : void,
    declarePatientAsDead(deathReason: string, deathDate: string) : void,
    verifyRestrictionToDeletePatient() : void,
    checkIsDeadBox() : void,
    verifyPatientDeathDetails(deathDetails: string) : void,
    clickHome() : void,
    verifySuccessToast(message?: string) : void,
    logout() : void,
    clickProgramsTab() : void,
    enrollInProgram(programType: string, state: string, admissionDate: string) : void,
    clickAddProgramButton() : void,
    selectProgramType(programType: string) : void,
    selectState(programState: string) : void,
    enterAdmissionDate(admissionDate: string) : void,
    clickConfirmNewProgram() : void,
    verifySuccessfulProgramEnrollment() : void,
    verifyModalAlert(alert: string) : void,
    closeEnrollInProgramModal() : void,
    isLoaded() : void,
    translate(key: string) : void,

  }


  export interface RegistrationPage {
    disableAutoSelect() : void,
    search(text: string) : void,
    clickSearchResult(patient: string) : void,
    clearSearch(text: string) : void,
    seePatientRecord(patient: string) : void,
    dontSeePatientRecord(patient: string) : void,
    seeNoResults() : void,
    searchForPatientByIdAndSelect(patient: string) : void,
    clickHome() : void,
    verifySuccessToast(message?: string) : void,
    logout() : void,
    clickNewPatienButton() : void,
    isLoaded() : void,
    translate(key: string) : void,

  }


  export interface ReportsDashboardPage {
    clickHome() : void,
    verifySuccessToast(message?: string) : void,
    logout() : void,
    isLoaded() : void,
    translate(key: string) : void,

  }


  export interface SocialDashboardPage {
    clickTab(tabElement: string) : void,
    clickBackFromDashboard(returnPage: string) : void,
    clickTransferPatientButton() : void,
    clickViewPatientButton() : void,
    clickEditPatientButton() : void,
    clickDeletePatientButton() : void,
    transferToRegistrationModule() : void,
    transferToSocialModule() : void,
    transferToVitalsModule() : void,
    transferToClinicModule() : void,
    transferToPharmacyModule() : void,
    transferToLabModule() : void,
    transferToReportsModule() : void,
    clickHome() : void,
    verifySuccessToast(message?: string) : void,
    logout() : void,
    isLoaded() : void,
    translate(key: string) : void,

  }


  export interface SocialPage {
    disableAutoSelect() : void,
    search(text: string) : void,
    clickSearchResult(patient: string) : void,
    clearSearch(text: string) : void,
    seePatientRecord(patient: string) : void,
    dontSeePatientRecord(patient: string) : void,
    seeNoResults() : void,
    searchForPatientByIdAndSelect(patient: string) : void,
    clickHome() : void,
    verifySuccessToast(message?: string) : void,
    logout() : void,
    isLoaded() : void,
    translate(key: string) : void,

  }


  export interface VitalsAdultFormPage {
    clickHome() : void,
    verifySuccessToast(message?: string) : void,
    logout() : void,
    fillForm(data: string) : void,
    clickNext() : void,
    verifyForm(data: string) : void,
    clickConfirm() : void,
    isLoaded() : void,
    translate(key: string) : void,

  }


  export interface VitalsDashboardPage {
    clickBackFromDashboard(returnPage: string) : void,
    clickTransferPatientButton() : void,
    clickViewPatientButton() : void,
    clickEditPatientButton() : void,
    clickDeletePatientButton() : void,
    transferToRegistrationModule() : void,
    transferToSocialModule() : void,
    transferToVitalsModule() : void,
    transferToClinicModule() : void,
    transferToPharmacyModule() : void,
    transferToLabModule() : void,
    transferToReportsModule() : void,
    clickHome() : void,
    verifySuccessToast(message?: string) : void,
    logout() : void,
    isLoaded() : void,
    translate(key: string) : void,

  }


  export interface VitalsPage {
    disableAutoSelect() : void,
    search(text: string) : void,
    clickSearchResult(patient: string) : void,
    clearSearch(text: string) : void,
    seePatientRecord(patient: string) : void,
    dontSeePatientRecord(patient: string) : void,
    seeNoResults() : void,
    searchForPatientByIdAndSelect(patient: string) : void,
    clickHome() : void,
    verifySuccessToast(message?: string) : void,
    logout() : void,
    isLoaded() : void,
    translate(key: string) : void,

  }

}

declare module "codeceptjs" {
    export = CodeceptJS;
}
