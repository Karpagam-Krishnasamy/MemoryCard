import { React } from 'react';
import './App.scss';
import Board from './components/Board';

const App = (context) =>
	<div className="App" role="application">
		<Board {...context} />
	</div>;

export default App;
