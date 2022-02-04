function player(name,marker)
{
    this.name=name,
    this.marker=marker
    this.sayname=function(){
        console.log(name)
    }
};



const play1= new player("steve","x");
play1.sayname()