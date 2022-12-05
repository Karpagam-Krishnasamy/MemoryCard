import React from 'react';
import Moves from './Moves';
import Slots from './Slots';

const Board = (context) => <div>
	<Slots { ...context }/>
	<Moves { ...context }/>
</div>;

export default Board;
