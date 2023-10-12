import { v4 } from 'uuid';
let movies = [
    { id: '1', title: 'Thirteen, The (Trinadtsat)', genre: 'Adventure|War' },
    { id: '2', title: 'UHF', genre: 'Comedy' },
    { id: '3', title: 'Night to Remember, A', genre: 'Action|Drama' },
    { id: '4', title: 'River, The (He liu)', genre: 'Drama' },
    {
        id: '5',
        title: 'Man from Snowy River, The',
        genre: 'Drama|Romance|Western'
    },
    { id: '6', title: 'Prime Suspect: The Lost Child', genre: 'Drama|Mystery' },
    { id: '7', title: 'Deep Cover', genre: 'Action|Crime|Thriller' },
    { id: '8', title: 'Open Water', genre: 'Drama|Thriller' },
    { id: '9', title: 'Kiss Me Deadly', genre: 'Film-Noir' },
    {
        id: '10',
        title: 'Koyaanisqatsi (a.k.a. Koyaanisqatsi: Life Out of Balance)',
        genre: 'Documentary'
    }
];

let getMovieById = (id) => {
    return movies.find((movie) => movie.id === id);
};

const routerControllers = {
    getMovie: (req, res) => {
        res.status(200).json(movies);
    },
    getMovieById: (req, res) => {
        const { id } = req.params;
        const movieExist = getMovieById(id);
        if (movieExist) {
            movieExist && res.status(200).json(movieExist);
        }
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