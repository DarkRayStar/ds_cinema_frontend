import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardHeader,
    MDBCardImage,
    MDBCardOverlay,
    MDBCardSubTitle,
    MDBCardTitle,
    MDBCardText,
    MDBCardGroup,
    MDBCardLink,
  } from 'mdb-react-ui-kit';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState('');

    const searchText = (event) => {
        setFilter(event.target.value)
    }

    let dataSearch = movies.filter(movie => {
        return Object.keys(movie).some(key =>
            movie[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    });

    useEffect(() => {
        axios.get("http://localhost:5050/movies")
            .then(res => {
                console.log(res)
                setMovies(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <section className="py-4 container">
            <div className="row justify-content-center">

                <div className="col-12 mb-5">
                    <div className="mb-3 col-4 mx-auto text-center">
                        <label className="form-label h4"> Search </label>
                        <input className="form-control" type="text" value={filter} onChange={searchText.bind(this)} />
                    </div>
                </div>

                {dataSearch.map((movie, index) => {
                    return (
                        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                            <div className="card p-0 overflow-hidden h-100 shadow">
                                <img src={movie.imageurl} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title"> {movie.movieName} </h5>
                                    <p className="card-text"> {movie.producer} </p>
                                </div>
                            </div>
                        </div>

                    )
                })}

            </div>
        </section>
    )
}

export default HomePage
