/**
 * Created by kcp on 6/29/17.
 */
function slow(callback)
{for(let i=0;i<5e8;i++){}
    if(Math.random()>0.5)
    {
        return callback("error",null);
    }
    return callback(null,{id:12345});
}

function callback(err,data)
{
    "use strict";
    if(err!=null)return (err);
    else{ console.log('data:'+data);
        return data;
    }
}
function  exec(fn) {
    const result=fn(callback);

    console.log('result='+result);
    return{
        done:function(cb){if(result)cb('done'); return this;},
        fail:function (cb) {if(!result)cb('fail');return this;
        }
    }

}
exec(slow).done(function (data) {console.log(data);})
    .fail(function (err) { console.error(err);});