import {Given, When, Then } from "cucumber";
import { expect } from "chai";

Given("I have a greeting {string}", function (greeting: string) {
  this.greeting = greeting;
});

When("I input the greeting in a function", function () {
  return this.greeting
});

Then("I expect to have an output of {string}", function (expectedGreeting: string) {
  expect(this.greeting).to.equal(expectedGreeting);
})
