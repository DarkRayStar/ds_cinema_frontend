import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
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
    MDBRow,
    MDBCol,
    MDBBtn
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
        <div>

            <div className="col-12 mb-5">
                <div className="mb-3 col-4 mx-auto text-center">
                    <label className="form-label h4 mt-3"> Search </label>
                    <input className="form-control" type="text" value={filter} onChange={searchText.bind(this)} />
                </div>
            </div>
            <div class="mx-auto">
                <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{ paddingLeft: '80px' }}>
                    {dataSearch.map((movie, index) => {
                        return (
                            <MDBCol>
                                <MDBCard className='h-100' style={{ width: '300px' }}>
                                    <MDBCardImage
                                        src={movie.imageurl}
                                        alt='...'
                                        position='top'
                                        style={{ width: '300px', height: '425px' }}
                                    />
                                    <MDBCardBody >
                                        <MDBCardTitle > {movie.movieName} </MDBCardTitle>
                                        <MDBCardText >
                                            {movie.year}
                                        </MDBCardText>
                                    </MDBCardBody>
                                    <MDBCardFooter>

                                        <small className='text-muted'> {movie.genre}</small> |
                                        <small className='text-muted'> {movie.imdb} imdb Rating</small>
                                        <Link to={"/one-movie/view/" + movie._id}><MDBBtn class="btn btn-outline-secondary btn-sm" href='#' style={{ float: "right" }}> More </MDBBtn></Link>

                                    </MDBCardFooter>
                                </MDBCard>
                            </MDBCol>
                        )
                    })}
                </MDBRow>
            </div>
        </div>
        // <section className="py-4 container">
        //     <div className="row justify-content-center">

        //         <div className="col-12 mb-5">
        //             <div className="mb-3 col-4 mx-auto text-center">
        //                 <label className="form-label h4"> Search </label>
        //                 <input className="form-control" type="text" value={filter} onChange={searchText.bind(this)} />
        //             </div>
        //         </div>

        //         {dataSearch.map((movie, index) => {
        //             return (
        //                 <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        //                     <div className="card p-0 overflow-hidden h-100 shadow">
        //                         <img src={movie.imageurl} className="card-img-top" />
        //                         <div className="card-body">
        //                             <h5 className="card-title"> {movie.movieName} </h5>
        //                             <p className="card-text"> {movie.producer} </p>
        //                         </div>
        //                     </div>
        //                 </div>

        //             )
        //         })}

        //     </div>
        // </section>
    )
}

export default HomePage
