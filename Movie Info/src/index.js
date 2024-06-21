import { getReviews } from "./data.js";

function init(){
    const movieReviews = getReviews();
    paintStatistics(movieReviews)
}

function paintStatistics(movieReviews){
    let flatmovieReviews = movieReviews.flat();
    let totalMovie = flatmovieReviews.length;
    let totalReviews = flatmovieReviews.length;
    let totalRating = flatmovieReviews.reducue((arc, item)=>{
        return arc + item;
    }, 0);

    let averageRating = (totalRating/totalReviews).toFixed(2)

}


init();
