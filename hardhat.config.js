require("@nomiclabs/hardhat-waffle");
//require('dotenv').config();

module.exports = {
  solidity: '0.8.0',
  defaultNetwork: "rinkeby",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
    },
    rinkeby: {
//      url: process.env.ALCHEMY_KEY,
      url: "https://eth-rinkeby.alchemyapi.io/v2/2njKVCEtyjGXnyYnr2NNvZXg6KKo0C0-",
//      accounts: [process.env.PK],
      accounts: ["0xc81084cdc3b0c6d7ec86c73fb08ba34e824de84d1a199aab734e3088cea4baae"],
    },
//    mainnet: {
//      chainId: 1,
//      url: process.env.ALCHEMY_KEY,
//      accounts: [process.env.PK],
//    }
  },
};
