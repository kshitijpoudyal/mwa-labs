/**
 * Created by kcp on 6/28/17.
 */
const dns = require('dns')

dns.lookup('localhost', function(err, result) {
    if (err) throw err;
    console.log(result)
})
