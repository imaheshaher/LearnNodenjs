const fs= require("fs")

const rs = fs.createReadStream('./demo.txt');
rs.on('open',function() {
    console.log("demo file is open")
})