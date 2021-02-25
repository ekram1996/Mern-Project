import '../styles/movies.css';
import axios from "axios";
import 'react-slice';
import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';

const MoviesList = () => {
	const [movies, setMovies] = useState([]);
	
	useEffect(()=>{
		axios.get('http://localhost:8000/api/getAllMovies')
			.then(res=>{
			  setMovies(res.data);
			});
	},[])

	return (
		<div className='movie-container'>
			{movies.map((movie) =>

			<div className="movie" >
				<img src={movie.imageUrl} alt="poster" />
				<div className="movie-date">
					<h4>{
					movie.showingDate.slice(0,10)}<br />
					</h4>
					<h4>{
					movie.showingDate.slice(11,19)}<br />
					</h4>
					
				</div>
				<div className="overview">
					<div>
						<h4>{movie.title}</h4>
						<iframe src={movie.trailerUrl} height="100%" width="100%" title="W3Schools Free Online Web Tutorials"></iframe>
						<p>{movie.description}</p>
					</div>
					<button className="buy"><Link  to={"/tickets/"+ movie._id} style={{color:"white"}}>Book Now</Link></button>
					{/* <button className="buy" onClick={()=>navigate("/tickets"+movie._id)}>Book Now</button> */}
					{/* onClick={ (e)=>{deleteAuthor(getAuthorId(author))} } */}
				</div>
			</div>
			)}
			
		</div>
	);
};

export default MoviesList;
