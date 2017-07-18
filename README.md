<!--Do not code this at all, but make sure devs answer how we're going to do each of these steps -->

## Homework: Requesting with Node

Tonight you need to use Node.js to make a request to Google's Custom Search API. You've used Google to search things, right? (Of course you have, you're a Googling Master!) The Google Custom Search API is the same except that we put our search info into the request's url, and the response we get back contains information about the search results.

Steps To Get The Google Custom Search API Working:
- Sign into Gooogle
- Go to this link https://console.cloud.google.com/home/dashboard and create a new project called "Requesting With Node"
<img src="readMeImages/createProject1.PNG">
<img src="readMeImages/createProject2.PNG">
- Go to this link to create a "Custom Search Engine" https://cse.google.com/all, click "New Search Engine", enter "whatever.com" into the input, click "create"
<img src="readMeImages/newSearchEngine.PNG">
- Copy that search engine's id into sublime (we'll use that later!)
<img src="readMeImages/searchEngineId.PNG">
- Scroll down to "Sites to Search", delete the site you added, and change "Search only included sites" to "Search the entire web but emphasize included sites"
<img src="readMeImages/sitesToSearch.png">
- Go to this link https://developers.google.com/custom-search/json-api/v1/introduction, click the "Get a Key" button, choose the project you created called "Requesting With Node" and click "Enable API" to get the key. Copy that key!
<img src="readMeImages/enableAPI.PNG">
- Open Postman and send a GET request with this format: 
https://www.googleapis.com/customsearch/v1?key=yourKEY&cx=yourID&q=face+off+movie
I've minimized some of the JSON objects in the screenshot, but you'll know that your request worked if you see that the "items" array contains a list of search results! If something seems off, ask your neighbor for help!

Here's a resource for understanding how the JSON correlates to what you see on Google. Here's the official documentation https://developers.google.com/custom-search/json-api/v1/reference/cse/list 
<img src="readMeImages/comparison.PNG">

Getting Started
- Fork and clone this repo.
- `npm install` to install `request`
- Define `movie.js` and an `app.js`.

#### movie.js

- The **movie** file will contain a **Module**.
- This module should *export* a function named `get(movieTitle)`.
- `get(movieTitle)` should make a *request* to the Google Custom Search API with the *movieTitle* as an argument.
	- **Hint:** what do you need to do to use the `request` library?
- You should parse the response and console.log() something from the JSON. (Maybe each search item's snippet field or just the first one?)
- You should test this file by running it with `node` to verify that it works!

#### app.js

- The **app** should *require* your movie module.
- You should define your `threeFavoriteMovies` as an array.
- You should then use the `Array.forEach()` function to loop through them.
- As you loop through them, you should call on your movie module's `get(movieTitle)`


#### Starter Code: app.js

There is some code in `app.js` to get you started, but you will need to write `movie.js` from scratch.
