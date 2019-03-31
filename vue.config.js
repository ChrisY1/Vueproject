const webpack = require('webpack')

module.exports={
    devServer:{
        port:8003,
        open:true,
        proxy:{
            '/api':{
                target:'http://139.196.92.127',
                changeOrigin:true,
                ws:true
            }
        }
    },
    configureWebpack: {

           plugins: [
        
              new webpack.ProvidePlugin({
        
                $:"jquery",
        
                jQuery:"jquery",
        
                "windows.jQuery":"jquery"
        
              })
        
            ]
        
        },
       
    }
