class Deque {
  _first = 0;
  _last = -1;
  _map = null;

  constructor(arr) {
    this._map = new Map();
    arr &&
      arr.forEach((val, idx) => {
        this._last++;
        this._map.set(idx, val);
      });
  }

  get length() {
    return this._map.size;
  }

  push(val) {
    this._last++;
    this._map.set(this._last, val);
  }

  pop() {
    if (!this._map.size) return undefined;
    const lastValue = this._map.get(this._last);
    this._map.delete(this._last);
    this._last--;
    return lastValue;
  }

  shift() {
    if (!this._map.size) return undefined;
    const firstValue = this._map.get(this._first);
    this._map.delete(this._first);
    this._first++;
    return firstValue;
  }
}

export default Deque;
