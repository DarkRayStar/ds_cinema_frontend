import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './viewMod.css';
import './viewMovieStyles.css';

export default class ViewOneMovie extends Component {
    constructor(props) {
        super(props);

        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeProducer = this.onChangeProducer.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        // this.onChangeDescription = this.onChangeDescription(this);
        this.onChangeImageurl = this.onChangeImageurl.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onChangeImdb = this.onChangeImdb.bind(this);
        this.onChangeTeaterOption = this.onChangeTeaterOption.bind(this);
        this.onChangeQuanity = this.onChangeQuanity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            movieName: '',
            producer: '',
            year: '',
            Description: '',
            imageurl: '',
            genre: '',
            imdb: '',
            theaterOpt: '',
            quantity: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5050/movies/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    movieName: response.data.movieName,
                    producer: response.data.producer,
                    year: response.data.year,
                    Description: response.data.Description,
                    imageurl: response.data.imageurl,
                    genre: response.data.genre,
                    imdb: response.data.imdb,
                    theaterOpt: response.data.theaterOpt,
                    quantity: response.data.quantity
                })
                console.log(response);
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

    // onChangeDescription(e) {
    //     this.setState({
    //         Description: e.target.value
    //     })
    // }

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

    onChangeQuanity(e) {
        this.setState({
            quantity: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const movie = {
            movieName: this.state.movieName,
            producer: this.state.producer,
            year: this.state.year,
            // Description: this.state.Description,
            imageurl: this.state.imageurl,
            genre: this.state.genre,
            imdb: this.state.imdb,
            theaterOpt: this.state.theaterOpt,
            quantity: this.state.quantity

        }

        console.log(movie);

        axios.post('http://localhost:5050/cart/add', movie)
            .then(res => console.log(res.data));

        alert("Movie added to the Cart !")
        window.location = '/cart/view';
    }

    render() {
        return (
            <div>


                <header class="section ">
                    <section class="full-width ">
                        <div className="row">
                            <div className="headingModsForViewVcl"> Book Your Movie </div>

                            <div class="containerView" >

                                <img src={this.state.imageurl} alt="img" />

                                <div class="containerViewHeading ">
                                    <div class="containerViewH1 ">
                                        {this.state.movieName}
                                    </div>
                                    <div class="containerViewSubHead">
                                        IMDB {this.state.imdb} <br /> {this.state.genre}

                                    </div>
                                    <div class="pView1">
                                        <p>
                                            {this.state.Description}

                                        </p>
                                    </div>
                                    <div class="pView2">
                                        <p>
                                            Produced by {this.state.producer} in {this.state.year}.
                                        </p>
                                    </div>
                                    <label className='labelMOD'> Select a theater option : </label>	&nbsp;
                                    <select name="state" id="state"
                                        onChange={this.onChangeTeaterOption}>
                                        <option value="" selected>Choose option</option>
                                        <option value="4K CINEMA">4K CINEMA</option>
                                        <option value="DOLBY THEATER">DOLBY THEATER</option>
                                    </select>
                                    {/* <br /> */}
                                    &nbsp;&nbsp;&nbsp;&nbsp;

                                    <label className='labelMOD'> Tickets Quantity : </label>	&nbsp;
                                    <input type="number" onChange={this.onChangeQuanity} placeholder="Quanity" /> <br />

                                    <div className="btnView">
                                        <button style={{ marginTop: "20px" }} onClick={this.onSubmit} > Add to Cart </button>
                                    </div>
                                    <div className="btnCancel">
                                        <Link to={"/movie/view"}> <button className="btn btn-primary" style={{ marginLeft: "15px", marginTop: "7px" }}>Cancel</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </header>





                {/* <h3>Your Movie</h3>
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
                        <label>imageurl : </label> <img src={this.state.imageurl} /> {this.onChangeImageurl}
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
                </form> */}
            </div>
        )
    }
}