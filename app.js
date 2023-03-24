// Import the required dependencies.
const express = require('express');
const keypairs = require('ripple-keypairs');

// Check if the application is running in production mode and load environment variables.
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Create a new Express application.
const app = express();

// Define the port for the server to listen on.
const port = process.env.PORT || 3000;

// Get the API key and value from environment variables.
const apiKey = process.env.API_KEY;
const apiValue = process.env.API_VALUE;

// Use Express middleware to parse request bodies as JSON.
app.use(express.json());

// Create a middleware function to check the API key and value in the headers.
const checkApiKey = (req, res, next) => {
  // Get the API key and value from the headers.
  const apiKeyHeader = req.headers['x-api-key'];
  const apiValueHeader = req.headers['x-api-value'];
  
  // Get the expected API key and value from the environment variables.
  const expectedApiKey = process.env.API_KEY;
  const expectedApiValue = process.env.API_VALUE;

  // Log the expected and received API key and value for debugging purposes.
  console.log('Expected API_KEY:', expectedApiKey);
  console.log('Received x-api-key:', apiKeyHeader);
  console.log('Expected API_VALUE:', expectedApiValue);
  console.log('Received x-api-value:', apiValueHeader);

  // Check if the received API key and value match the expected ones.
  if (!apiKeyHeader || apiKeyHeader !== expectedApiKey) {
    console.log('API Key mismatch');
  }
  if (!apiValueHeader || apiValueHeader !== expectedApiValue) {
    console.log('API Value mismatch');
  }

  // If the received API key or value don't match the expected ones, send an unauthorized response.
  if (!apiKeyHeader || apiKeyHeader !== expectedApiKey || !apiValueHeader || apiValueHeader !== expectedApiValue) {
    res.status(401).send('Unauthorized');
  } else {
    // If the received API key and value match the expected ones, continue to the next middleware.
    console.log('checkApiKey executed');
    next();
  }
};

// Define a route to generate a new XRPL wallet address and secret.
app.get('/generate-wallet', checkApiKey, (req, res) => {
  // Generate a new random wallet seed.
  const wallet = keypairs.generateSeed();

  // Derive the keypair from the wallet seed.
  const keypair = keypairs.deriveKeypair(wallet);

  // Derive the XRPL address from the keypair public key.
  const address = keypairs.deriveAddress(keypair.publicKey);

  // Send the XRPL wallet address and secret as a JSON response.
  res.json({
    xrpl_wallet_address: address,
    xrpl_wallet_secret: wallet,
  });
});

// Start the server and listen on the defined port.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
