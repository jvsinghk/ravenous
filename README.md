## Ravenous
A client-side React application, utilizing the Yelp API to search for local businesses.

### Clone Ravenous
- Clone the repo by using `git clone <url>`

### Install Dependencies
- Install all the dependencies by running `yarn` or `npm install`

### Create Yelp Developer Account to Obtain API Key
You will need an Yelp developer account to have API key to paste in the `src\util\Yelp.js` in apiKey as a string

- For that create a Free Yelp developer account. Note that you’ll have to log in (or create an account if you don’t already have one).

- APIs require that you retrieve and use valid credentials (provided by them) in order to use the API.

- Start by navigating to the “Manage App” section of the [documentation page](https://www.yelp.com/login?return_url=%2Fdevelopers%2Fv3%2Fmanage_app). 

- You will face some issues to create the acoount if your Ip address is non-US like `Oops, Yelp is overworked right now.` Don't worry I figured it out you can use any VPN or Opera Browser which comes with free vpn service to create the account change your location to any US city to create the developer account.

- Once you login, create a new app using the menu to the left. Fill out the required fields for the app (you can use “Ravenous” for “App Name”). Agree to the terms and conditions and create the app.

- You should see an “API Key” presented to you. Take note of this, you’ll use it in Yelp.js.

- Open Yelp.js. At the top of the file, you will see a constant called apiKey. Inside it, store a string of your API key from the Yelp API.

### Run App in Local Environment

- Run the app on you localhost using `yarn start`  or `npm start` it will run the app on `http://localhost:3000/`

- Ex: You can Search for any business like Mexiacan in Seattle.

- Note: Remove the Api Key before pusing the commits or add that to .env and hide it
