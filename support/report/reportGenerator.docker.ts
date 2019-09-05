const reporterDocker = require("cucumber-html-reporter");
const dateDocker: Date = new Date();
const optionsdocker = {
  jsonFile: "support/report/cucumber_report.json",
  launchReport: false,
  metadata: {
    "App Version": "0.0.1",
    "Date": `${dateDocker.getDate()}/${dateDocker.getMonth()}/${dateDocker.getFullYear()}`,
    "Time": `${dateDocker.getHours()}:${dateDocker.getMinutes()}:${dateDocker.getSeconds()}`
  },
  output: "support/report/cucumber_report.html",
  reportSuiteAsScenarios: true,
  theme: "bootstrap"
};
reporterDocker.generate(optionsdocker);