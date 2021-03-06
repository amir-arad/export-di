"use strict";

import { EventEmitter } from 'events';

export default class Example extends EventEmitter {
  constructor(firstArg, secondArg) {
    super()
    this._alive = true
    this._firstArg = firstArg || "clown"
    this._secondArg = secondArg || "pickUpTruck"
  }
  get alive() {
    return this._alive;
  }
  get firstArg() {
    return this._firstArg;
  }
  get secondArg() {
    return this._secondArg;
  }
}
