import { map, range } from '@laufire/utils/collection';

const shapeCount = 20;

const GameManager = {
	generateSlots: () => map(range(1, shapeCount + 1), (number) => ({
		id: number,
		card: {},
	})),

	hasGameCompleted: () => {},
};

export default GameManager;
