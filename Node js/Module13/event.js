const EventEmitter= require ("events");

class SchoolBell extends EventEmitter {}

const schoolBell = new SchoolBell();

schoolBell.on("ring", ()=>{
     console.log ("class sesh")
}) 

schoolBell.on("ring", ()=>{
    console.log("aro class ache!")
})
schoolBell.on("noring", ()=>{
    console.log ("school cholche")
})

schoolBell.emit("ring")
// schoolBell.emit("noring")