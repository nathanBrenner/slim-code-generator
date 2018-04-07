module.exports = function Jest(file) {
  const component = file ? `${file[0].toUpperCase()}${file.slice(1)}` : '';
  const relativePath = `./${file}.js`;

  return `// import React from 'react';
// import { shallow } from 'enzyme';
// import { ${component} } from '${relativePath}';

describe('${component}', () => {
  let component;

  beforeEach(() => {
    // component = shallow(<${component} />);
  });

  xit('renders', () => {
    expect(component).toBeTruthy();
  });
});
`
};

