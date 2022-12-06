import React from 'react';
import GameOverScreen from './GameOverScreen';
import Moves from './Moves';
import Slots from './Slots';

const Board = (context) => <div>
	<Slots { ...context }/>
	<GameOverScreen/>
	<Moves { ...context }/>
</div>;

export default Board;
