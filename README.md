# TiBot
> The Date and Time Bot

A simple bot app which enables users to ask about the current date and time, calculate between dates, determine how many days until another date, etc.

* [Requirements](#requirements)
* [Getting Started](#getting-started)
* [Live Demo](#live-demo)

## Requirements

The app is built using [Angular](https://angular.io/) on the front end, [Express](https://expressjs.com/) on the back end, and ~~[API.AI](https://api.ai/)'s API~~ [Dialogflow](https://cloud.google.com/dialogflow/) to process and understand natural language.

You will need:
- [Node.js](https://nodejs.org/en/), and [npm](https://docs.npmjs.com/getting-started/installing-node) or [Yarn](https://yarnpkg.com/en/)
- ~~[API.AI account](https://console.api.ai/api-client/#/login)~~ [Google Cloud account](https://console.cloud.google.com/), and [setup it up to start using Dialogflow](https://cloud.google.com/dialogflow/es/docs/quick/setup)

You will also need [Google Maps API](https://developers.google.com/maps/get-started/) key, as we'll use some of their APIs to get data related to locations and timezones, specifically:
- The [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/start) — to get location related data
- The [Google Time Zone API](https://developers.google.com/maps/documentation/timezone/intro) — to get location's timezone data.

Once you've created your ~~[API.AI account](https://console.api.ai/api-client/#/login)~~ [Google Cloud account](https://console.cloud.google.com/) go ahead and create your [Agent](https://cloud.google.com/dialogflow/es/docs/quick/build-agent). Then, in your created Agent, import the [intents](./data/intents) and [entities](./data/entities) used in this example.

## Getting Started

You can start by cloning this repo:

```bash
git clone git@github.com:van100j/tibot.git
```

Create your `.env` file which contains your development environment, including the APIs keys, simply copy the `.env.example` file to `.env`
```bash
cp .env.example .env
```
and update it accordingly with your API.AI and Google Maps API keys.

Install server dependencies at the root of the directory, and start the Express app:
```bash
npm install # or yarn install
npm start # or yarn start
```

Install front end dependencies in the `./client` directory, and start the Angular app:
```bash
cd client
npm install # or yarn install
npm start # or yarn start, or ng serve
```

Open [http://localhost:4200/](http://localhost:4200/) in your browser, you should be able to see the app running.

## Live Demo

Live demo is available at [https://ti-bot.herokuapp.com/](https://ti-bot.herokuapp.com/)

You can start "talking" to the bot by typing your date and time related questions.

For example, some like the following date related ones:
* how many days between today and New Year
* is it the 21st of July in Korea
* what day of the week is it today in Skopje
* is it Friday tomorrow in Sydney
* what date is tomorrow
* do you know if it's July now
* how many minutes passed since the year 2013
* how many days till November 23
* now it's 2014 year right
* I wonder which year are we in

Or, these time related:
* it's 5 o'clock in Berlin
* convert Moscow time in Denver
* what time is it in Mountain View
* find time difference Paris Tokyo

The bot also replies to small talk (I'm using [API.AI built-in small talk module](https://api.ai/docs/reference/small-talk)):
* Hey, how are you
* Who are you
* Good evening
* You are bad
* etc...
