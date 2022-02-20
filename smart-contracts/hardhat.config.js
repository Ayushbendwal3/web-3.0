// https://eth-ropsten.alchemyapi.io/v2/VSD4lxDL6mZ3cj4ImBVt1ZOet8KC4F-I

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/VSD4lxDL6mZ3cj4ImBVt1ZOet8KC4F-I',
      accounts: [
        '4ade2af22fa4466f950bc8efc089f36f79a15aca096deebc79b4b65c7a8bc503'
      ]
    }
  }
};
