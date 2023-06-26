export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (let value in array) {
    newArr.push(appendString + value);
  }

  return newArr;
}
