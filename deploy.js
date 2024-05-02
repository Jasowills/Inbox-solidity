const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
 
const { abi, evm } = require('./compile');
 
provider = new HDWalletProvider(
   'huge slot mobile shoe involve vanish wave pulp swamp pepper tube antique', 
  'https://sepolia.infura.io/v3/fa0c485397914608885127e946da4d4f'
);
 
const web3 = new Web3(provider);
 
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
 
  console.log('Attempting to deploy from account', accounts[0]);
 
  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });
 
  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
 
deploy();