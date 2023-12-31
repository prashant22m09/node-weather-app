const request = require('request')

const geocode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoicHJhc2hhbnQxMjIiLCJhIjoiY2xweTd5d2hnMTBvNTJpcHRjZ3FsbjY5dCJ9.-D5I9Q-nBKgXKCHOqM22Sw&limit=1'

    request({url, json: true}, (error,{body})=>{
        if(error){
            callback("Unable to connect to Geocoding Services.",undefined)
        }else if(body.features.length===0){
            callback("Location not found.",undefined)
        }else{
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                place: body.features[0].place_name
            })
        }
    })
}
module.exports=geocode