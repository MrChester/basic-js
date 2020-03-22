const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    // this.value = value;
    this.chain.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if (typeof (position) !== "number" || !this.chain[position] || position < 1) {
      this.chain = [];
      throw new Error("Error!");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = this.chain.join("~~");
    this.chain = [];
    return str;
  }
};

module.exports = chainMaker;
