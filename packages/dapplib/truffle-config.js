require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remain unknown imitate prison flip slender'; 
let testAccounts = [
"0xdf7ff30f2fdfb6924c0813eee3d523ab3ddc588b4b997aa5c9e87fb5dddf15cd",
"0xd613b7466ed3cc1448a29a53f2bda12e314006d73890426633641f9380900cd6",
"0x8515f4a9afee4b960ff1d116b12da4ef3fab064e495c715d6dc6ab9f7d135313",
"0x93765baf497ff308ddb2a1838b30622a481ccf96606d19f255439064dc21b92f",
"0xd73156765e2bfe6e77da0013515e0461fb003b03f0dccd7fe0432cf738350c24",
"0xfcc0f960b36dc738beb841cf9cfd850f7d3e43ec5c2f5e01d526fed3efe13fd0",
"0x3be711ea9c2b00558c5e77aa10af12c9589a554d3dfbc79d7e1a0d0449f2524d",
"0x8bf28994f5970e9945801606ac15a20fdf75dafc7c732800bd26f82990638261",
"0xba2420ae1569a20ddafce3fbfca84c2b37bd13f24ed880e23fab9e3d2bd4b471",
"0xe10ec6bf248e1b2a7e3d56a6aff2fa81d5bec5429cabbde8070ff7aff8de0284"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

