// Mandisa Macleod
// 30 May 2023

// L1T31 Promises - Compulsory Task 2

let pokemon = "";

fetch("https://pokeapi.co/api/v2/pokemon/onix/")
  .then((receivedData) => receivedData.json())
  .then((dataObject) => {
    pokemon = `Name:\n${dataObject.name}\n\nWeight:\n${
      dataObject.weight
    }\n\nAbilities:\n${JSON.stringify(dataObject.abilities, null, 3)}`;
    console.log(pokemon);
  }),
  (error) => {
    console.log(error);
  };

// REFERENCES

// Hyperiondev.(2021). WD L1T32 - Promises.pdf. Retrieved 30 May 2023 via shared Dropbox
// MDN Docs.2023. JSON.stringify(). Retrieved on 20 June 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
// MDN Docs.2023. Fetch API. Retrieved on 30 May 2023 at https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// Color Code [YOUTUBE]. 2022. Javascript Promises - Tutorial for Beginners. Retrieved on 30 May 2023 at https://www.youtube.com/watch?v=TnhCX0KkPqs&ab_channel=ColorCode
// Color Code [YOUTUBE]. 2022. Async JavaScript & Callback Functions -- Tutorial for Beginners. Retrieved on 30 May 2023 at https://www.youtube.com/watch?v=QSqc6MMS6Fk&t=12s&ab_channel=ColorCode

// -------------------------------------------------------------- //

// THOUGHT EXERCISE IN A SOLUTION WITHOUT JSON.stringify()

// let pokemon = "";

// fetch("https://pokeapi.co/api/v2/pokemon/onix/")
//   .then((receivedData) => receivedData.json())
//   .then((dataObject) => {
//     pokemon =
//       `Name:\n${dataObject.name}\n\nWeight:\n${dataObject.weight}\n\nAbilities:\n[\n` +
//       `${
//         dataObject.abilities.map(
//           (element) =>
//             `\n\t{\n\t\tability: { name: "${element.ability.name}", url:'${element.ability.url}}\n\t\tishidden: ${element.is_hidden}\n\t\tslot: ${element.slot}}` +
//             `\n\t}`
//         ) + `\n]`
//       }`;
//     console.log(pokemon);
//   }),
//   (error) => {
//     console.log(error);
//   };
