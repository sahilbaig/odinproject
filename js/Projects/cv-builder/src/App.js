import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import PersonalDetails from './personalDetails';
import Work from './components/Work/workDetails';
import Education from './components/Education/educationDetails'
import CV from './components/CV/cv';

class App extends Component{
  constructor(props){
    super(props)

    this.state ={
      "personal":{
        "name":"",
        "email":"",
        "phone":""
      },
      "work":[
      ],
      "education":[

      ]
        
    }

    this.handlePersonal=this.handlePersonal.bind(this)
    this.addExperience=this.addExperience.bind(this)
    this.editExperience=this.editExperience.bind(this)
    this.deleteExp=this.deleteExp.bind(this)
    this.showWork=this.showWork.bind(this)

    this.editEducation=this.editEducation.bind(this)
    this.deleteEducation=this.deleteEducation.bind(this)
  }

  addExperience(){
    var id=new Date().getTime()
    var details={
      "id":id,
      "description":"",
      "title":""
    }
    var abc= [...this.state.work]
    abc.push(details)

    this.setState({"work":abc})
  }

  editExperience(event){
    var xp=[...this.state.work]
    const index = event.target.getAttribute("index")
    if(event.target.name==="title"){
      xp[index].title=event.target.value
    }
    if(event.target.name==="description"){
      xp[index].description=event.target.value
    }
    
    this.setState({"work":xp})
  }

  deleteExp(index){
    console.log(index)
    var xp=[...this.state.work]
    xp.splice(index,1);
    this.setState({"work":xp})
  }
  handlePersonal(k,v,level){
    // var abc = this.state.personal;
    let abc= {...this.state.personal}
    abc[k]=v
    const wow=level
    this.setState({[wow]:abc});
  }

  showWork(){
    var workDiv =[]
    for(var i=0;i<this.state.work.length;i++){
      workDiv.push(<Work key={this.state.work[i].id} index={i} edit={this.editExperience} deleteExp={this.deleteExp}></Work>)
    }
    return workDiv;
  }
  


  // Education
  showEducation(){
    
    var EducationDiv =[]
    for(var i=0;i<this.state.education.length;i++){
      EducationDiv.push(<Education key={this.state.education[i].id} index={i} edit={this.editEducation} delete={this.deleteEducation}></Education>)
    }
    return EducationDiv;
  }

  addEducation(){
    var id=new Date().getTime()
    var details={
      "id":id,
      "description":"",
      "course":""
    }
    var abc= [...this.state.education]
    abc.push(details)

    this.setState({"education":abc})
  }

  editEducation(event){
    var xp=[...this.state.education]
    const index = event.target.getAttribute("index")
    if(event.target.name==="course"){
      xp[index].course=event.target.value
    }
    if(event.target.name==="description"){
      xp[index].description=event.target.value
    }
    
    this.setState({"education":xp})
  }

  deleteEducation(index){
    var xp=[...this.state.education]
    xp.splice(index,1);
    this.setState({"education":xp})
  }

  render(){
   
    return(
      <div>
        <div className='split left'>
          <h3>Personal Details:</h3>
          <PersonalDetails handleClick={this.handlePersonal} ></PersonalDetails>
          
          <h3>Work Experience:</h3>
          {this.showWork()}
          <button onClick={()=>{
            this.addExperience()}
          }>Add Experience</button>
          <br></br>


          <h3>Education</h3>
          {this.showEducation()}
          <button onClick={()=>{
            this.addEducation()}
          }>Add Education</button>
          
          <button onClick={()=>{
            console.log(this.state)
          }}>Show state</button>
        </div>

        <div className='split right'>
            <h1>Generated</h1><br/>
            <CV data={this.state}></CV>

        </div>
      </div>
    )
  }
  
}

export default App;
