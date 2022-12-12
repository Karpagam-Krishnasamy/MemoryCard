/* eslint-disable no-magic-numbers */
import React from 'react';

const handleCardClick = ({ actions, config: { timeDelay }, ...context }) => {
	actions.openCard(context);
	setTimeout(() => actions.checkForMatch(context), timeDelay);
};

const Card = (context) => {
	const { data: { card: { status, value }}} = context;

	return (
		<div
			className="card"
			onClick={ () => handleCardClick(context) }
		>{status === 'open' && value}
		</div>
	);
};

export default Card;
