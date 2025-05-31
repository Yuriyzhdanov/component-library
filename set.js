const set1 = new Set(['aaa', 'bbb', 'ccc'])
const set2 = new Set(['ccc', 'ddd', 'aaa'])

console.log(set1.union(set2))
console.log(set1.intersection(set2))

console.log(set1.difference(set2))
console.log(set2.difference(set1))

console.log(set2.symmetricDifference(set1))
console.log(set1.symmetricDifference(set2))

const arrunion = [...set1.union(set2)]
arrunion
