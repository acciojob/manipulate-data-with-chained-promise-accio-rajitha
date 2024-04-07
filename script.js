//your JS code here. If required.
function processData(array) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(array);
    }, 3000);
  })
  .then((array) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = array.filter(num => num % 2 === 0);
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const multipliedNumbers = evenNumbers.map(num => num * 2);
        document.getElementById("output").innerText = multipliedNumbers.join(", ");
        resolve(multipliedNumbers);
      }, 2000);
    });
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
}

// Example usage:
const inputArray = [1, 2, 3, 4];
processData(inputArray);
