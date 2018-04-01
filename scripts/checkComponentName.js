module.exports = function checkComponentName(name) {
  return name.includes("-") ? formatComponentName(name) : name;
}

function formatComponentName(name) {
  return name
    .split("-")
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join("");
}
