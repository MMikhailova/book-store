import { v4 } from 'uuid';
let movies = [
    {
        id: '1',
        name: 'Patriot',
        src: 'https://m.media-amazon.com/images/I/518IZVOjisL._AC_UF894,1000_QL80_.jpg'
    },
    {
        id: '2',
        name: 'Barbie',
        src: 'https://m.media-amazon.com/images/I/71BgdzmFDAL.jpg'
    },
    {
        id: '3',
        name: 'Troy',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQF-3wteC9fSNiCZEekpEByLW4axm4boSGX4JD-mZlgA&s'
    },
    {
        id: '4',
        name: 'Harry Potter',
        src: 'https://cdn.europosters.eu/image/hp/80594.jpg'
    },
    {
        id: '5',
        name: 'Tom & Jerry',
        src: 'https://cdn.europosters.eu/image/750/posters/looney-tunes-tom-and-jerry-i12290.jpg'
    },
    {
        id: '6',
        name: 'little mermaid',
        src: 'https://www.themoviedb.org/t/p/original/cJbKUdbWcIFDuHhs6uvOfacemc4.jpg'
    },
    {
        id: '7',
        name: 'Oppenheimer',
        src: 'https://movies.universalpictures.com/media/06-opp-dm-mobile-banner-1080x745-now-pl-f01-071223-64bab982784c7-1.jpg'
    }
];

let getMovieById = (id) => {
    return movies.find((movie) => movie.id === id);
};

const routerControllers = {
    getMovie: (req, res) => {
        res.status(200).render('movies', { movies:movies });
    },
    getMovieById: (req, res) => {
        const { id } = req.params;
        const movieExist = getMovieById(id);
        res.status(200).render('movie', { movie: movieExist });
    },
     
    postMovie: (req, res) => {
        const { title, genre } = req.body;
        const newMovie = {
            id: v4(),
            title,
            genre
        };
        if (newMovie.title && newMovie.title) {
            movies.push(newMovie);
            res.status(200).json({
                message: `The movie with id ${newMovie.id} added successfully`
            });
        } else {
            res.status(404).json({
                message: `Please add title and genre of the movie.`
            });
        }
    },
    putMovie: (req, res) => {
        const { id } = req.params;
        const { title, genre } = req.body;
        const movieExist = getMovieById(id);
        movieExist &&
            movies.forEach((movie) => {
                if (movie.id === id) {
                    movie.title = title;
                    movie.genre = genre;
                    res.status(200).json({
                        message: `The movie with id=${id} was successfully changed`
                    });
                }
            });
        !movieExist &&
            res
                .status(200)
                .json({ message: `There is no movie with id=${id}` });
    },
    deleteMovie:(req, res) => {
     const { id } = req.params;
    const movieExist = getMovieById(id);
    if (movieExist) {
        movies = movies.filter((movie) => movie.id !== id)
        res.status(200).json({ message: `The movie with id=${id} was successfully deleted` })
    
    } else {
        res.status(404).json({
            message: `Movie with id = ${id} doesn't exist`
        });
    }

}
};
 export default routerControllers