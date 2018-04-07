const fs = require("fs");
const reactSpec = require("../templates/jest");
const presentational = require("../templates/presentational");
const container = require("../templates/container");

module.exports = function generateFile({ template, file }) {
  const templates = ["jest", "presentation", "container"];

  template = configTemplate(template.toLowerCase(), templates);

  const fileName = configFileName(template, file, templates);
	const data = file ? configData(template, file, templates) : '';
	
	checkFile(data, fileName, templates);

};

function writeFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) throw err;
    console.log(`${fileName} was added`);
  });
}

function configFileName(template, file, templates) {
  switch (template) {
    case templates[0]:
      return `${file}.spec.js`;
    case templates[1]:
    case templates[2]:
      return `${file}.js`;
    default:
      return "";
  }
}

function configData(template, file, templates) {
  switch (template) {
    case templates[0]:
      return reactSpec(file);
    case templates[1]:
      return presentational(file);
    case templates[2]:
      return container(file);
    default:
      return "";
  }
}

function configTemplate(template, templates) {
  switch (template) {
    case templates[0]:
    case templates[0].slice(0, 1):
      return templates[0];
    case templates[1]:
    case templates[1].slice(0, 1):
      return templates[1];
    case templates[2]:
    case templates[2].slice(0, 1):
      return templates[2];
    default:
      return "";
  }
}

function checkFile(data, fileName, templates) {
	if (data.length === 0) {
		console.error(`Invalid template, available templates are: ${templates}`);
  } else {
		writeFile(fileName, data);
	}
}