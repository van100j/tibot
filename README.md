# TiBot — The Date and Time  Bot

A simple bot app which enables users to ask about the current date and time, calculate between dates, determine how many days until another date, etc.

## Requirements

The app is built using [Angular](https://angular.io/) on the front end, [Express](https://expressjs.com/) on the back end, and [API.AI](https://api.ai/)'s API to process and understand natural language.

You will need:
- [Node.js](https://nodejs.org/en/), and [npm](https://docs.npmjs.com/getting-started/installing-node) or [Yarn](https://yarnpkg.com/en/)
- [API.AI account](https://console.api.ai/api-client/#/login)

Once you've created your [API.AI account](https://console.api.ai/api-client/#/login) go ahead and create your [Agent](https://api.ai/docs/agents).

You will also need [Google Maps API](https://developers.google.com/maps/get-started/) key, as we'll use some of their APIs to get data related to locations and timezones, specifically:
- The [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/start) — to get location related data
- The [Google Time Zone API](https://developers.google.com/maps/documentation/timezone/intro) — to get location's timezone data

## Getting Started

You can start by cloning this repo:

```shell
git clone
```

Create your `.env` file which contains your development environment, including the APIs keys, simply copy the `.env.sample` file to `.env`
```shell
cp .env.sample .env
```
and update it accordingly with your API.AI and Google Maps API keys.

Install server dependencies at the root of the directory, and start the Express app:
```shell
npm install
npm start
```

Install front end dependencies in the `./client` directory, and start the Angular app:
```shell
cd client
npm install
npm start
```

## The Front End



Open [http://localhost:4200/](http://localhost:4200/) in your browser.

### Demo at https://the-date-bot.herokuapp.com/
