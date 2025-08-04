const net = require("net")
const fs = require("node:fs/promises")
const server = net.createServer(()=>{})

server.on("connection",(socket) => {
console.log("New Connection")

let fileHandle,fileStream;
socket.on("data",async (data) => {
 fileHandle = await fs.open(`storage/test.txt`, "w");
 fileStream = fileHandle.createWriteStream();
fileStream.write(data);
})
socket.on("end", () =>{
    console.log("Connection CLosed!!!!")
    fileHandle.close();
})


})


server.listen(5050,"::1", () => {
    console.log("Server open on ",server.address())
})