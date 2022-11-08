const { GENESIS_DATA } = require("./config");
const cryptoHash = require("./crypto-hash");

class Block {
  constructor({ timestamp, prevHash, hash, data }) {
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.hash = hash;
  }

  static genesis() {
    return new this(GENESIS_DATA);
  }

  static mineBlock({ prevBlock, data }) {
    const timestamp = Date.now();
    const prevHash = prevBlock.hash;
    return new this({
      timestamp,
      prevHash,
      data,
      hash: cryptoHash(timestamp, prevHash, data),
    });
  }
}

const block1 = new Block({
  timestamp: "4/11/22",
  data: "Hello",
  prevHash: "0xc12",
  hash: "0xacb",
});

// const genesisBlock = Block.genesis();
// console.log(genesisBlock);

// const result = Block.mineBlock({ prevBlock: block1, data: "block2" });
// console.log(result);
// console.log(block1);

module.exports = Block;