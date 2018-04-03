# Slim-Code-Generator

Small script to automate generating boilerplate code.

## Why?
I keep finding myself in large codebases that lack unit testing. I would start with creating a test file for every file that had code that I wanted to test, and they would all get generally the same code: some imports and a smoke test. This would take a lot of time, and was really boring. This package is currently used to generate that boilerplate based on the existing template.

If you have a directory of React components that don't have any test files for those components, this cli can be used to generate the boilerplate code for test files for each component in the directory.

## How?
This is a cli tool. To use, just run `generator` in your terminal and follow the prompts.

For the prompts:
Directory: The directory that you want to generate the files on. Every file in that directory will get a file with the same name and `.spec` appended between the name of the file and the extension. This should be relative to the root of your application. For example: `./src/components`.

Template: Currently, this module only supports the single `react-spec-template` that can be found in the `./templates` directory.

The script will read all the files of the directory, and create a file that contains the template code for every file in that directory.  For example, if your directory has a list of components, like `['App.js', 'Body.js', 'Home.js']`, the generator will add files for `['App.spec.js', 'Body.spec.js', 'Home.spec.js']`. The dynamic code in the spec files is based on the name of the component based on the file name.

If the spec files already exist, they will be rewritten based on the template.

The generated code will be commented out, so it wont break any existing linters, and the code wont be tested until you're ready to comment the code in.

## Current Support
You can generate test files for React components on a React app that is configured with Jest and Enzyme. If you're using Create React App, there's setup required for Jest, but you'll need to setup Enzyme. Look at the Create-React-App documentation for this.

## Roadmap
- There's some mocha tests. More to come in the future.

- More templates. I imagine I'll create another template for the other types of testing files in a react app, since that's what I'm doing for my day job, so a template for spec file for a reducer and actions.