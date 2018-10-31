<!DOCTYPE html>
<html lang="en">
    <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>ES6 Refactor</title>

<!-- Bootstrap CSS -->
<link
href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
rel="stylesheet"
integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
crossorigin="anonymous">

    </head>
    <body>

    <main class="container">

    <h1>ES6 Refactor</h1>

<h3>Top 3 Favorite Movies</h3>

<div id="favMovies">
    <ol>
    <li class="movie"></li>
    <hr>
    <li class="movie"></li>
    <hr>
    <li class="movie"></li>
    </ol>
    </div>

    <button id="showBtn" class="btn btn-primary">Show Movies</button>

</main>

<!-- jQuery Version 2.2.4 -->
<script src="http://code.jquery.com/jquery-2.2.4.min.js"></script>

    <!-- Bootstrap JS -->
    <script
src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
crossorigin="anonymous"></script>

    <!-- Custom JS -->
    <script>

    {

        "use strict";

const showBtn = document.getElementById("showBtn");

const movies = [
    {
        name: "LOTR",
        year: "2001",
        genre: "Fantasy"
    },
    {
        name: "The Matrix",
        year: "1999",
        genre: "Sci-Fi"
    },
    {
        name: "Shine",
        year: "1996",
        genre: "Drama"
    }
];

const buildMovieHTML = ({ name, year, genre }) => {
    return `
                    <ul>
                        <li>${name}</li>
                        <li>${year}</li>
                        <li>${genre}</li>
                    </ul>
                `
};

const addHTMLToPage = movies => {
    const movieItems = document.getElementsByClassName('movie');
    let i = 0;
    for (let movie of movieItems) {
        movie.innerHTML = buildMovieHTML(movies[i]);
        i++;
    }
};

showBtn.addEventListener("click", () => {
    addHTMLToPage(movies);
});

}


</script>

</body>
</html>