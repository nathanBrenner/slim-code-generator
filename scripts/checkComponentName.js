const formatComponentName = require("./formatComponentName");

module.exports = function checkComponentName(name) {
  return name.includes("-")
    ? formatComponentName(name)
    : formatSingleComponentName(name);
};

function formatSingleComponentName(name) {
  return name.slice(0, 1).toUpperCase() + name.slice(1);
}
