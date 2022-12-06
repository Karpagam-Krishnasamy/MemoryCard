import React from 'react';

const MovesCount = ({ state: { moves: movesCount }}) => <div>
	Number Of Moves: {movesCount}
</div>;

export default MovesCount;
