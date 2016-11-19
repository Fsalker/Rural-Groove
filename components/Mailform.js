import React from 'react';

class Mailform extends React.Component {
	constructor()
	{
		super(); 
		this.state={
			value: "Introduceti textul aici"
		}
	}
	
	handleClick()
	{
		this.setState({value:""});
	}
	
	handleChange(event)
	{
		this.setState({value: event.target.value}) 
	}
	
	render()
	{
		return(
			<div>
			  <textarea rows="10" cols="100" className="inputz biggerText" 
				value={this.state.value}
				onClick={() => this.handleClick()} 
				onChange={(event) => this.handleChange(event)} />
		  </div>
		)
	}
}
export default Mailform
