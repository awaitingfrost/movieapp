import React, { useEffect, useState } from "react";
import Cards from "../card/Card";
import "./MovieList.css";
import { useParams } from "react-router-dom";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  //   useEffect(() => {
  //     getData();
  //   }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=15749655e055b0d4573177b0aec90443`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
      });
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "Popular").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
