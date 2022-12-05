import React from 'react';
import Card from './Card';

const Slot = (context) => <div>
	<Card { ...context }/>
</div>;

export default Slot;
