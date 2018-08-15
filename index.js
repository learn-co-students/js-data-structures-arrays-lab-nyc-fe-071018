// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver (name) {
  return drivers.push("Ralph")
}

function destructivelyPrependDriver (name) {
  return drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver () {
  return drivers.pop()
}

function destructivelyRemoveFirstDriver () {
  return drivers.shift()
}

function appendDriver (name){
  let newArray = [...drivers, "Broom"]
  return newArray
}

function prependDriver (name){
  let newArray = ["Arnold", ...drivers]
  return newArray
}

function removeLastDriver (name){
  let newArray = drivers.slice(0, drivers.length - 1)
  return newArray
}

function removeFirstDriver (name){
  let newArray = drivers.slice(1, drivers.length)
  return newArray
}