import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ViewOneMovie extends Component {
    constructor(props) {
        super(props);

        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeProducer = this.onChangeProducer.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeImageurl = this.onChangeImageurl.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onChangeImdb = this.onChangeImdb.bind(this);
        this.onChangeTeaterOption = this.onChangeTeaterOption.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            movieName: '',
            producer: '',
            year: '',
            imageurl: '',
            genre: '',
            imdb: '',
            theaterOpt: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5050/movies/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    movieName: response.data.movieName,
                    producer: response.data.producer,
                    year: response.data.year,
                    imageurl: response.data.imageurl,
                    genre: response.data.genre,
                    imdb: response.data.imdb,
                    theaterOpt: response.data.theaterOpt,
                })
                // console.log(this.props.match.params.id);
            })

            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeMovieName(e) {
        this.setState({
            movieName: e.target.value
        })
    }

    onChangeProducer(e) {
        this.setState({
            producer: e.target.value
        })
    }

    onChangeYear(e) {
        this.setState({
            year: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            Description: e.target.value
        })
    }

    onChangeImageurl(e) {
        this.setState({
            imageurl: e.target.value
        })
    }

    onChangeGenre(e) {
        this.setState({
            genre: e.target.value
        })
    }

    onChangeImdb(e) {
        this.setState({
            imdb: e.target.value
        })
    }
    onChangeTeaterOption(e) {
        this.setState({
            theaterOpt: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const movie = {
            movieName: this.state.movieName,
            producer: this.state.producer,
            year: this.state.year,
            imageurl: this.state.imageurl,
            genre: this.state.genre,
            imdb: this.state.imdb,
            theaterOpt: this.state.theaterOpt,

        }

        console.log(movie);

        axios.post('http://localhost:5050/cart/add', movie)
            .then(res => console.log(res.data));

        alert("Movie added to the Cart !")
        window.location = '/movie/view';
    }

    render() {
        return (
            <div>
                <h3>Your Movie</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Movie Name : </label> {this.state.movieName} {this.onChangeMovieName}
                    </div>
                    <div className="form-group">
                        <label>Producer: </label> {this.state.producer}{this.onChangeProducer}
                    </div>
                    <div className="form-group">
                        <label>Year : </label> {this.state.year} {this.onChangeYear}
                    </div>
                    <div className="form-group">
                        <label>imageurl : </label> {this.state.imageurl} {this.onChangeImageurl}
                    </div>
                    <div className="form-group">
                        <label>Genre : </label> {this.state.genre} {this.onChangeGenre}
                    </div>
                    <div className="form-group">
                        <label>IMDB : </label> {this.state.imdb} {this.onChangeImdb}
                    </div>
                    <div className="form-group">
                        <label>Theater : </label>

                        <select name="state" id="state"
                            onChange={this.onChangeTeaterOption}>
                            <option value="" selected>Choose</option>
                            <option value="4K CINEMA">4K CINEMA</option>
                            <option value="DOLBY THEATER">DOLBY THEATER</option>
                        </select>
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Add to cart" className="btn btn-primary" />
                        <Link to={"/movie/view"}> <button className="btn btn-primary" style={{ marginLeft: "10px" }}>Cancel</button></Link>
                    </div>
                </form>
            </div>
        )
    }
}