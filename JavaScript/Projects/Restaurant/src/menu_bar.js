import home from './home.js'
import menu from './menu.js'
import contact from './contact.js';

const menu_bar = () =>{
    const button_div = document.createElement("div");
    const menu_list=["Home", "Contact Us", "Menu"]
    button_div.id="button_div"
    const ol= document.createElement("ol");
    const content_div=document.createElement("div")
    content_div.id="content_div";
    const clickHandle = (li) =>{ 

        if(li.name=="1"){
            changeElement(contact)
        }
        else if(li.name=="2"){
            changeElement(menu)
        }
        else {
            changeElement(home)
        }
    }

    const changeElement = (req) =>{
        
        content_div.innerHTML=""
        content_div.append(req())
        
    }
    
    
    for(var i=0;i<menu_list.length;i++)
    {
        const li=document.createElement('button');
        li.innerHTML=menu_list[i];
        li.onclick =  () =>{
            clickHandle(li)
        }
        li.name=i;
        ol.append(li);
    }

    button_div.append(ol);
    button_div.append(content_div)
    return button_div;
}

export default menu_bar;