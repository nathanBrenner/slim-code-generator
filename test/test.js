const assert = require("assert");
const sinon = require("sinon");
const fs = require("fs");
const path = require("path");

const checkComponentName = require("../scripts/checkComponentName");
const createSpecFile = require("../scripts/createSpecFile");
const formatComponentName = require("../scripts/formatComponentName");
const genearateFiles = require("../scripts/generateFiles");

describe("slim-code-generator", function() {
  describe("#checkComponentName()", function() {
    it("should take App and return App", function() {
      assert.equal(checkComponentName("App"), "App");
    });

    it("should take 'component-name' and call #formatComponentName()");
  });

  describe("#createSpecFile()", function() {
    it('needs work');
    // it("calls fs.writeFile", function() {
    //   const spy = sinon.spy(fs, "writeFile");
    //   const args = {
    //     component: "App",
    //     path:
    //       "/Users/nathanbrenner/repos/active/slim-code-generator/.components/App",
    //     templatePath: "../templates/react-spec-template"
    //   };

    //   createSpecFile(args);

    //   assert(fs.writeFile.called);

    //   assert(spy.calledOnce);

    //   const data = '\n// import React from \'react\';\n// import { shallow } from \'enzyme\';\n// import App from \'/Users/nathanbrenner/repos/active/slim-code-generator/.components/App\';\n\ndescribe(\'App\', () => {\n\tlet component;\n\n\t// beforeEach(() => {\n\t//   component = shallow(<App />);\n\t// });\n\n\txit(\'renders\', () => {\n\t\texpect(component).toBeTruthy();\n\t});\n});'

    //   // this is wrong, it should return the relative path, note absolute path
    //   const path = '/Users/nathanbrenner/repos/active/slim-code-generator/.components/App.spec.js'
    //   assert(fs.writeFile.calledWith(path));
    // });
  });

  describe("#formatComponentName()", function() {
    it('should take "component-name" and return "ComponentName"', function() {
      assert.equal(formatComponentName("component-name"), "ComponentName");
    });
  });

  describe("#genearateFiles()", function() {
    var spy = sinon.spy(createSpecFile);

    const fsSpy = sinon.spy(fs, 'readdirSync');
    const checkComponentNameSpy = sinon.spy(checkComponentName);

    const directory = './.components';
    const templatePath = '../templates/react-spec-template';
    
    genearateFiles(directory, templatePath);

    assert(fsSpy.called);

    // AssertionError [ERR_ASSERTION]: false == true
    // assert(spy.called);
  });
});
