// Mandisa Macleod
// 20 June 2023

// L1T33 - Async / Await

async function catGIFGenerator() {
  try {
    let catGIF = await fetch(
      "http://thecatapi.com/api/images/get?format=src&type=gif"
    );
    console.log(catGIF.url);
  } catch (error) {
    console.log(`Error\n${error}`);
  }
}

catGIFGenerator();

// REFERENCES

// TheCatAPI.2023. Documentation - Example Response (Array of Image Objects). Retrieved on 21 June 2023 at https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
// Color Code [YOUTUBE]. 2023. Async Await vs. Promises - JavaScript Tutorial for beginners. Retrieved on 20 June 2023 at https://www.youtube.com/watch?v=spvYqO_Kp9Q&ab_channel=ColorCode
