const fs = require("fs");

module.exports = function createSpecFile({ component, path, templatePath }) {
  const template = require(templatePath);
  const data = template({ component, path });
  const file = `${path}.spec.js`;

  fs.writeFile(file, data, err => {
    if (err) throw err;
    console.log(`${file} was added`);
  });
}
