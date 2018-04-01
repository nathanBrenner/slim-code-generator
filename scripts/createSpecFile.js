const fs = require('fs');

function createSpecFile({component, path, templatePath}) {
	const appDirectory = fs.realpathSync(process.cwd());

	const template = require(templatePath);
	const data = template({component, path});
	const file = `${path}/${component}.spec.js`;
	console.log({appDirectory, file})
	fs.writeFile(file, data, err => {
		if (err) throw err;
		console.log(`${component} was added to ${path}`);
	});
};

module.exports = function generateFiles(directory, templatePath) {

	const files = fs.readdirSync(directory);
	const components = files.map(file => file.split('.')).map(file => file[0]);
	const paths = components.map(component => `./${component}`);
	console.log('generateFiles', {components, path})
	components.forEach((component, i) => {
		createSpecFile({component: components[i], path: paths[i], templatePath})
	});
};
