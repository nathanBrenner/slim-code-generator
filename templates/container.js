module.exports = function container(file) {
	const component = `${file[0].toUpperCase()}${file.slice(1)}`;
  return `import React, { Component } from 'react';

class ${component} {
	render() {
		return (

		);
	}
}

export default ${component};
`;
};
