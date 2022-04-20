http = require("http")
fs= require("fs")
path= require("path")

function getFile(filepath){
    const filePath= path.join(__dirname,filepath)
    fs.readFile(filePath, {encoding:"utf-8"} , (err, data) =>{
        if(!err){
            return data 
        }
        return "hello"
    })
    return a
}

const server=http.createServer((req,res) =>{
    
    if (req.url=="/")
    {       
        const filePath= path.join(__dirname,"index.html")
        const a=fs.readFileSync(filePath , {encoding:'utf-8'} , (err,result) =>{
            if(!err){
                return result
            }
        })
        res.write(a)
        
    }
    else if(req.url=="/about")
    {   
        
        const filePath= path.join(__dirname,"about.html")
        const a=fs.readFileSync(filePath , {encoding:'utf-8'} , (err,result) =>{
            if(!err){
                return result
            }
        })
        res.write(a)
    }
    else if(req.url=="/contact-me")
    {
                
        const filePath= path.join(__dirname,"contact-me.html")
        const a=fs.readFileSync(filePath , {encoding:'utf-8'} , (err,result) =>{
            if(!err){
                return result
            }
        })
        res.write(a)
    }
    else{
        res.write("such sed , no page ")
    }
    res.end()
})

server.listen(5001, ()=>{
    console.log("server running")
})
