# Slim-Code-Generator

Small script to automate generating boilerplate code.

## How?
This is a cli tool. To use, just run `generator` in your terminal and follow the prompts.

All files created are created in the directory where the generator cli is called.

For the prompts:

Template: Provide "jest", "presentation", "container". Or you can provide the shorthand: 'j' for jest, 'p' for presentational, 'c' for container. Anything else is invalid and no code will be generated.

File: The name of the file as you want it to appear in your directory without any prefix.

## Examples:

### Jest
Template: jest
File: foo

output: `foo.spec.js was added`
```
// import React from 'react';
// import { shallow } from 'enzyme';
// import { Foo } from './foo.js';

describe('Foo', () => {
  let component;

  beforeEach(() => {
    // component = shallow(<Foo />);
  });

  xit('renders', () => {
    expect(component).toBeTruthy();
  });
});
```

Note: You'll need to have Jest and Enzyme configured in your application for this test to run.
Also, you should recognize that this test will be marked pending until you modify the generated code. This is good because sometimes you need to create unit tests on code that already exists. This test wont break until you're ready to check it.

### Presentation
Template: presentation
file: foo

output: `foo.js was added`

```
import React from 'react';

const Foo = (props) => (

);

export default Foo;

```

### Container
Template: container
file: foo

output: `foo.js was added`

```
import React, { Component } from 'react';

class Foo {
	render() {
		return (

		);
	}
}

export default Foo;

```

## Roadmap
- More templates: Create github issues with templates that you want to use. This tool can be used to create any file based on any template. Additional arguments could be added in promps based on the template prompt.