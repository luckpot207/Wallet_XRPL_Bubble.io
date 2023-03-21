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
3. Create a new file app.js and add the code from the following link to it: https://gist.github.com/kantorkid/0a81325b42a33012d31096a67902d7b3
4. Run your app locally:
	```bash
	node app.js
	```

Your API is now running on http://localhost:3000 and exposes a /generate-wallet endpoint, which generates a new XRPL wallet address and secret each time it is accessed.

##Integrating with Bubble.io

1. Log in to your Bubble.io account and create a new app.
2. Drag and drop a text element onto the page.
3. In the Workflow section, create a new event triggered by a page load or any other desired event.
4. Add an action to "Get data from an external API."
5. Define the API by entering the Heroku app's URL and /generate-wallet endpoint.
6. Map the returned JSON fields to the text element's content by using dynamic data.
7. Preview your Bubble.io app to see the XRPL wallet address and secret generated each time the event is triggered.