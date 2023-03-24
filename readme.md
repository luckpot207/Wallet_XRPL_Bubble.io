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
	npm install express ripple-keypairs dotenv
	```
3. Create a new file app.js and add the code from the following link: https://github.com/kantorkid/xrplCreateWallet/blob/master/app.js
4. Create a new file named .env in your project directory, and add your API key and value:
	```makefile
	API_KEY=your_api_key_here
	API_VALUE=your_api_value_here
	```
5. Add .env to your .gitignore file to ensure you don't accidentally commit it to a public repository:
	```bash
	# .gitignore
	.env
	```
6. Run your app locally:
	```bash
	node app.js
	```
Your API is now running on http://localhost:3000/generate-wallet and exposes a /generate-wallet endpoint, which generates a new XRPL wallet address and secret each time it is accessed. To access this endpoint, you must include an x-api-key and x-api-value header with your API key and value, respectively.


## Deploy API to Heroku
1. Create a Heroku account if you don't have one already and log in to your account.
2. Install the Heroku CLI by following the instructions on this page: https://devcenter.heroku.com/articles/heroku-cli#download-and-install.
3. Create a new Heroku app by running the following command in your project directory:
	```lua
	heroku create <app-name>
	```
4. Replace <app-name> with the name you want to give to your Heroku app. This command will also add a new remote to your Git repository.
5. Set the environment variables for your app on Heroku. These should be the same as the API_KEY and API_VALUE values you defined in your .env file. To set the environment variables, run the following commands:
	```arduino
	heroku config:set API_KEY=<your-api-key>
	heroku config:set API_VALUE=<your-api-value>
	```
6. Add a Procfile to your project directory with the following contents:
	```makefile
	web: node app.js
	```
7. Commit the changes to your Git repository and push them to Heroku:
	```sql
	git add .
	git commit -m "Initial commit"
	git push heroku master
	```
8. Once the deployment is complete, you can open your app in a web browser with the following command:
	```arduino
	heroku open
	```
And that's it! Your API is now running on Heroku and can be accessed at the URL provided by the heroku create command.


## Integrating with Bubble.io

### Bubble API Configuation

1. Log in to your Bubble.io account and create a new app.
2. Open the editor for your app.
3. Navigate to the plugin marketplace and search for "API Connector."
4. Add the "API Connector" plugin to your app.
5. In the API Connector plugin, click on the "Create New API" button and give the API a name, such as "XRPL Wallet Generator API."
6. Click on "Add another call" to create a new API call.
7. Set the request type to "GET" and the data type to "JSON."
8. Paste the following endpoint into the appropriate fields:
	https://example-heroku-app.herokuapp.com/generate-wallet
	1. Replace "example-heroku-app" with the name of your own Heroku app (or another 
	hosting service if you are using one), and make sure to keep the 
	"/generate-wallet" endpoint intact as this is where the API call will be directed 
	to.
9. Add two headers to put your API key and value.
	1. The first key should be 
		```
		x-api-key
		```
	2. The first value should be your api key.
	3. The second key should be 
		```
		x-api-value
		```
	4. The second value should be your api value.
10. Initialize the call and test it.
11. If the API returns the "xrpl_wallet_address" and "xrpl_wallet_secret" as text, save the API call.

### Bubble Configuration

1. Drag and drop a button element onto the page and name it “Create XRPL Wallet.”
2. Drag and drop a popup onto the page and name it “Caution: Sensitive Information.” Include a warning message about how important it 		is to treat your wallet and secret.
3. Add a “Continue” button to your caution popup.
4. Create a workflow to connect your “Create XRPL Wallet” button to the Caution popup:
	1.   Double-click the “Create XRPL Wallet” button and select the “Start/Edit Workflow” option.
	2. Select the “Button Create XRPL Wallet Is Clicked” event.
	3. Add an action. In the action options, navigate to element actions and click “Show.”
	4. In the element dropdown, select your caution popup.
5. Drag and drop a popup onto the page and name it “Popup Wallet.”
6. Drag and drop two empty text elements onto the Popup Wallet:
	1. Select the first text element, click “Dynamic Data” in the text edit box, and select “Get 
		Data from External API” from the dropdown menu.
	2. Choose your XRPL API and specify that this text box will show your wallet address.
7. Repeat step 6 for the second text element, but specify that this box will show your wallet secret.
8. Create a workflow to connect your “Proceed” button to show the Popup Wallet:
	1. Double-click the “Continue” button on the Caution popup and select the “Start/Edit 
		Workflow” option.
	2. Select the “Button Continue Is Clicked” event.
	3. Add an action. In the action options, navigate to element actions and click “Show.”
	4. In the element dropdown, select your Popup Wallet.

By following these steps, you should be able to create a button to generate a new XRPL wallet, add a caution popup to warn users about the sensitivity of the information, and display the generated wallet and secret key in a separate popup.


## Cautionary Message and User Experience

A good cautionary message might look like this:

### Caution: Sensitive Information

	```
	"This popup contains your XRPL wallet address and secret. The wallet secret is a critical piece of information that allows you to access and manage your funds. Please follow these security guidelines:

	Backup your wallet address and secret: Write down or save your wallet address and secret in a secure location, such as pen and paper, an encrypted file or password manager. Losing your secret may result in the permanent loss of your funds.

	Do not share your secret: Never share your wallet secret with anyone, as it grants them access to your funds. Be cautious of phishing scams and fake websites that may attempt to steal your wallet information.

	Secure your devices: Ensure that your devices have up-to-date security software and strong passwords. Consider using a hardware wallet or cold storage for additional protection.

	Monitor your wallet: Regularly check your wallet's transactions and balance to ensure there are no unauthorized activities.

	By proceeding, you acknowledge the risks associated with handling wallet addresses and secrets and agree to take necessary precautions to protect your funds.""
	```

## API Security

Please note that exposing wallet secrets through an API can have security implications. Make sure to secure your API to prevent unauthorized access and avoid storing the generated secrets in an unsecured manner.



