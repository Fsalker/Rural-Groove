import React from 'react';
//import Page2 from './components/Page2.js';
import Mailform from './Mailform.js';
import Taggy from './Taggy.js';

const Page2 = () => (
  <div>
    <h1 className="text">Panou de notificari</h1>
	<br/>
	
	<div className="centeredtext topSmallerVh">
		<h2>Selectati categoria</h2>
		<Taggy/>
		<br/>
		
		<h2>Formulati mesajul</h2>
		<Mailform/>
		<br/>
		
		<button className="button" onClick={() => sendMessage()}>Trimite mesajul</button>
	</div>	
  </div>
)

function sendMessage()
{
	console.log("Hello!");
}

export default Page2
