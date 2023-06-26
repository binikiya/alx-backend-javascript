export default function appendToEachArrayValue(array, appendString) {
  const value = [];
  for (let idx in array) {
    value.push(appendString + array[idx]);
  }

  return value;
}
