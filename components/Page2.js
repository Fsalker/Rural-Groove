import React from 'react';
//import Page2 from './components/Page2.js';
import Mailform from './Mailform.js';
import Taggy from './Taggy.js';
import Peoplelist from './Peoplelist.js';
	

class Page2 extends React.Component
{
	constructor()
	{
		super();
		
		this.state = {
			People: ""
		}
	}
	
	componentWillMount()
	{
		console.log("Mounting Page2 [Before render]");
		this.queryPeople();
	}
	
	queryPeople()
	{
		console.log("Querying 'People' in Page2");
		var xhttp = new XMLHttpRequest;
		xhttp.onreadystatechange = function()
		{
			if(xhttp.readyState == 4   &&   xhttp.status == 200)
			{
				//console.log("People loaded! Result = "+JSON.parse(xhttp.responseText));
				this.setState({People: JSON.parse(xhttp.responseText)})
			}
		}.bind(this);
		xhttp.open("GET", "../database/db.txt", true); // FIXME
		xhttp.send();
	}
	
	render()
	{
		return(
		  <div>
			<h1 className="text">Panou de notificari</h1>
			<br/>
			
			<div className="centeredtext topSmallerVh">
				{console.log("Rendering Page 2. People = "+this.state.People)}
				<h2>Selectati categoria</h2>
				<Taggy People={this.state.People}/>
				<br/>
				
				<h2>Formulati mesajul</h2>
				<Mailform/>
				<br/>
				
				<h2>Selectati persoanele ce vor primi mesajul</h2>
				<Peoplelist/>
				<br/>
				
				<button className="button" onClick={() => sendMessage()}>Trimite mesajul</button>
			</div>	
		  </div>
		 );
	}
		  
}

function sendMessage()
{
	console.log("Hello!");
}

export default Page2
