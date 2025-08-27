// console.log(process.argv)

const path= require("path")
const fs= require('fs')

const inputArguments= process.argv.slice(2) //to sliced out the fires 2 items of the array
const text = inputArguments.join(" ").concat("\n")

const timeStamp= new Date().toISOString()

const message= `${text} ${timeStamp} \n`
console.log(timeStamp)

console.log (text)

if (!message){
    console.log("Please provide a mesage to log")
    console.log("Example: node index.js Hello Node")
    process.exit(1) //closes the server
}

const filePath= path.join(__dirname, "log.txt")

console.log(filePath)

fs.appendFile(filePath, message, {encoding: "utf-8"}, ()=>{
    console.log("Your log added succesfully")
})

