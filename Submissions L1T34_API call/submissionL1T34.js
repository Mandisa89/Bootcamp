// Mandisa Macleod
// 22 June 2023

// Capstone Project L1T34 - fetch API
// Fetch the details of population, elevation and current temperature for a given city in RSA

// IMPORTANT:
// Call only works with first 10 cities in the list of South African cities, since API call does not return much more than that
// Hardcoding Johannesburg's wikiDataId into the myCity variable makes system work perfectly
// Aberdeen does not have the elevation property.
// Johannesburg does.
// In the getCityDetails function, the hardcoded Johannesburg solution option is provided for reference

// Store city of interest in variable "myCity"
const myCity = "Johannesburg";
const myCountry = "South Africa";

// API call for details of a South African city
async function getCityByName(cityName, countryName) {
  const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${cityName}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a44809fe14msh7231dae04d91587p1975a9jsnae0171a0bacd",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);

    // change the provided example code of response.text() to response.json() to receive an object to work with
    const result = await response.json();

    // CHECKS: print the returned object in a neater format for reference
    // console.log(`Result: `, result);

    // log the object where the value of the "city" property matches our myCity value
    const cityObject = result.data.find(
      (element) => element.city === cityName && element.country === countryName
    );

    // CHECKS: check cityObject is returning valid object
    // console.log("City Object: ", JSON.stringify(cityObject, null, 2));

    // assign cityWikiDataId to a variable
    const cityWikiDataId = cityObject.wikiDataId;

    // CHECKS
    // console.count(`Count inside getCityByName()`);

    // CHECKS: check cityWikiDataId is valid
    // console.log(`\ncityWikiDataId(1): ${cityWikiDataId}`);

    // Return the cityObject from this function to feed the next function with the ID
    return cityObject;
  } catch (error) {
    console.error(error);
  }
}

// Get weather (temp) info for chosen value of myCity

async function getCityWeather(longitude, latitude) {
  // CHECKS: check received coordinates
  // console.log(`\nCoordinates ${longitude} long and ${latitude} lat`);

  // amend url string using the coordinates
  const url = `https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${longitude}&lat=${latitude}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a44809fe14msh7231dae04d91587p1975a9jsnae0171a0bacd",
      "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    if (result.message) {
      console.log(`Server message: `, result.message);
    } else {
      // CHECKS: check received weather data is valid
      /* console.log(
      //  `\nWEATHER INFO:`,
      //  JSON.stringify(result.data[0], null, 2)
      //); */

      // return only the current weather info, not the entire forecast
      return result.data[0];
    }
  } catch (error) {
    console.error(error);
  }
}

// MAIN FUNCTION getCityDetails() //

async function getCityDetails() {
  const cityObject = await getCityByName(myCity, myCountry);

  // CHECKS: is cityObject valid
  // console.log(`CityObject: `, cityObject);

  const cityWikiDataId = cityObject.wikiDataId;

  // CHECKS: is cityWikiDataId valid
  // console.log(`cityWikiDataId(2): ${cityWikiDataId}`);

  // amend url with the city ID obtained through first API call using function getCityByName
  const cityWikiDataUrl = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${cityWikiDataId}`;

  // CHECKS: is cityWikiDataUrl a valid-looking url
  // console.log(`\nCityWikiDataUrl: ${cityWikiDataUrl}`);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a44809fe14msh7231dae04d91587p1975a9jsnae0171a0bacd",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
  // setTimeout --> wrapped this part in a setTimeout to give first API call enough time to return something
  setTimeout(async () => {
    try {
      const response = await fetch(cityWikiDataUrl, options);
      const cityDetails = await response.json();

      if (cityDetails.message) {
        console.log(`Server message: `, cityDetails.message);
      } else {
        // CHECKS
        // console.log(`City Details: `, cityDetails.data);

        const cityWeather = await getCityWeather(
          cityDetails.data.longitude,
          cityDetails.data.latitude
        );

        //CHECKS: get weather info
        // console.log(`City Weather: `, JSON.stringify(cityWeather, null, 2));

        //extract temperature information
        const cityTemp = cityWeather.temp;

        //Display the requested information
        console.log(`\n--- City Information---\n`);
        console.log(
          `City: ${cityDetails.data.name}, ${cityDetails.data.country}`
        );
        console.log(`Population: ${cityDetails.data.population}`);
        console.log(`Elevation: ${cityDetails.data.elevationMeters} metres`);
        console.log(`Current Temperature: ${cityTemp} °C`);
      }
    } catch (error) {
      console.error(error);
    }
  }, 2000);
}

getCityDetails();

// REFERENCES

// Hyperiondev.2021.L1T34 Capstone. Retrieved 22 June 2023 via shared Dropbox
// MDN Docs.2023. Fetch API. Retrieved on 30 May 2023 at https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// Color Code [YOUTUBE]. 2022. Javascript Promises - Tutorial for Beginners. Retrieved on 30 May 2023 at https://www.youtube.com/watch?v=TnhCX0KkPqs&ab_channel=ColorCode
// Color Code [YOUTUBE]. 2023. Async Await vs. Promises - JavaScript Tutorial for beginners. Retrieved on 20 June 2023 at https://www.youtube.com/watch?v=spvYqO_Kp9Q&ab_channel=ColorCode
// RapidAPI, Weatherbit.2023. WeatherAPI Documentation. Retrieved on 25 June 2023 at https://rapidapi.com/weatherbit/api/weather/details
// RapidAPI, GeoDBCities.2023. GeoDBCities Documentation. Retrieved on 25 June 2023 at https://rapidapi.com/wirefreethought/api/geodb-cities/details
// Jason Morta, mentor.
// ChatGPT to troubleshoot my problem with setTimeout not allowing "await" in front of getCityWeather. Needed to include an anonymous asyn function inside it to allow it, then it finally worked.
// ChatGPT also recommended to implement PromiseAll instead of a manual time management using setTimeout, which I will look into when I build this app out further
