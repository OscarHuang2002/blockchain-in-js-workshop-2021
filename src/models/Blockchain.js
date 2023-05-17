class Blockchain {
  constructor(name) {
    this.name = name
    this.blocks = {}
  }

  addBlock(block) {
    if (block.isValid()) {
      this.blocks[block.hash] = block
    }
  }

  longestChain() {
    let maxHeight = Math.max(...Object.values(this.blocks).map(block => block.height))
    let currentBlock = Object.values(this.blocks).find(block => block.height === maxHeight)
    let longestChain = []

    while (currentBlock) {
      longestChain.push(currentBlock)
      currentBlock = Object.values(this.blocks).find(
          (block) => block.hash === currentBlock.previousHash
      )
    }

    return longestChain.reverse()
  }
}

export default Blockchain


