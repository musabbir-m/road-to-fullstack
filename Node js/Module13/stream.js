
const fs = require ('fs')

const readStream= fs.createReadStream("hello.txt", {encoding: "utf-8"})
const writeStream= fs.createWriteStream("helloWorld.txt", {encoding:"utf-8"})

readStream.on("data", (d)=>{
    console.log(d)

    writeStream.write(d, (err)=>{
        if(err){
            throw Error ("Error", err)
        }
    })
})


readStream.on("error", (err)=>{
  if(err){
            throw Error ("Error", err)
        }  
})


writeStream.on("error", (err)=>{
     if(err){
            throw Error ("Error", err)
        }
})

// when readStrean is ended, we are ending the writeStream
readStream.on("end", ()=>{
    console.log("reading end")
    writeStream.end()
})

// when weriteStream finishes (we ended)

writeStream.on("finish", ()=>{
    console.log("written successfully")
})