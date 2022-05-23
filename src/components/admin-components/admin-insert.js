import React, { Component } from 'react'
import axios from 'axios';

export default class adminInsert extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeProducer = this.onChangeProducer.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeImageurl = this.onChangeImageurl.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onChangeImdb = this.onChangeImdb.bind(this);
        this.onChangeShowtime = this.onChangeShowtime.bind(this);
        this.onChangeCast = this.onChangeCast.bind(this);

        this.state = {
            movieName: '',
            producer: '',
            year: '',
            Description: '',
            imageurl: '',
            genre: '',
            imdb: '',
            showtime: '',
            cast: ''
        }
    }

    onChangeMovieName(e){
        this.setState({
            movieName: e.target.value
        })
    }

    onChangeProducer(e) {
        this.setState({
            producer: e.target.value
        });
    }
    onChangeYear(e) {
        this.setState({
            year: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            Description: e.target.value
        });
    }
    onChangeImageurl(e) {
        this.setState({
            imageurl: e.target.value
        });
    }
    onChangeGenre(e) {
        this.setState({
            genre: e.target.value
        });
    }
    onChangeImdb(e) {
        this.setState({
            imdb: e.target.value
        });
    }

    onChangeCast(e){
        this.setState({
            cast: e.target.value
        });
    }

    onChangeShowtime(e){
        this.setState({
            showtime: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const movie = {
            movieName: this.state.movieName,
            producer: this.state.producer,
            year: this.state.year,
            Description: this.state.Description,
            imageurl: this.state.imageurl,
            genre: this.state.genre,
            imdb: this.state.imdb,
            showtime: this.state.showtime,
            cast: this.state.cast,
        }

        console.log(movie);

        axios.post('http://localhost:8280/movies/add', movie)
            .then(res => console.log(res.data), alert("Successfully submitted the group"));

        this.setState({
            movieName: '',
            producer: '',
            year: '',
            Description: '',
            imageurl: '',
            genre: '',
            imdb: '',
            showtime: '',
            cast: ''
            
        })

        window.location = '/admin-retrieve';
    }

    render() {
        return (
            <div>
                <h3>Create New Group Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Movie Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.movieName}
                            onChange={this.onChangeMovieName}
                        />
                    </div>
                    <div className="form-group">
                        <label> Producer </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.producer}
                            onChange={this.onChangeProducer}
                        />
                    </div>
                    <div className="form-group">
                        <label> Year </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.year}
                            onChange={this.onChangeYear}
                        />
                    </div>
                    <div className="form-group">
                        <label> Description </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.Description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label> Image URL </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.imageurl}
                            onChange={this.onChangeImageurl}
                        />
                    </div>
                    <div className="form-group">
                        <label> Genre </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.genre}
                            onChange={this.onChangeGenre}
                        />
                    </div>
                    <div className="form-group">
                        <label> IMDB </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.imdb}
                            onChange={this.onChangeImdb}
                        />
                    </div>
                    <div className="form-group">
                        <label> Showtime </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.showtime}
                            onChange={this.onChangeShowtime}
                        />
                    </div>
                    <div className="form-group">
                        <label> Cast </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.cast}
                            onChange={this.onChangeCast}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Group" className="btn btn-primary" />
                    </div>
                </form>

            </div>
        )
    }
}
