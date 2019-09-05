const report = [
  '--format json:./support/report/cucumber_report.json',
  '--format ./node_modules/cucumber-pretty',
  '--require-module ts-node/register', 
  '--require ./steps/*.ts',
  '--require ./support/hooks/*.ts',
  '--require ./support/world/*.ts',
  '--require ./support/models/*.ts'
].join(' ');

const noreport = [
  '--format ./node_modules/cucumber-pretty',
  '--require-module ts-node/register', 
  '--require ./steps/*.ts',
  '--require ./support/hooks/*.ts',
  '--require ./support/world/*.ts',
  '--require ./support/models/*.ts'
].join(' ');

module.exports = {
  report: report,
  noreport: noreport,
};
