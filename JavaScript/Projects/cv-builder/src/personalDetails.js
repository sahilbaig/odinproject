import React from "react";

class PersonalDetails extends React.Component{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this)
        this.state={
            "name":"",
            "email":"",
            "phone":""
        }
    }

    handleChange(e){
        this.props.handleClick(e.target.name,e.target.value,"personal")
        this.setState({[e.target.name]:e.target.value})
        
    }

    
    render(){   
        return (
            <div>
                <label htmlFor="fname">Name:</label>
                <input type="text" value={this.state.name}  name="name" onChange={this.handleChange}></input>
                <br/>
                
                <label htmlFor="Email">Email: </label>
                <input type="email" value={this.state.email} name="email" onChange={this.handleChange}></input>
                <br/>

                
                <label htmlFor="phone">Phone:</label>
                <input type="text"  value={this.state.phone} name="phone" onChange={this.handleChange}></input>
                <br/>

            </div>
            
        )
    }
}

export default PersonalDetails;