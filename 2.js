const names = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

function searchName(text, limit, callback) {
  const resultSearch = names
    .filter((data) => data.toLowerCase().includes(text.toLowerCase()))
    .slice(0, limit);
  callback(resultSearch);
}

function displayCallback(display) {
  console.log(display);
}
searchName("an", 3, displayCallback);
