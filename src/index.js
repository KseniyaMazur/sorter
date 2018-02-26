class Sorter {
  constructor() {
    this.arr = [];
    this.compareFunction = ((a, b) => { return a - b});
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
   return this.arr; 
  }

  sort(indices) {
    let indeicesLength = indices.length;
    let arrayLength = this.arr.length;
    let sorteredByIndex = [];
    let sortedArray = [];

    for (let i = 0; i < indeicesLength; i++){
      sorteredByIndex.push(this.arr[indices[i]]);
    };

    sorteredByIndex.sort(this.compareFunction);

    for (let i = 0, count = 0 ; i < arrayLength; i++){
      if( indices.includes(i)){
        sortedArray[i] = sorteredByIndex[count];
        count++;
      } else {
        sortedArray[i] = this.arr[i];
      };
    };

    this.arr = sortedArray;
    return this.arr;
  };

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  };
};

module.exports = Sorter;