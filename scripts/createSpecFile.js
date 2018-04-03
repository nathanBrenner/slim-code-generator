const fs = require("fs");
const checkComponentName = require("./checkComponentName");

module.exports = function createSpecFile({ component, path, templatePath, directory }) {
  // tech debt: rename path param because it could be confused with node path module
  const template = require(templatePath);

  const file = `${path}.spec.js`;
  const relativePath = `./${component}.js`;

  const data = template({ component: checkComponentName(component), relativePath });
  
  fs.writeFile(file, data, err => {
    if (err) throw err;
    console.log(`${file} was added`);
  });
}
