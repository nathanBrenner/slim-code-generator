module.exports = function presentational(file) {
	const component = `${file[0].toUpperCase()}${file.slice(1)}`;
  return `import React from 'react';

const ${component} = (props) => (

);

export default ${component};
`;
};
