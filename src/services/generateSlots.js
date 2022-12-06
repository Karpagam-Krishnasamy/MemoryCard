import { map, range } from '@laufire/utils/collection';

const shapeCount = 20;

const generateSlots = () => map(range(1, shapeCount + 1), (number) => ({
	id: number,
	card: {},
}));

export default generateSlots;
