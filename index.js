import Blockchain from "./src/blockchain.js";

import { createKeyPair } from "./helpers/utils.js";

const pair = createKeyPair();

let jsChain = new Blockchain();
jsChain.minePendingTransactions(pair.public);

console.log(`Balance is ${jsChain.getBalanceOfAddress(pair.public)}`);

console.log("Blockchain valid?", jsChain.isChainValid() ? "Yes" : "No");
