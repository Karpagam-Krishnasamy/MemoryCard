/* eslint-disable no-magic-numbers */
import React from 'react';

const handleCardClick = (context) => {
	context.actions.openCard(context);
	setTimeout(() => context.actions.checkForMatch(context), 3000);
};

const Card = (context) => {
	const { data: { card: { status, value }}} = context;

	return (
		<div
			className="card"
			onClick={ () => handleCardClick(context) }
		>{status === 'open' && value}
		</div>);
};

export default Card;
