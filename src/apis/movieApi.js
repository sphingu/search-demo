export const getMovies = () => {
    const GETMOVIES_API_URL = 'http://starlord.hackerearth.com/simility/movieslisting'
    return fetch(GETMOVIES_API_URL)
        .then(response =>(response.json()))
        .then(json=>{
            return json.map(movie=>({
                title: movie.movie_title,
                director: movie.director_name,
                firstActor: movie.actor_1_name,
                secondActor: movie.actor_2_name,
                genres: movie.genres.split('|'),
                language: movie.language,
                country: movie.country,
                rating: movie.content_rating,
                budget: movie.budget,
                year: movie.title_year,
                keyword: movie.plot_keywords.split('|'),
                imdbLink: movie.movie_imdb_link
            }));
        })
}