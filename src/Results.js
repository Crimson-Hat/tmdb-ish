import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import Rating from "@material-ui/lab/Rating";
import TextTruncate from "react-text-truncate";
import "./Results.css";

function Results({ searchResult, setMovieId }) {

	const handleClick = (movie) => {
		setMovieId(movie);
	}

	return (
		<div className="list results">

			<div class="list__trending list__big">
				<h4>Search Results</h4>
				<div class="list__items list__items-big">
					{ searchResult?.map((movie) =>
						(<div class="list__item" onClick={() => handleClick(movie)}>
							<img src={`${imageBase}${movie.poster_path || movie.backdrop_path}`} />
							<div className="list__itemInfo">
								<h5 className="list__itemTitle">{movie.title || movie.original_title || movie.name || movie.original_name}</h5>
								<TextTruncate
									line={2}
									element="p"
									containerClassName="list__itemOverview"
									truncateText="…"
									text={movie.overview}
								/>
								{ movie.vote_average && 
								<div className="list__rating">
									<Rating name="movie-rating" className="movieRating" value={movie.vote_average / 2} precision={0.5} icon={<StarRoundedIcon fontSize="inherit" readOnly />}/>
									<small className="list__likes">{movie.vote_average / 2}</small>
								</div> }
							</div>
						</div>)
					)}
				</div>
			</div>

		</div>
	);
}

export default Results;