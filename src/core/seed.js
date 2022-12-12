import GameManager from '../services/GameManager';
import context from './context';

const seed = {
	slots: GameManager.generateSlots(context),
	movesCount: 0,
};

export default seed;
