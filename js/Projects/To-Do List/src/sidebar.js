import task from "./task";

const sidebar = () =>{
       
        

        const checkDefault = () =>{
            var defaultTask= 
                {
                    "Daily":[
                        {"id":"1","task":"Do work"},
                        {"id":"2","task":"Do more work"}
                    ],
                    "Weekly":[
                        {"id":"1","task":"Do weekly work"}
                    ]
                }

            if (localStorage.getItem("data") === null) {
                localStorage.setItem("data", JSON.stringify(defaultTask));
            }

        }

        checkDefault()
        
        const div=document.createElement("div");
        const listDetails=["Daily","Weekly"]
        for(var i=0;i<listDetails.length;i++)
        {
            const btn=document.createElement("button");
            btn.classList.add("btn","btn-primary");
            btn.style.marginRight="20px";
            btn.innerHTML=listDetails[i];
            btn.onclick = () =>{
                generateData(btn.innerHTML)
            }

            const add_btn=document.createElement("button");
            add_btn.classList.add("btn","btn-secondary");
            add_btn.style.marginRight="20px";
            add_btn.innerHTML="ADD";

            div.append(add_btn)
            div.append(btn);
        }        

        const addTaskToList = () =>{

        }

        const generateData =(timePeriod) =>{    
            var retrievedObject = localStorage.getItem("data");
            retrievedObject=JSON.parse(retrievedObject)
            clear();
            const div=document.createElement("div");

            for(var i=0;i<retrievedObject[timePeriod].length;i++){
                div.append(createTask(retrievedObject[timePeriod][i],timePeriod,i));
            }
            canvas.append(div);
        }

    
        const createTask = (details, timePeriod, index) =>{
            
            const p=document.createElement("p")
            p.innerHTML=details["task"];
            const del_btn=document.createElement("button")
            del_btn.classList.add("btn");
            del_btn.classList.add("btn-danger");
            del_btn.innerHTML="Delete"
            del_btn.type="button"
            del_btn.onclick = () =>{
                removeTask()
            }
        
            del_btn.onclick = () =>{
                removeTask(details["id"],timePeriod,index)
            }
            p.append(del_btn)
            return p;
        }

        
        const removeTask = (id,timePeriod,index) =>{
            var retrievedObject = localStorage.getItem("data");
            retrievedObject=JSON.parse(retrievedObject)    
            // console.log(retrievedObject[timePeriod][index]);
            console.log(retrievedObject[timePeriod][index])
            retrievedObject[timePeriod].splice(index,1)
            console.log(retrievedObject[timePeriod])
            localStorage.setItem("data", JSON.stringify(retrievedObject));
        }

        const clear =() =>{
            const canvas=document.getElementById("canvas");
            canvas.innerHTML=""
        }

        return div;
    
}
export default sidebar ;