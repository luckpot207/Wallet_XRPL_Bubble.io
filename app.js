const express = require('express');
const keypairs = require('ripple-keypairs');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();
const port = process.env.PORT || 3000;

const apiKey = process.env.API_KEY;
const apiValue = process.env.API_VALUE;

app.use(express.json());

const checkApiKey = (req, res, next) => {
  const apiKeyHeader = req.headers['x-api-key'];
  const apiValueHeader = req.headers['x-api-value'];
  const expectedApiKey = process.env.API_KEY; // Read API key from environment variable

  console.log('Expected API_KEY:', expectedApiKey);
  console.log('Received x-api-key:', apiKeyHeader);
  console.log('Expected API_VALUE:', apiValue);
  console.log('Received x-api-value:', apiValueHeader);

  if (!apiKeyHeader || apiKeyHeader !== expectedApiKey) {
    console.log('API Key mismatch');
  }
  if (!apiValueHeader || apiValueHeader !== apiValue) {
    console.log('API Value mismatch');
  }

  if (!apiKeyHeader || apiKeyHeader !== expectedApiKey || !apiValueHeader || apiValueHeader !== apiValue) {
    res.status(401).send('Unauthorized');
  } else {
    console.log('checkApiKey executed');
    next();
  }
};


app.get('/generate-wallet', checkApiKey, (req, res) => {
  const wallet = keypairs.generateSeed();
  const keypair = keypairs.deriveKeypair(wallet);
  const address = keypairs.deriveAddress(keypair.publicKey);

  res.json({
    xrpl_wallet_address: address,
    xrpl_wallet_secret: wallet,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
