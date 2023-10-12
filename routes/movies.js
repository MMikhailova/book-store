
import express from 'express'
import routerControllers from '../controllers/movies.js'

const router = express.Router()
const { getMovie, getMovieById, postMovie, putMovie, deleteMovie } = routerControllers;
router.route('/').get(getMovie).post(postMovie)
router.route('/:id').get(getMovieById).put(putMovie).delete(deleteMovie)
// router.get('/', getMovie);
// router.get('/:id', getMovieById);
// router.post('/', postMovie);
// router.put('/:id',putMovie )
// router.delete('/:id',deleteMovie )
export default router;