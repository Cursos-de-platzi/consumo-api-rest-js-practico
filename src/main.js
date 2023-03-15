
//me trae las peliculas en trending en el dia con scroll horizontal
async function getTrendingMoviesPreview() {
    // hace la peticion a la API
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key='+API_KEY);
    // data es un objeto que tiene todos los datos que me retorna la API
    const data = await res.json();
    // movies son las peliculas que yo cojo de la info que me llega
    const movies = data.results;
    movies.forEach(movie => {
        const trendingPreviewMoviesContainer = document.querySelector
        ('#trendingPreview .trendingPreview-movieList')

        const movieContainer = document.createElement('div');    //creamos un div
        movieContainer.classList.add('movie-container');        //le asociamos la clase css 

        const movieImg = document.createElement('img');         //creamos un img
        movieImg.classList.add('movie-img');                    //le agregamos la clase css
        movieImg.setAttribute('alt', movie.title);              //a img le quiero agregar un atributo(nombre_atributo, valor)
        movieImg.setAttribute(
            'src',
            'https://image.tmdb.org/t/p/w300'+movie.poster_path,
        ); // le agregamos un path fijo a la imagen,y le agrego el resto desde la data que me llega
        
        movieContainer.appendChild(movieImg);
        trendingPreviewMoviesContainer.appendChild(movieContainer);
    });

}
getTrendingMoviesPreview();