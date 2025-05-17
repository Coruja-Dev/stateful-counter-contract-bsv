import { bsv } from 'scrypt-ts';

const privateKey = bsv.PrivateKey.fromRandom('testnet');
const address = privateKey.toAddress().toString();
const wif = privateKey.toWIF();

console.log('=== Testnet Wallet ===');
console.log('Address:', address);
console.log('Private Key (WIF):', wif);

export {}