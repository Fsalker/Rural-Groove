import React from 'react';
var peopleArray;
var key = 0;

const Toateorone = () => (
  <div>
	{initPeopleArray()}
	<h2>Selecteaza oamenii</h2>
	<select>
	{people_to_html()}
	</select>
  </div>
)

function people_to_html()
{
	var cod = new Array;
	cod.push(<option key={key++} value="Toti">Toti</option>)
	for(var i=0; i<peopleArray.length; ++i) cod.push(<option key={key++} value={peopleArray[i]}>{peopleArray[i]}</option>);
	
	return cod;
}

function initPeopleArray()
{
	peopleArray=["Ion","Gigel","Popescu","Lefterescu"];
}
 

export default Toateorone
