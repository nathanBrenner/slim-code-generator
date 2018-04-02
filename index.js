#!/usr/bin/env node
var prompt = require("prompt");
var generateFiles = require("./scripts/generateFiles");

prompt.get(["directory"], (err, { directory }) => {
	/**
	 * @param directory: string;
	 * 		This should be the path to the directory you want files to be generated on.
	 * 		This directory path is relative to where you are when you run the 'generator' cli
	 * 
	 * @param template: string;
	 * 		This should be the path to the template file
	 * 		This path should be absolute to the application
	 * 		You can use this modules provided templates or create your own
	 * 
	 * todo: switch from prompt to something with command line args with flag
	 * Switched this to take template directly
	 */

	const template = '../templates/react-spec-template';

  console.log(
    `Generating boilerplate code in ${directory} directory with the ${template} template.`
  );

  generateFiles(directory, template);
});
