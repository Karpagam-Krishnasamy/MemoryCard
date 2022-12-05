import React from 'react';
import Card from './Card';

const Slot = ({ data: { style }}) => <div style={ style }>
	<Card/>
</div>;

export default Slot;
