import { map } from '@laufire/utils/collection';
import React from 'react';
import Slot from './Slot';

const Slots = (context) => {
	const { state: { slots }} = context;

	return <div>
		{map(slots, (slot) =>
			<Slot { ...{ ...context, data: slot } }/>)}
	</div>;
};

export default Slots;
