/**
 * Created by Abhishek Kumar Sinha on 9/8/2017.
 */
import Web3 from 'web3';
import config from './config/config'

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.defaultAccount=web3.eth.accounts[0];
const CONTRACT = web3.eth.contract(config.contractAbi).at(config.contractAddress, (err, ctr) => {
    return ctr
})

export { web3,CONTRACT }
