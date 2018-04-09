#!/usr/bin/env node
var prompt = require("prompt");
const generateFile = require("./scripts/generateFile");

prompt.get(["template", "file"], (err, res) => {
  generateFile(res);
});
