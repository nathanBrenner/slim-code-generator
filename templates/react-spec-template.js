module.exports = function ComponentSpecTemplate({ component, path }) {
	return `
// import React from 'react';
// import { shallow } from 'enzyme';
// import ${component} from '${path}';

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

