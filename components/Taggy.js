import React from 'react';
import Toateorone from './Toateorone.js';
var tagArray;
var key = 0;

const Taggy = (props) => (
  <div>
  {initTagArray()}
    <h2>text = {props.tagType}</h2>
	<select>
	{tags_to_html()}
	</select>
	<Toateorone/>
  </div>
)

function tags_to_html()
{
	var cod = new Array;
	cod.push(<option key={key++} value="---">---</option>)
	for(var i=0; i<tagArray.length; ++i) cod.push(<option key={key++} value={tagArray[i]}>{tagArray[i]}</option>);
	
	return cod;
}
 
function initTagArray()
{
	tagArray=["Meteo","Taxe","Profesori"];
}

export default Taggy
