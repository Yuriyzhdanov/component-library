export default function compareArrays(arrayA, arrayB) {
  return (
    arrayA.every((_, idx) => arrayA[idx] === arrayB[idx]) &&
    arrayB.every((_, idx) => arrayA[idx] === arrayB[idx])
  )
}

// let result

// let arrayA = ['qwe', 'a', 'b', 'c']
// let arrayB = ['qwe', 'a', 'b', 'c']

// result = compareArrays(arrayA, arrayB)

// console.log(result)
