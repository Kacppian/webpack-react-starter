const React = require('react');
const ReactDOM = require('react-dom');
import Search from "./js/Searchbar";
import './sass/Searchbar.sass';

ReactDOM.render(
	<div>
		<h1>Hello, React!</h1>
		<Search value='Default'/>
	</div>,
	document.getElementById('root')	
);
