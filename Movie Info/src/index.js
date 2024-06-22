import { getReviews } from "./data.js";

function init(){
    const movieReviews = getReviews();
    paintStatistics(movieReviews)
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
    spanEl.classList.add('3xl')
    spanEl.innerText = value;
    elem.appendChild(spanEl)
}




init();
