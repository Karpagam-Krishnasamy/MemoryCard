import CardManager from '../services/CardManager';
import GameManager from '../services/GameManager';

const getSlots = (context) => ({
	slots: GameManager.generateSlots(context),
});

const openCard = (context) => ({
	slots: CardManager.openCard(context),
	openedItems: CardManager.getOpenedCards(context),
});

const updateStatus = (context) => ({
	slots: CardManager.updateStatus(context),
	openedItems: [],
});

const checkGameStatus = (context) => ({
	isGameCompleted: GameManager.hasGameCompleted(context),
});

const actions = {
	getSlots,
	openCard,
	updateStatus,
	checkGameStatus,
};

export default actions;
