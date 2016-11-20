import React from 'react';

class Peoplelist extends React.Component {
	constructor(props) 
	{
		super(props);
	}
 
	getCheckboxes()
	{
		if(typeof(this.props.People.citizens) == "undefined") return "";
		var cod = new Array;
		//var x = "info general";
		var x = "stare meteo";
		//cod.push(<option key={key++} value="Nimeni">Nimeni</option>)
		//cod.push(<option key={key++} selected disabled value></option>)
		
		//console.log("Citizens = "+this.props.People.citizens);
		for(var i=0; i<this.props.People.citizens.length; ++i) 
		{
			//console.log("Citizen "+i+" likes = "+this.props.People.citizens[i].subscriberTopics.find(function(word){return word==x}));
			
			if(this.props.People.citizens[i].subscriberTopics.find(function(word){return word==x}) != "undefined")
			cod.push(
				<div className="inputPEOPLELIST">
					<input type="checkbox" key={"key"+this.props.People.citizens[i].phoneNumbers} id={"id"+this.props.People.citizens[i].phoneNumber} defaultChecked/>
					{this.props.People.citizens[i].firstName+" "+this.props.People.citizens[i].lastName}
					<br/>
				</div>
				);
		}
		return cod;
	}

	render() {
		return (
			<div>
				{this.getCheckboxes()}
			</div>
		);
	}
	
}

export default Peoplelist
