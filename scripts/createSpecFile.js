const fs = require('fs');

function createSpecFile({component, path, templatePath}) {
	const template = require(templatePath);
	const data = template({component, path});
	const file = `./components/${component}.spec.js`;

	fs.appendFile(file, data, err => {
		if (err) throw err;
		console.log(`${component} was added to ${path}`);
	});
};

module.exports = function generateFiles(directory, templatePath) {

	const files = fs.readdirSync(directory);
	const components = files.map(file => file.split('.')).map(file => file[0]);
	const paths = components.map(component => `./${component}`);
	
	components.forEach((component, i) => {
		createSpecFile({component: components[i], path: paths[i], templatePath})
	});
};
