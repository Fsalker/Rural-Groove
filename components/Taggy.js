import React from 'react';
//import Toateorone from './Toateorone.js';
var tagArray;

class Taggy extends React.Component {
	constructor(props) 
	{
		super(props);
		this.state = {
			value: ""
		}
	}
 
	getOptions()
	{
		if(typeof(this.props.People.topics) == "undefined") return "";
		var cod = new Array;
		//cod.push(<option key={key++} value="Nimeni">Nimeni</option>)
		//cod.push(<option key={key++} selected disabled value></option>)
		console.log("Topics = "+this.props.People.topics);
		for(var i=0; i<this.props.People.topics.length; ++i) 
		{
			cod.push(
				<option key={i} value={this.props.People.topics[i]}>{this.props.People.topics[i]}</option>
				);
		}
		return cod;
	}

	render() {
		return (
			<div>
				{console.log("Rendering Taggy. People = "+this.props.People)}
				<select className="inputz">
					{this.getOptions()}
				</select>
			</div>
		);
	}
	
}

export default Taggy
