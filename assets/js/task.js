let word = "Salam millet necesiniz";

function checkString(string) {
  let result = string.split(" ").map((m) => m.length);
  return result;
}
console.log(checkString(word));