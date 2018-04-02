const fs = require("fs");
const path = require("path");
const createSpecFile = require('./createSpecFile');
const checkComponentName = require("./checkComponentName");

module.exports = function generateFiles(directory, templatePath) {
  const files = fs.readdirSync(directory);

  const components = files
    .map(file => file.split("."))
    .map(file => file[0])
		.map(checkComponentName);

	const appDirectory = fs.realpathSync(process.cwd());
	const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

  const paths = components.map(
    component => `${resolveApp(directory)}/${component}`
  );

  components.forEach((component, i) => {
    createSpecFile({ component: components[i], path: paths[i], templatePath, directory });
  });
};
