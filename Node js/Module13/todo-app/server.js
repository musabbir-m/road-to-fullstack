const http = require("http");
const path= require("path")
const fs= require ("fs")

const filePath= path.join (__dirname, "./todo.json")



const server = http.createServer((req, res) => {

  const url = new URL (req.url, `http://${req.headers.host}`)
  const pathName= url.pathname
  console.log(pathName)

   
  

  if (req.url === "/todos-all" && req.method === "GET") {

    const data= fs.readFileSync(filePath, {encoding: "utf-8"})
    res.writeHead(200, "Ok", {
      "content-type": "application/json",
    });

    res.end (data)
   
//Updating todo
  } else if (pathName === "/todos/update-todo" && req.method === "PATCH") {

    const title= url.searchParams.get("title")
    let data= ""

    req.on ("data", (chunk)=>{
      data= data+chunk;
    })

    req.on("end", ()=> {
      
      const { appName}= JSON.parse(data)

      const allTodos= JSON.parse(fs.readFileSync(filePath, {encoding: "utf-8"}))

      const todoIndex= allTodos.findIndex((todo)=>todo.title=== title)

      allTodos[todoIndex].appName= appName;

      fs.writeFileSync(filePath, JSON.stringify(allTodos, null, 2), {encoding:"utf-8"})
      
      res.end(JSON.stringify({title, appName, createdAt: allTodos[todoIndex].createdAt}, null, 2))
    
    })

  } 

  //getting single todo

  else if(req.url.startsWith("/todo") && req.method=== "GET" ){
    
    const title= url.searchParams.get("title")
    const data= fs.readFileSync(filePath, {encoding: "utf-8"})

    const parsedData= JSON.parse(data)
    const todo= parsedData.find((todo)=> todo.title= title)
    const stringifiedTodo= JSON.stringify(todo)

    res.end(stringifiedTodo)
  }
  
  else {
    res.end("route not found");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server listening to port 5000");
});

/**
 * /todos - GET- All todos
 * /todos/create-todo - POST Create todo
 *
 */
