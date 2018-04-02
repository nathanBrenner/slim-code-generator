const fs = require("fs");

module.exports = function createSpecFile({ component, path, templatePath, directory }) {
  // tech debt: rename path param because it could be confused with node path module
  const template = require(templatePath);

  const file = `${path}.spec.js`;
  const relativePath = `./${component}.spec.js`;
  const data = template({ component, path, relativePath });
  
  fs.writeFile(file, data, err => {
    if (err) throw err;
    console.log(`${file} was added`);
  });
}
