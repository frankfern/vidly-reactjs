import React from 'react';
import { getMovies,deleteMovie } from "../services/fakeMovieService";

class MovieList extends React.Component {
    state = { 
        movies : getMovies(),
     }

    handleClick = id => {
        deleteMovie(id);
        this.setState(this.state.movies);
    }

    render() { 

        const { length : count} = this.state.movies;

        if (count === 0) return <p>There is no movies in the database</p>

        return ( <React.Fragment>

            <p>There is {count} movies in the database.</p>
            <table className="table">
                <thead>
                     <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                   { this.state.movies.map(movie => { 
                       return (
                        <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td> <button className='btn btn-danger' onClick={()=>{this.handleClick(movie._id)}} > Delete</button></td>
                        </tr>
                       );
                   })}
                </tbody>
            </table>
            </React.Fragment>
         );
    }
}
 
export default MovieList;