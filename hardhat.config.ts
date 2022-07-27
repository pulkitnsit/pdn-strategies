import * as dotenv from 'dotenv';
dotenv.config();
import {HardhatUserConfig, HttpNetworkConfig, HttpNetworkHDAccountsConfig} from 'hardhat/types';
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-truffle5';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.5.16',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {},
    polygon: {
      chainId: 137,
      url: 'https://polygon-rpc.com/',
      accounts: {
        mnemonic: process.env.MNEMONIC
      }
    },
    polygontestnet: {
      chainId: 80001,
      url: 'https://rpc-mumbai.maticvigil.com/',
      accounts: {
        mnemonic: process.env.MNEMONIC
      }
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  }
};

export default config;
