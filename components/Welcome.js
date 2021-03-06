import React from 'react';
import { hashHistory } from 'react-router';

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "PIN"
    }
  }
  handleInputChange(event) {
    this.setState({value: event.target.value})
  }
  handleInputClick() {
    this.setState({value: ""})
  }
  buttonClick() {
    this.state.value == "5601" ? hashHistory.push('/Page2') : alert("PIN incorect");
  }
  render() {
    return (
      <div>
        <p className="text">Introduceti codul PIN</p>
        <div className="centeredtext">
          <input type="text"
		   className="inputPIN"
           value={this.state.value}
           onClick={() => this.handleInputClick()}
           onChange={(event) => this.handleInputChange(event)} />
          <br />
          <button className="button" onClick={() => this.buttonClick()}>Intra in cont</button>
        </div>
      </div>
    )
  }
}

export default Welcome
