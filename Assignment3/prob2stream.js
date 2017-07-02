/**
 * Created by kcp on 6/28/17.
 */

const fs = require('fs');
require('http').createServer(function (req,res) {
    const src = fs.createReadStream('./img.jpg').pipe(res);
}).listen(5555,"127.0.0.1");




