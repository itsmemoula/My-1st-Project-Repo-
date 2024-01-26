const http= require("http")
const port = 3005
 const server=http.createServer(function(req,res)
 {
    res.writeHead(200)
    res.end("Hello World..!")
 })
 server.listen(port,function()
 {
    console.log("Server is listening on port 3005")
 })