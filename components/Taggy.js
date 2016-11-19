import React from 'react';
//import FormGroup from 'react-bootstrap-form';

//<ControlLabel>Select</ControlLabel>

var tagArray=["Meteo","Taxe","Profesori"];

const Taggy = (props) => (
  <div>
    <h2>text = {props.tagType}</h2>
	<select>
	  <option value="volvo">Volvo</option>
	  <option value="saab">Saab</option>
	  <option value="mercedes">Mercedes</option>
	  <option value="audi">Audi</option>
	</select>
  </div>
)

function tags_to_html()
{
	var cod = "";
	for(var i=0; i<tagArray.length(); ++i))
}

/*class Taggy	 extends React.Component
{
  constructor()
  {
    super();
    this.state={
      TAGtype: "noType"
  }
}*/
 

export default Taggy
