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
	'''bash
	npm init -y
	'''
2. Install the required dependencies:
	npm install express ripple-keypairs
3. Create a new file app.js and add the code from the following link to it: https://gist.github.com/kantorkid/0a81325b42a33012d31096a67902d7b3
4. Run your app locally:
	node app.js

Your API is now running on http://localhost:3000 and exposes a /generate-wallet endpoint, which generates a new XRPL wallet address and secret each time it is accessed.