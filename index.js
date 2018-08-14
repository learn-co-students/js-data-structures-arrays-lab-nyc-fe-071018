// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
 return drivers.push(name) ;   
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  return drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift();
}

function appendDriver(name) {
  let newDriversArr = drivers.slice();
  newDriversArr.push(name);
  return newDriversArr;
}

function prependDriver(name) {
  let prependNewDriver = drivers.slice();
  prependNewDriver.unshift(name);
  return prependNewDriver;
}

function removeLastDriver() {
  return drivers.slice(0, 2);
}

function removeFirstDriver() {
  return drivers.slice(-2);
}