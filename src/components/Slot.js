import React from 'react';
import Card from './Card';

const Slot = (context) => {
	const { data: { card: { status }}} = context;

	return <div className="slot">
		{status !== 'matched' && <Card { ...context }/>}
	</div>;
};

export default Slot;
