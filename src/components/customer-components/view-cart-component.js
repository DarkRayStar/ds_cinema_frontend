import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Movie = props => (
    <tr>
        <td>{props.movie.movieName}</td>
        <td>{props.movie.producer}</td>
        <td>{props.movie.year} </td>
        <td>{props.movie.imageurl} </td>
        <td>{props.movie.genre} </td>
        <td>{props.movie.imdb} </td>
        <td>{props.movie.theaterOpt} </td>
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

    onCheckout() {

        axios.get('http://localhost:5050/cart/')
            .then(response => {
                this.setState({ checkoutMap: response.data })
                console.log(this.state.checkoutMap.length);

                // console.log(this.state.checkoutMap);
            })
            .then(() => {
                var i = 0;
                for (i = 0; i < this.state.checkoutMap.length; i++) {
                    // console.log(this.state.checkoutMap[i].movieName);
                    this.state.items.push({ id: this.state.checkoutMap[i].movieName + ' - ' + this.state.checkoutMap[i].theaterOpt, quantity: 2 })
                }
                console.log(this.state.items);
            })

            .catch((error) => {
                console.log(error);
            })

        fetch("http://localhost:5050/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: this.state.items

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
                <h3>Cart</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Movie name</th>
                            <th>Producer</th>
                            <th>Year</th>
                            <th>Imageurl</th>
                            <th>Genre</th>
                            <th>IMDB</th>
                            <th>theaterOpt</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.movieList()} <br />
                    </tbody>
                </table>
                <button className="btn btn-primary" style={{ marginLeft: "550px" }} onClick={() => this.onCheckout()} >Checkout</button>
            </div>
        )
    }
}