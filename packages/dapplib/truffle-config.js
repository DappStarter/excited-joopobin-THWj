require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth predict unknown idea kitchen olympic tail'; 
let testAccounts = [
"0xae2205b120133b1b373ffa06098bca9b9ecc0e67cc859f359a8e96207943c33b",
"0x87577564c9facea97f2e2fa4aa584c0b2fdd063c7ff0995ec7a5fb6dd1290e09",
"0x2d100e3ec34f54d80162473d98f274c3d1a34891540a4d8d2e87c4864d9ab1bf",
"0x594b3f1460b3e21c4dd96566c44bd118188acd19370c8dd6bcf07ca1b6ba2234",
"0xe34d7a5abb0c38f34dcc7943c7a5a419acf662cfa2008159171549398491e2e3",
"0xb7246b0544409b9e721bb5e08b680c12affee9793ce8e22caac9e3555266b03d",
"0xbbb5f7dc39fcdc85d5e61ccb27841a158469342e02a620abc54102f1003848a0",
"0xc25341b48249f0c0cc1f1e9d6e69aca6388d98c016aa21b10b480bc30c06f083",
"0x9f654a1adfc8e4c90695e97e75b41de9038bd0f25c59a489b7f60d5a0765cdae",
"0xa813edb06e2908d040127764e0ee141a5a055ed3dd8d21040fe5791f7c04f9d8"
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

