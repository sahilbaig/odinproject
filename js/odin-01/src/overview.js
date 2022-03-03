import React from "react";
import { Component } from "react";

class Overview extends Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        return(
            <div>
                {/* {this.props.message.map((index,item) => <h1 key={item}>{index}</h1>)} */}
                {this.props.message.map((item,index)=>
                    <h1 key={index}>{index+1}.{item}</h1>
                )
                }
            </div>
        )
    }
}

export default Overview