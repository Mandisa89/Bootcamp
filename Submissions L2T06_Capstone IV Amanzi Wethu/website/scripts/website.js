//alert("Hello, world!");

// onload triggers getUserProfile() // link to every html site to make sure it gets updated correctly wherever the user savesForLater, comments or likes
// session storage? or local storage? to save "saved-for-later" items and item count, and "liked" values, as well as user-comments
// check if page has never been loaded before by checking if key "hasPageLoadedBefore" exists

// create empty array of saved articles
let savedArticles = [];

function getUserProfile() {
  if (sessionStorage.getItem("hasPageLoadedBefore") === null) {
    // save stringified empty array of savedArticles in sessionStorage with key "savedArticles"
    sessionStorage.setItem("savedArticles", JSON.stringify(savedArticles));
    // save stringified empty array of liked articles (map?)
    // save stringified empty array of comments per article (map?)
    // set hasPageLoadedBefore to true now that the page has been loaded once
    sessionStorage.setItem("hasPageLoadedBefore", true);
  }
  //  if sessionStorage exists
  else {
    // get the array of savedArticles objects stored in sessionStorage and assign the objects to array savedArticles
    savedArticles = JSON.parse(sessionStorage.getItem("savedArticles"));

    // populate savedForLater.html by using objects and the DOM
  }
}

// CONSTRUCTOR FUNCTION FOR ARTICLE PREVIEW OBJECTS

// Article objects with properties
// id (number)
// title (string)
// author (string)
// contentPreview (string)
// thumbnailLocation (string)
// location (string)
// isFeatured (boolean)
// isLiked (boolean)
// isSaved (boolean)
// comment (string)

function Article(
  id,
  title,
  author,
  location,
  thumbnailLocation,
  contentPreview,
  isFeatured,
  isLiked,
  isSaved,
  comment
) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.location = location;
  this.thumbnailLocation = thumbnailLocation;
  this.contentPreview = contentPreview;
  this.isFeatured = isFeatured;
  this.isLiked = isLiked;
  this.isSaved = isSaved;
  this.comment = comment;
}

// create 6 existing articles

// Article 1 //
const articleOne = new Article(
  1,
  "How organic pools work",
  "by David Pagan Butler",
  "./posts/1.html",
  "../images/article-1/pool-web.jpeg",
  "The nutrient level in an organic pool is carefully restricted so competition for the limiting nutrient (usually phosphorous) is fierce. In these circumstances, pond plants outperform algae, keeping...",
  true,
  false,
  false,
  ""
);

// -------------------------------- //
// ---------- Like Button --------- //
// -------------------------------- //

function toggleLike(object) {
  // take object associated with the article the like button belongs to
  // target the object's property of isLiked
  // toggle innerHTML to "liked!" when it has been checked, and back when unchecked
}

// -------------------------------- //
// ----- Save For Later Button ---- //
// -------------------------------- //

// toggle innerHTML to "Saved For Later!" when it has been checked, and back when unchecked
// ✔
// alert of number of "saved-for-later" items when new item is added

// -------------------------------- //
// -------- Comment Button -------- //
// -------------------------------- //

// save string of comment

// function to populate index page with article preview trio
function loadIndex() {
  // checks
  console.log("loadIndex() got triggered");

  // SET elements to appropriate values of article object

  // if isFeatured == true as a condition?

  // use the DOM to access the thumbnail image src via ID of the image and set the src to articleOne's property of thumbnailLocation
  document.getElementById("featured-article-thumbnail").src =
    articleOne.thumbnailLocation;

  // checks
  console.log(document.getElementById("featured-article-thumbnail").src);

  // use DOM to set title
  document.getElementById("featured-article-title").innerHTML =
    articleOne.title;

  // use DOM to set contentPreview
  document.getElementById("featured-article-contentPreview").innerHTML =
    articleOne.contentPreview;

  // use DOM to set author
  document.getElementById("featured-article-author").innerText =
    articleOne.author;

  console.log(document.getElementById("featured-article-author").firstChild);
  console.log("loadIndex() finished");
}
