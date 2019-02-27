import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'
import Like from './common/like'

class Movie extends Component {
    state = { 
        movies : getMovies()
     }

     handleDelete = (id) =>{         

        const movies = this.state.movies.filter( (m)=> m._id !== id )

        this.setState({
            movies : movies
        })    
        
     }

     handleLike = (movie) =>{        

         const movies = [...this.state.movies]
         const index = movies.indexOf(movie)

         movies[index].liked = !movie.liked

         this.setState({
             movies
         })

        //  console.log("Click Liked",movies[index])

     }

    render() { 
        const { length } = this.state.movies
        if(length === 0) return (<h6>The Database is empty</h6>)

        return (
            <div>
            <h6>Showing {length} movies in the database</h6>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>                            
                            <th></th>  
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map( (movie)=>{
                            return <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><Like liked={movie.liked} onLike={()=> this.handleLike(movie)} /></td>
                                <td><button onClick={ () => this.handleDelete( movie._id) } className="btn btn-danger">Delete</button></td>
                            </tr>
                        })}
                        <tr>                          

                        </tr>
                    </tbody>
                </table>
            </div>
          );
    }
}
 
export default Movie;