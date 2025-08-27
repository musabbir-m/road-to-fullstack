// FIle system
// Two wways to read files

// synchronous
// file read/ i/o intensive task > single thread> not go to thread pool> blocking

// Asynchronous
// file read> single thread > event loop> thread pool> taks complete 


// Asynchronous file write and read

const fs = require('fs')

console.log ('task1')

let text= "nodejs"



fs.readFile("hello.txt", "utf-8", (err, data)=>{
    if (err){
        console.log ("error in file reading", err)
        return
    }

    text= data

    console.log(text, "inside callback")

    fs.writeFile("helloWorld.txt", text, {encoding:"utf-8"}, (err)=>{
    if (err){
        console.log("error in writing")
        return
    }
    
    console.log("written successfully")

})
})



console.log(text)
