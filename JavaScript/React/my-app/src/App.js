import MyComponent from './myComponent';
import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  onClickButton() {
    alert("I am clicked")
  }

  render() {
    return (
      <div>
        <MyComponent title="React" onButtonClick={this.onClickButton}/>
      </div>
    );
  }
}


export default App;
