const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibXVrZXNoODk3IiwiYSI6ImNqdzB0czNyeTBkb2Y0YXBzaGtybWN1OXMifQ.FzFYZ1t6Fe0TV-Csb1bDlA'

    request({ url:url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined )
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

geocode('Ludhiana', (error,data) => {
    console.log('Error', error)
    console.log('Data', data)
})

module.exports = geocode