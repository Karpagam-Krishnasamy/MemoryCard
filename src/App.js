import { React, useEffect } from 'react';
import './App.scss';
import Board from './components/Board';

const App = (context) => {
	const { actions } = context;

	useEffect(() => actions.generateSlots(context), []);

	return <div className="App" role="application">
		<Board { ...context }/>
	</div>;
};

export default App;
