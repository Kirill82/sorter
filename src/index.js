class Sorter {
  constructor() {
    // your implementation
    this.array = [];
    this.compareFunction = (a, b) => a - b;
  }

  add(element) {
    // your implementation
    this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    // your implementation
    return this.array.length;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    // your implementation
    indices.sort((a,b) => a - b);
    let tempArr = [];
    for (let i = 0; i < indices.length; i++) {
        tempArr.push(this.array[indices[i]]);
    }
    
    tempArr.sort(this.compareFunction);
    //tempArr.sort((a,b) => a - b);
    for (let i = 0; i < indices.length; i++) {
        this.array[indices[i]] = tempArr[i];
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction
  }
}

module.exports = Sorter;