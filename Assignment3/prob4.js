/**
 * Created by kcp on 6/28/17.
 */
const fs = require('fs');
const lib = require('zlib');

// const gzip = lib.createGzip();
//
// const readable = fs.createReadStream(__dirname+'/source.txt');
// const zipped = fs.createWriteStream(__dirname+'/prob4.gz');
//
// readable.pipe(gzip).pipe(zipped);

const gzip = lib.createGunzip();

const readable = fs.createReadStream('./prob4.gz');
const unzipped = fs.createWriteStream('./destination.txt');

readable.pipe(gzip).pipe(unzipped);


