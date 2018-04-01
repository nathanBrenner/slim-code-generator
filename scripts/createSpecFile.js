const fs = require('fs');
const path = require('path');

function createSpecFile({component, path, templatePath}) {

	const template = require(templatePath);
	const data = template({component, path});
	// const file = `${path}/${component}.spec.js`;
	const file = `${path}.spec.js`;
	console.log({file});

	fs.writeFile(file, data, err => {
		if (err) throw err;
		console.log(`${component} was added to ${path}`);
	});
};

module.exports = function generateFiles(directory, templatePath) {

	const files = fs.readdirSync(directory);

	const components = files.map(file => file.split('.')).map(file => file[0]);

	const appDirectory = fs.realpathSync(process.cwd());
	const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
	
	const paths = components.map(component => `${resolveApp(directory)}/${component}`);

	console.log('generateFiles', {components, paths})
	components.forEach((component, i) => {
		createSpecFile({component: components[i], path: paths[i], templatePath})
	});
};
