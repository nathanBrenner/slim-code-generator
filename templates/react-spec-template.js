module.exports = function ComponentSpecTemplate({ component, path, relativePath }) {
  return `
/*
import React from 'react';
import { shallow } from 'enzyme';
import builder from 'src,components,builder/builder.spec.js';

describe('builder', () => {
  let component;

  beforeEach(() => {
    component = shallow(<builder />);
  });

  xit('renders', () => {
    expect(component).toBeTruthy();
  });
});
*/
  
`
};

