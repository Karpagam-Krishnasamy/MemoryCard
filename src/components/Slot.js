import React from 'react';
import Card from './Card';

const Slot = (context) =>
	<div className="slot">H
		<Card { ...context }/>
	</div>;

export default Slot;
