import { map, range, shuffle } from '@laufire/utils/collection';

const shapeCount = 12;
const two = 2;

const cards = ['A', 'B', 'C', 'D', 'E', 'F', 'A', 'B', 'C', 'D', 'E', 'F'];

const shuffledCards = shuffle(cards);

const checkIdMatch = ({ slot, data }) => slot.id === data.id;

const getOpenedCards = (slots) =>
	slots.filter(({ card: { status }}) => status === 'open');

const checkMatch = (openedCards) =>
	openedCards[0]?.card.value === openedCards[1]?.card.value;

const changeStatus = ({ slots, isCardMatched }) => slots.map((slot) => ({
	...slot,
	...slot.card.status === 'open'
		? {
			card:
			{
				...slot.card,
				status: isCardMatched ? 'matched' : 'close',
			},
		}
		: {},
}));

const openSelectedCard = ({ slots, data }) => slots.map((slot) =>
	({
		...slot,
		...checkIdMatch({ slot, data })
			? { card: { ...slot.card, status: 'open' }}
			: {},
	}));

const GameManager = {
	generateSlots: () => map(range(1, shapeCount + 1), (number, index) => ({
		id: number,
		card: {
			status: 'close',
			value: shuffledCards[index],
		},
	})),

	openCard: ({ state: { slots }, data: { data }}) => {
		const openedCardsCount = getOpenedCards(slots).length;

		return openedCardsCount < two
			? openSelectedCard({ slots, data })
			: [...slots];
	},

	checkForMatch: ({ state: { slots }}) => {
		const openedCards = getOpenedCards(slots);
		const isCardMatched = checkMatch(openedCards);

		return openedCards.length === two
			? changeStatus({ slots, isCardMatched })
			: [...slots];
	},

	updateMovesCount: ({ state: { slots, movesCount }}) => {
		const openedCardsCount = getOpenedCards(slots).length;

		return openedCardsCount === two ? movesCount + 1 : movesCount;
	},

};

export default GameManager;
