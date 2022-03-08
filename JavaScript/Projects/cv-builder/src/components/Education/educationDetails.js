import { Component } from "react";
class Education extends Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.props.edit(event)
    }

    render(){
        return(
            <div>
                <label htmlFor="course">Course: </label>
                <input type="textarea" name="course" index={this.props.index} onChange={this.handleChange}></input>
                <br/>
                <label htmlFor="description">Description: </label>
                <input type="textarea"  name="description" index={this.props.index} onChange={this.handleChange}></input>
                <button onClick={()=>{
                    this.props.delete(this.props.index)}}
                >Delete</button>
            </div>
        )
    }
}

export default Education