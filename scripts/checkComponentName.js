const formatComponentName = require('./formatComponentName');

module.exports = function checkComponentName(name) {
  return name.includes("-") ? formatComponentName(name) : name;
}
