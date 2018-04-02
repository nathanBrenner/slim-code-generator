#!/usr/bin/env node
var prompt = require("prompt");
var generateFiles = require("./scripts/generateFiles");

prompt.get(["directory", "template"], (err, { directory, template }) => {
	/**
	 * @param directory: string;
	 * 		This should be the path to the directory you want files to be generated on.
	 * 		This directory path is relative to where you are when you run the 'generator' cli
	 * 
	 * @param template: string;
	 * 		This should be the path to the template file
	 * 		This path should be absolute to the application
	 * 		You can use this modules provided templates or create your own
	 */

  console.log(
    `Generating boilerplate code in ${directory} directory with the ${template} template.`
  );

  generateFiles(directory, template);
});
