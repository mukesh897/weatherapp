const request = require('request')
const geocode = require('./utils/geocode.js')
// const url = 'https://api.darksky.net/forecast/6f314db534a72c4ec22eb331a03b2096/37.8267,-122.4233?units=si'

// request({ url: url, json: true }, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//          console.log(response.body.daily.data[0])
//     }    
    // })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibXVrZXNoODk3IiwiYSI6ImNqdzB0czNyeTBkb2Y0YXBzaGtybWN1OXMifQ.FzFYZ1t6Fe0TV-Csb1bDlA&limit=1'

// request({ url: geocodeURL, json: true}, (error,response) => {
//     if(error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.features.length===0){
//         console.log('Unable to find location. Try another')
    
//     else {    

//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)

        
//     }
// })


