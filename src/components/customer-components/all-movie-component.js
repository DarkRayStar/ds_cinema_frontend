import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Movie = props => (
    <tr>
        <td>{props.movie.movieName}</td>
        <td>{props.movie.producer}</td>
        <td>{props.movie.year} </td>
        <td>{props.movie.Description} </td>
        <td>{props.movie.imageurl} </td>
        <td>{props.movie.genre} </td>
        <td>{props.movie.imdb} </td>
        <td>
            <Link to={"/one-movie/view/" + props.movie._id}>View</Link>
        </td>
    </tr>
)

export default class ViewMovie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5050/movies/')
            .then(response => {
                this.setState({ movies: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    movieList() {
        return this.state.movies.map(currentmovie => {
            return <Movie movie={currentmovie} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Topics</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Movie name</th>
                            <th>Producer</th>
                            <th>Year</th>
                            <th>Description</th>
                            <th>Imageurl</th>
                            <th>Genre</th>
                            <th>IMDB</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.movieList()}
                    </tbody>
                </table>
            </div>
        )
    }
}