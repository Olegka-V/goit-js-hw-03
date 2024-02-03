function makeArray(firstArray, secondArray, maxLength) {
    let allArr = [];

    if (maxLength < firstArray.length) {
        for (let i = 0; i < maxLength; i++) {
            allArr.push(firstArray[i]);
        }
        return allArr;
    } else {
        allArr = firstArray;
    }
    const lengthSecondArr = maxLength - firstArray.length;
    for (let i = 0; i < lengthSecondArr; i++) {
        allArr.push(secondArray[i])
    }
    return allArr;
}


console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
