import logo from './logo.svg';
import './App.css';
import Overview from './overview';
import React,{Component}  from 'react';




class App extends Component{
  constructor(props){
    super(props)
    this.state={
      arr:["Wow  so good","Not so good"],
      newValue:""
    }
    // this.btnClick = this.btnClick.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }

  handleSubmit(e){
    alert(this.state.arr)
    var arr1=this.state.arr;
    arr1.push(this.state.newValue)
    this.setState({arr:arr1})
  }

  handleChange(event){
    this.setState({newValue:event.target.value})
  }

 

  render(){
    return(
      <div>
        <form>
        <label>
          Name:
          <input type="text" value={this.state.newValue} onChange={this.handleChange} />
        </label>
        <input type="button" value="Submit" onClick={this.handleSubmit} />
        </form>
        <Overview message={this.state.arr}></Overview>
      </div>
    )
  }
} 
export default App;
