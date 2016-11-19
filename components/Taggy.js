import React from 'react';
//import Toateorone from './Toateorone.js';
var tagArray;

class Taggy extends React.Component {
  constructor() {
    super();
	this.state = {
		value: ""
	}
  }
 
  getOptions()
  {
	var cod = new Array;
	//cod.push(<option key={key++} value="Nimeni">Nimeni</option>)
	//cod.push(<option key={key++} selected disabled value></option>)
	
	for(var i=0; i<tagArray.length; ++i) 
		cod.push(
			<option key={i} value={tagArray[i]}>{tagArray[i]}</option>
			);
	
	return cod;
  }
  
  handlerClick(event)
  {
	this.setState({value: event.target.value})
  }

  render() {
    return (
      <div>
	    {initTagArray()}
			<select className="inputz">
				{this.getOptions()}
			</select>
	  </div>
    );
  }
}
 
function initTagArray()
{
	tagArray=["Meteo","Taxe","Profesori"];
}

export default Taggy
