var prompt = require('prompt');
var generateFiles = require('./scripts/createSpecFile');

prompt.get(['directory', 'template'], function (err, result) {
	console.log(`Generating boilerplate code in ${result.directory} directory with the ${result.template} template.`);
	generateFiles(result.directory, result.template);
});
// ./components
// templates/react-spec-template