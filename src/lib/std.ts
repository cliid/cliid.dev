export function lower_bound(arr: number[], find: number) {
  let l = 0,
    r = arr.length;
  while (l + 1 < r) {
    let m = (l + r) >> 1;
    if (find <= arr[m]) {
      r = m;
    } else {
      l = m;
    }
  }
  return r;
}

export function upper_bound(arr: number[], find: number) {
  let l = 0,
    r = arr.length;
  while (l + 1 < r) {
    let m = (l + r) >> 1;
    if (find < arr[m]) {
      r = m;
    } else {
      l = m;
    }
  }
  return r;
}

export class Stack {
  private arr: number[];

  constructor() {
    this.arr = [];
  }

  empty() {
    return this.arr.length > 0 ? false : true;
  }

  top() {
    if (this.arr.length > 0) {
      return this.arr[this.arr.length - 1];
    }

    throw new Error('Trying to peek top when stack is empty.');
  }

  pop() {
    if (this.arr.length > 0) {
      this.arr.pop();
      return;
    }

    throw new Error('Trying to pop when stack is empty.');
  }

  push(x: number) {
    this.arr.push(x);
  }

  size() {
    return this.arr.length;
  }

  toArray() {
    return Array.from(this.arr);
  }
}
