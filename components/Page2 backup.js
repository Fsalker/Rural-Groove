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
			PplArray: "",
			version: 0,
			snagaDB: ""
			
		}
	}
	
	componentWillMount()
	{
		console.log("Hi0");
		this.setState({PplArray: this.getPplArray()});
	}
	
	getPplArray()
	{
		console.log("Hi1");
		//fetch(url)
		
		var processStatus = function (response) {
			// status "0" to handle local files fetching (e.g. Cordova/Phonegap etc.)
			if (response.status === 200 || response.status === 0) {
				return Promise.resolve(response)
			} else {
			return Promise.reject(new Error(response.statusText))
			}
		};
		
		fetch('../database/db.txt').then(processStatus).then().catch();
		
		var parseJson = function (response) {
			return response.json();
		};

		var dbObj;
		
		//fetch('../database/db.txt').then(parseJson).then(function (data) {console.log('WAITING FOR PROMISE'); console.log(data); dbObj = data;});
		var idk = (this) => this.displaySubscribers(this);
		fetch('../database/db.txt').then(parseJson).then(function (data) {idk(data)});
		
		//console.log('XXXX');
		//console.log('YYYY ' + dbObj);
		
		//return cod.parseJson;
	}
	
	displaySubscribers(data){
		console.log('RRR ', data);
		this.setState({snagaDB: data});
		//this.setState({value: event.target.value})
	
	}
	
	test()
	{
		//console.log(this.state.PplArray);
	}
	
	render()
	{
		return(
		  <div>
			<h1 className="text">Panou de notificari</h1>
			<br/>
			
			<div className="centeredtext topSmallerVh">
				<h2>Selectati categoria</h2>
				<Taggy PplArray={this.state.PplArray} hdlDB={this.state.snagaDB}/>
				{this.test()}
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
