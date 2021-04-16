import React, {Component} from 'react'
import {render} from 'react-dom'
import Calculator from "awesome-react-calculator";
import "./style.css"

const heading = {
  marginLeft:"4rem",


}

class App extends Component {
  handleInput(input) {
    console.log(`${input.expression} is shown in the calculator, User clicked the ${input.key}`)
  }

  onResultChange(newResult) {
    console.log(newResult)
    console.log(`${newResult.expression} is validated as ${newResult.result} `)
  }
  render() {
    return <div className='calculator-demo' className="style">
      <h1 style={heading}>Simple Calculator</h1>
      <Calculator
        onNewInput={this.handleInput}
        onResultChange={this.onResultChange}/>
        <p className="footer">Made with 🧡 By Akshad Nayakwadi</p>
    </div>
  }
}
export default App;
