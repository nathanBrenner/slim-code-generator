module.exports = function formatComponentName(name) {
  return name
    .split("-")
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join("");
};
