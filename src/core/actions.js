import GameManager from '../services/GameManager';

const generateSlots = (context) => ({
	slots: GameManager.generateSlots(context),
});

const openCard = (context) => ({
	slots: GameManager.openCard(context),
});

const checkForMatch = (context) => ({
	movesCount: GameManager.updateMovesCount(context),
	slots: GameManager.checkForMatch(context),
});

const actions = {
	generateSlots,
	openCard,
	checkForMatch,
};

export default actions;
