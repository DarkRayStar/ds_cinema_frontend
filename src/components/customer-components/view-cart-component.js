import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './viewMod.css';
import './viewMovieStyles.css';

const Movie = props => (
    <tr>
        <td>{props.movie.movieName}</td>
        <td>{props.movie.producer}</td>
        <td>{props.movie.year} </td>
        <td>{props.movie.genre} </td>
        <td>{props.movie.imdb} </td>
        <td>{props.movie.theaterOpt} </td>
        <td>{props.movie.quantity} </td>
        <td>
            <a href="#" onClick={() => { props.deleteItem(props.movie._id) }}>Remove</a>
        </td>
    </tr>
)

export default class ViewCart extends Component {
    constructor(props) {
        super(props);

        this.deleteItem = this.deleteItem.bind(this)

        this.state = {
            movies: [],
            checkoutMap: [],
            items: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5050/cart/')
            .then(response => {
                this.setState({ movies: response.data })
                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteItem(id) {
        axios.delete('http://localhost:5050/cart/' + id)
            .then(response => { console.log(response.data) });
        this.setState({
            movies: this.state.movies.filter(el => el._id !== id)
        })
    }

    movieList() {
        return this.state.movies.map(currentmovie => {
            return <Movie movie={currentmovie} deleteItem={this.deleteItem} key={currentmovie._id} />;
        })
    }

    async onCheckout() {

        axios.delete('http://localhost:5050/cart/')
            .then(res => console.log(res.data));

        await axios.get('http://localhost:5050/cart/')
            .then(response => {
                this.setState({ checkoutMap: response.data })
                console.log(this.state.checkoutMap.length);

                // console.log(this.state.checkoutMap);
            })
            .then(() => {
                var i = 0;
                for (i = 0; i < this.state.checkoutMap.length; i++) {
                    // console.log(this.state.checkoutMap[i].movieName);
                    this.state.items.push({ id: this.state.checkoutMap[i].movieName + ' - ' + this.state.checkoutMap[i].theaterOpt, quantity: this.state.checkoutMap[i].quantity })
                }
                console.log(this.state.items);
            })

            .catch((error) => {
                console.log(error);
            })

        await fetch("http://localhost:5050/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                items: this.state.items
            }
            )
        })
            .then(res => {
                if (res.ok) return res.json()
                return res.json().then(json => Promise.reject(json))
            })
            .then(({ url }) => {
                window.location = url
            })
            .catch(e => {
                console.error(e.error)
            })
    }

    render() {
        return (
            <div>
                <div className="headingModsForViewVcl"> Movie Cart  </div>
                <table className="table table-hover table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>Movie name</th>
                            <th>Producer</th>
                            <th>Year</th>
                            <th>Genre</th>
                            <th>IMDB</th>
                            <th>Theater Option</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.movieList()} <br />
                    </tbody>
                </table>
                <div className="btnView">
                    <button style={{ marginLeft: "550px" }} onClick={() => this.onCheckout()} >Checkout</button>
                </div>
                <div className="btnCancel">
                    <Link to={"/home"}> <button style={{ marginLeft: "15px" }}>Back</button></Link>
                </div>
            </div>
        )
    }
}