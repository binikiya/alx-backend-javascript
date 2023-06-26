export default function appendToEachArrayValue(array, appendString) {
  const newArr = []
  for (const value in array) {
    newArr.push(appendString + value);
  }

  return newArr;
}