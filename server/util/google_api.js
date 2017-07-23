const request = require('request');

const TIMESTAMP = Math.round(Date.now() / 1000);
const GEOCODE_API_URL =
`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.GOOGLE_API_KEY}`;
const TIMEZONE_API_URL = `https://maps.googleapis.com/maps/api/timezone/json?key=${process.env.GOOGLE_API_KEY}&timestamp=${TIMESTAMP}`;

function geocode(query) {
  return new Promise((resolve, reject) => {
    const url = `${GEOCODE_API_URL}&address=${query}`;

    request(url, function(error, resp, body) {
      if (error) {
        reject(error);
      } else {
        const response = JSON.parse(body);

        if (response.results && response.results.length) {
          const result = response.results[0];
          resolve(result.geometry.location);
        } else {
          reject(new Error(`No location results found for ${query}`));
        }
      }
    });
  })
}

function latlng(location) {
  return new Promise((resolve, reject) => {
    const url = `${TIMEZONE_API_URL}&location=${location.lat},${location.lng}`;

    request(url, function(error, resp, body) {
      if (error) {
        reject(error);
      } else {
        const response = JSON.parse(body);

        if (response.status === "OK") {
          resolve(response.timeZoneId);
        } else {
          reject(new Error(`No TZ results found for location: ${location.lat},${location.lng}`));
        }
      }
    });
  });
}

const timezone = (query) =>
  geocode(query)
    .then(location => latlng(location))
    .catch(err => err);

module.exports = timezone;
