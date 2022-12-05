import generateSlots from '../services/generateSlots';

const getSlots = (context) => ({
	slots: generateSlots(context),
});

const actions = {
	getSlots,
};

export default actions;
