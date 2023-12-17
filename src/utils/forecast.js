const request = require('request')

const forecast = (lat,long,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=d70d01e263fc5d3d0bda896ae3d769d0&query='+lat+','+long+'&units=m'

    request({url, json: true},(error,{body})=>{
        console.log(body)
        if(error){
            callback("Unable to connect to weather services.",undefined)
        }else if(body.error){
            callback("Location not found.",undefined)
        }else{
            callback(undefined,body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees, it feels like " + body.current.feelslike + " degrees out and visibility is "+body.current.visibility)
        }
    })    
}

module.exports=forecast