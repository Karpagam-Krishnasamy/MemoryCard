import GameManager from '../services/GameManager';

const openCard = (context) => ({
	slots: GameManager.openCard(context),
});

const checkForMatch = (context) => ({
	movesCount: GameManager.updateMovesCount(context),
	slots: GameManager.checkForMatch(context),
});

const actions = {
	openCard,
	checkForMatch,
};

export default actions;
