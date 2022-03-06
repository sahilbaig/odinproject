import { Component } from "react";
import './cv.css'
class CV extends Component{
    constructor(props){
        super(props)
    
    }

    
    

    render(){
       
        const listItems = this.props.data.work.map((item) =>
            <li key={item.id}> 
                Course:{item.title}<br></br>
                Description:{item.description}
                
            </li>

            
         
        );


        const EducationList = this.props.data.education.map((item) =>
        <li key={item.id}> 
            Course:{item.course}<br></br>
            Description:{item.description}
            
        </li>

        
     
         );
       
        return(
            <div>   
                <h2>Personal:</h2>
                <h3>Name: {(this.props.data.personal.name)}</h3>
                <h3>Email: {(this.props.data.personal.email)}</h3>
                <h3>Contact: {(this.props.data.personal.phone)}</h3>
                <br/>

                <h2>Work Experience:</h2>
                {
                    listItems
                }

                <h2>Education:</h2>
                {
                    EducationList
                }




            </div>
        )
    }
}

export default CV;

