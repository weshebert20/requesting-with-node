<!--Do not code this at all, but make sure devs answer how we're going to do each of these steps -->

## Homework: Requesting with Node

Tonight you need to use Node.js to make a request to [**OMDB**](http://www.omdbapi.com/).

- Fork and clone this repo.
- `npm install` to install `request`
- Define `movie.js` and an `app.js`.

#### movie.js

- The **movie** file will contain a **Module**.
- This module should *export* a function named `get(movieTitle)`.
- `get(movieTitle)` should make a *request* to OMDB with the *movieTitle* as an argument.
	- **Hint:** what do you need to do to use the `request` library?
- You should console.log your output.
- You should test this with `node` to verify it works!

#### app.js

- The **app** should *require* your movie module.
- You should define your `threeFavoriteMovies` as an array.
- You should then use the `Array.forEach()` function to loop through them.
- As you loop through them, you should call on your movie module's `get(movieTitle)`


#### Starter Code: app.js

There is some code in `app.js` to get you started, but you will need to write `movie.js` from scratch.
