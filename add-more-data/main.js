function addMoreData(object, key, value) {
  const output = Object.assign(object, {[key]: value})
  
  return output
}

console.log(addMoreData({ name: 'Edo', age: 20 }, 'address', 'Jakarta'))
console.log(addMoreData({ name: 'Edo', age: 20 }, 'hobbies', ['coding', 'reading']))
console.log(addMoreData({ name: 'Edo', age: 20 }, 'isMarried', false))
