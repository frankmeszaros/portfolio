import React, { useState } from 'react';

import Box from './Box';

const Selector = ({ items }) => {
	const [selected, setSelected] = useState(null);

	return (
		<Box>
			{(items || []).map((item) => (
				<Box id={item.id}>{item.name}</Box>
			))}
		</Box>
	);
};

export default Selector;
