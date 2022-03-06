import { Component } from "react";
class Work extends Component{
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
                <label htmlFor="title">Title: </label>
                <input type="textarea" name="title" index={this.props.index} onChange={this.handleChange}></input>
                <br/>
                <label htmlFor="title">Experience: </label>
                <input type="textarea"  name="description" index={this.props.index} onChange={this.handleChange}></input>
                <button onClick={()=>{
                    this.props.deleteExp(this.props.index)}}
                >Delete</button>
            </div>
        )
    }
}

export default Work