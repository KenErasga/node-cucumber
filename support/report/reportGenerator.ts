const reporter = require('cucumber-html-reporter');
const date: Date = new Date();
const options = {
    theme: 'bootstrap',
    jsonFile: './support/report/cucumber_report.json',
    output: './support/report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: false,
    metadata: {
        "App Version": "0.0.1",
        "Date": `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
        "Time": `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
};
reporter.generate(options);