const apikey= "8d7d80ea";
const SEARCHAPI = "http://www.omdbapi.com/?apikey="+apikey+"&t=";

const getMovies = async(api) =>{
    const response = await fetch(api);
    const data = await response.json();
    showMovies(data);
}

const showMovies = (data) =>{

    document.getElementById('image').src= data.Poster;

    document.getElementById('movie-info').innerHTML ="<h3>"+data.Title+"</h3>"+"<span>"+data.imdbRating +"</span>";

    document.getElementById('overview').innerHTML = "<h3>Overview</h3><b>Actors: </b>"+ data.Actors + "<br><b>Director: </b>" +  data.Director + "<br><b>Genre: </b>" + data.Genre + "<br><b>Plot: </b>" + data.Plot;

}

document.getElementById('search').addEventListener("keyup", function(event){
    if(event.target.value != ""){
        getMovies(SEARCHAPI + event.target.value);
    } 
    else{
        location.reload();
    }
})