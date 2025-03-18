function sumTheArrays(naturalNumbers) {
  let values = Object.values(naturalNumbers);
  let newArray = [];
  for (let i= 0; i < 5; i++) {
    newArray[i] = values[0][i] + values[1][i];
  }
  return newArray;
}
