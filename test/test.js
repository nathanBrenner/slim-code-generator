const assert = require("assert");

const checkComponentName = require("../scripts/checkComponentName");
const createSpecFile = require("../scripts/createSpecFile");
const formatComponentName = require("../scripts/formatComponentName");
const genearateFiles = require("../scripts/generateFiles");

describe("slim-code-generator", function() {
  describe("#checkComponentName()", function() {
    it("should take App and return App", function() {
      assert.equal(checkComponentName("App"), "App");
    });
  });

  describe("#createSpecFile()", function() {
    it("needs a test");
  });

  describe("#formatComponentName()", function() {
    it('should take "component-name" and return "ComponentName"', function() {
      assert.equal(formatComponentName("component-name"), "ComponentName");
    });
  });

  describe("#genearateFiles()", function() {
    it("needs a test");
  });
});
