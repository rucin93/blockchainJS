import Blockchain from "./src/blockchain.js";

import { createKeyPair } from "./helpers/utils.js";

const pair = createKeyPair();

let jsChain = new Blockchain();
jsChain.minePendingTransactions(pair.public);

console.log(
  `Before mining balance is ${jsChain.getBalanceOfAddress(pair.public)}`
);

// mining
for (let i = 0; i < 1e10; i++) {
  console.time(`${i}`);
  jsChain.minePendingTransactions(pair.public);
  console.timeEnd(`${i}`);
}

console.log(
  `After mining balance is ${jsChain.getBalanceOfAddress(pair.public)}`
);

console.log("Blockchain valid?", jsChain.isChainValid() ? "Yes" : "No");
