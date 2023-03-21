const express = require('express');
const keypairs = require('ripple-keypairs');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/generate-wallet', (req, res) => {
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
