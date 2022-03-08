const menu = () =>{
    const menu_div=document.createElement("ol")
    const menu_item=["Dish1", "Dish2 " , "Dish3"]
    for(var i=0;i<menu_item.length;i++){
        const container=document.createElement("li");
        container.innerHTML=menu_item[i];
        menu_div.append(container);
    }

    menu_div.id="menu";
    return menu_div;
}

export default menu;