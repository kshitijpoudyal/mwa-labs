/**
 * Created by kcp on 6/29/17.
 */

const queryString = require('querystring'); //import queryString to parse the url's query
const {fork} = require('child_process');


//create a server

require('http').createServer(function (request,response) {
    const parsedUrl = require('url').parse(request.url,true);//parse the url and the query in url

    const childProcess = fork('childProcess.js');
    childProcess.send(parsedUrl.query.url);
    childProcess.on('message',(msg)=>{
        response.write(msg);
        response.end("finished!!!");
    });

}).listen(4000);
