# XRPL Wallet Generator - Hackathon Project
This project demonstrates the process of creating a simple XRPL wallet generator API and integrating it with a Bubble.io web application. The API generates a new XRPL wallet address and secret each time it is called.

## Requirements
Before starting, ensure you have the following installed:

- Node.js (https://nodejs.org/en/)
- npm (comes with Node.js)
- Heroku CLI (https://devcenter.heroku.com/articles/heroku-cli)
- A Bubble.io account (https://bubble.io/)

## Creating the API
1. Create a new folder for your project, navigate to it in your terminal, and initialize a new npm project:
	```bash
	npm init -y
	```
2. Install the required dependencies:
	```bash
	npm install express ripple-keypairs
	```
3. Create a new file app.js and add the code from the following link to it: https://github.com/kantorkid/xrplCreateWallet/blob/master/app.js
4. Run your app locally:
	```bash
	node app.js
	```

Your API is now running on http://localhost:3000 and exposes a /generate-wallet endpoint, which generates a new XRPL wallet address and secret each time it is accessed.

## Integrating with Bubble.io

1. Log in to your Bubble.io account and create a new app.
2. Drag and drop a text element onto the page.
3. In the Workflow section, create a new event triggered by a page load or any other desired event.
4. Add an action to "Get data from an external API."
5. Define the API by entering the Heroku app's URL and /generate-wallet endpoint.
6. Map the returned JSON fields to the text element's content by using dynamic data.
7. Preview your Bubble.io app to see the XRPL wallet address and secret generated each time the event is triggered.

## Cautionary Message and User Experience

1. Add a "Generate XRPL Wallet" button to your Bubble.io app.
2. Create a popup with a cautionary message, instructing users to store their wallet address and secret safely, as they won't be able to recover them if lost. Add a "Proceed" button to this popup.
3. In the Workflow section, create a new event triggered by the "Generate XRPL Wallet" button click. Add an action to show the cautionary message popup.
4. Create a second popup that displays the wallet address and secret using text elements. Make sure this popup is initially hidden.
5. In the Workflow section, create a new event triggered by the "Proceed" button click. Add an action to hide the cautionary message popup and show the second popup containing the wallet address and secret.
6. When users click the "Generate XRPL Wallet" button, they will first see a cautionary message popup. After acknowledging the message and clicking "Proceed," they will see their newly generated XRPL wallet address and secret.
7. Now, your Bubble.io app provides a seamless user experience for generating XRPL wallet addresses and secrets, along with a cautionary message to ensure users store their information securely.

Please note that exposing wallet secrets through an API can have security implications. Make sure to secure your API to prevent unauthorized access and avoid storing the generated secrets in an unsecured manner.



