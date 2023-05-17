import sha256 from 'crypto-js/sha256.js'

export const DIFFICULTY = 2

class Block {
  // 1. 完成构造函数及其参数

  constructor(blockchain, previousHash, height, data) {
    this.blockchain = blockchain;
    this.previousHash = previousHash;
    this.height = height;
    this.data = data;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return sha256(
        this.previousHash +
        this.height +
        this.data +
        this.nonce
    ).toString();
  }

  isValid() {
    return (
        this.hash.substring(0, DIFFICULTY) ===
        '0'.repeat(DIFFICULTY)
    );
  }

  setNonce(nonce) {
    this.nonce = nonce;
    this.hash = this.calculateHash();
  }
}
export default Block

