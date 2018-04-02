module.exports = function ComponentSpecTemplate({ component, path, relativePath }) {
	return `
// import React from 'react';
// import { shallow } from 'enzyme';
// import ${component} from '${relativePath}';

describe('${component}', () => {
	let component;

	// beforeEach(() => {
	//   component = shallow(<${component} />);
	// });

	xit('renders', () => {
		expect(component).toBeTruthy();
	});
});`
};

