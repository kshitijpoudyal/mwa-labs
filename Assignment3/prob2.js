/**
 * Created by kcp on 6/28/17.
 */
//async
const fs = require('fs');
require('http').createServer(function (req,res) {
    fs.readFile('./img.jpg', (err, data) => {
        if (err) throw err;
        res.end(data);
    });
}).listen(5555,"127.0.0.1");

