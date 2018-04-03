const fs = require("fs");
const path = require("path");
const createSpecFile = require('./createSpecFile');

module.exports = function generateFiles(directory, templatePath) {
  const files = fs.readdirSync(directory);

  const components = files
    .filter(file => !(/\.css/).test(file))
    .filter(file => !(/\.spec\.js/).test(file))
    .map(file => file.split("."))
    .map(file => file[0])

	const appDirectory = fs.realpathSync(process.cwd());
	const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

  const paths = components.map(
    component => `${resolveApp(directory)}/${component}`
  );

  components.forEach((component, i) => {
    createSpecFile({ component: components[i], path: paths[i], templatePath, directory });
  });
};
