import GameManager from '../services/GameManager';

const getSlots = (context) => ({
	slots: GameManager.generateSlots(context),
});

const openCard = (context) => ({
	slots: GameManager.openCard(context),
});

const updateStatus = (context) => ({
	slots: GameManager.updateStatus(context),
	movesCount: GameManager.updateMoves(context),
});

const checkGameStatus = (context) => ({
	hasGameCompleted: GameManager.hasGameCompleted(context),
});

const actions = {
	getSlots,
	openCard,
	updateStatus,
	checkGameStatus,
};

export default actions;
