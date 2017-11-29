const React = require('react');


class Search extends React.Component{

	constructor(props){
		super(props);
		this.state = { value: props.value };
		this.changeVal = this.changeVal.bind(this);
	}

	changeVal(){
		// console.log(document.getElementById('input_search').value);

		this.setState({
			value: document.getElementById('input_search').value
		});
		console.log(this.state);
	}



	render(){
		return <input id="input_search" type="text" value={this.state.value} onChange={this.changeVal} />
	}
}

module.exports = Search;
