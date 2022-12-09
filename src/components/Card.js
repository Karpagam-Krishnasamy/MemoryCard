import React from 'react';

const cardClickHandler = ({ actions }) => {
	actions.openCard();
	actions.checkForMatch();
};

const Card = (context) =>
	<div
		className="card"
		onClick={ () => cardClickHandler(context) }
	/>;

export default Card;
