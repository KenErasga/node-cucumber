import { Before, After, BeforeAll, AfterAll } from 'cucumber'

BeforeAll(function () {
  console.log("BeforeAll function execution");
});

// Runs before the first step of each scenario.
Before(function () {
  console.log("Before function execution");
});

// Runs after the last step of each scenario, even when steps have failed, are undefined, pending or skipped.
After(function () {
  console.log("After function execution");
});

AfterAll(function () {
  console.log("AfterAll function execution");
});