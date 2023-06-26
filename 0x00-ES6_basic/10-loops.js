export default function appendToEachArrayValue(array, appendString) {
  const newArr = []
  for (const value in array) {
    newArr.push(appendString + array[value]);
  }

  return newArr;
}