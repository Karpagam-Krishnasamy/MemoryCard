import { map, range } from '@laufire/utils/collection';

const shapeCount = 16;
const rowCount = Math.sqrt(shapeCount);
const space = 100;
const top = 450;
const left = 500;

const generateSlots = () => map(range(1, shapeCount + 1), (number) => ({
	id: number,
	style: {
		top: `${ top + (space * Math.ceil(number / rowCount)) }px`,
		left: `${ left + (space * (number % rowCount)) }px`,
	},
	card: {},
}));

export default generateSlots;
