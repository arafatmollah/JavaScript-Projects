import { getReviews } from "./data.js";

function init(){
    const movieReviews = getReviews();
    paintStatistics(movieReviews);
    paintmovieReviews(movieReviews)
}

function paintStatistics(movieReviews){
    let flatmovieReviews = movieReviews.flat();
    let totalMovie = movieReviews.length;
    let totalReviews = flatmovieReviews.length;
   
    let totalRating = flatmovieReviews.reduce((arc, item)=>{
        return arc + item.rating;
    }, 0);
   

    let averageRating = (totalRating/totalReviews).toFixed(2)

    let tMovies = document.getElementById('tMovie')
    addStats(tMovies, totalMovie)
    let averageReviews = document.getElementById('tAverage');
    addStats(averageReviews,averageRating )
    let tRatings = document.getElementById('tRating')
    addStats(tRatings, totalReviews)
}

function addStats(elem, value){
    let spanEl = document.createElement("span");
    spanEl.classList.add('3xl', 'p-3')
    spanEl.innerText = value;
    elem.appendChild(spanEl)
}

function paintmovieReviews(movieReviews){
    let movieReviewsData = movieReviews.flat();
    console.log(movieReviewsData)

    let movieReviewsEl = document.querySelector("#movieList UL");
    console.log(movieReviewsEl)

    movieReviewsData.map((movie)=>{
        let listEl = document.createElement('li');
        listEl.classList.add('card','mx-5', 'my-3', 'p-4', 'bg-yellow-200', 'rounded-lg');

        let createTitleEl = document.createElement('p');
        createTitleEl.classList.add('text-pretty', 'mx-3', 'xl', 'mb-3', 'font-semibold');
        createTitleEl.innerText = `${movie.title} - ${movie.rating}`
        listEl.appendChild(createTitleEl);

        let createContents= document.createElement('p');
        createContents.classList.add('my-3');
        createContents.innerText = movie.content;
        listEl.appendChild(createContents);

        let reviewsTime = document.createElement('p');
        reviewsTime.classList.add('text-grey-100','py-2');
        reviewsTime.innerText = `${new Intl.DateTimeFormat('en-IN').format(movie.on)}  -  by: ${movie.by}`
        listEl.appendChild(reviewsTime)


        movieReviewsEl.appendChild(listEl)
    })
}




init();
