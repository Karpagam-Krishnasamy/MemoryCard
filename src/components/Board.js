import React from 'react';
import GameOverScreen from './GameOverScreen';
import MovesCount from './MovesCount';
import Slots from './Slots';

const Board = (context) => {
	const { state: { isGameCompleted }} = context;

	return <div>
		{isGameCompleted
			? <GameOverScreen/>
			: <Slots { ...context }/>}
		<MovesCount { ...context }/>
	</div>;
};

export default Board;
