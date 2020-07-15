const resolve = require('path').resolve

module.exports= {
    root : resolve(__dirname  , '../') , 
    entry : resolve(__dirname , '../src/'),
    buildConfig : resolve(__dirname , '../build/') ,
    template : resolve(__dirname , '../public/') , 
    output : resolve(__dirname , '../dist/') , 
    lib : resolve(__dirname , '../lib/')
}