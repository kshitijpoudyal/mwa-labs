/**
 * Created by kcp on 6/30/17.
 */
const {promisify} = require('util');
const fs = require('fs'); //import file system

const readFileAsync = promisify(fs.readFile);

process.on('message',(path)=>{
    readFileAsync(path)
        .then((data)=>{process.send(data.toString())})
        .catch((err)=>console.log(err));
});