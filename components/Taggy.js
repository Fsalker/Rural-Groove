import React from 'react';
//import Toateorone from './Toateorone.js';
var tagArray;

class Taggy extends React.Component {
  constructor() {
	  super();
	  //console.log('QQQQWWEW',this.props.hdlDB);
	this.state = {
		value: ""
		
	}
  }
 
  getOptions()
  {
	  return "";
	  //console.log(this.props);
	  //console.log(props.PplArray);
	  
	var cod = new Array;
	//cod.push(<option key={key++} value="Nimeni">Nimeni</option>)
	//cod.push(<option key={key++} selected disabled value></option>)
	
	for(var i=0; i<this.props.PplArray.length; ++i) 
		cod.push(
			<option key={i} value={this.props.PplArray[i]}>{this.props.PplArray[i]}</option>
			);
	
	return cod;
  }
  
  handlerClick(event)
  {
	this.setState({value: event.target.value})
  }
  
  test()
  {
	  console.log(this.props.PplArray);
  }

  render() {
    return (
      <div>
		{this.test()}
		<select className="inputz">
			{this.getOptions()}
		</select>
	  </div>
    );
  }
}

export default Taggy
