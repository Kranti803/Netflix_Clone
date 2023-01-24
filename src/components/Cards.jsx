import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import  movieTrailer  from 'movie-trailer';

const Cards = ({ title, url, simplified }) => {
  const [movies, setMovies] = useState([]);
  const [movieUrl, setMovieUrl] = useState("");

  useEffect(() => {
    axios.get(url).then((items) => {
      setMovies(items.data.results);
    });
  }, [url]);
  console.log(movies)


  const opts = {
    height: '390px',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  
  const handleTrailer = (item) =>{
    if(movieUrl){
      setMovieUrl('');
    }else{
      movieTrailer(item?.title || "" )
      .then((url)=>{
      const urlParams = new URLSearchParams(new URL(url).search);
      setMovieUrl(urlParams.get('v'));
      })
      
      .catch((error)=>console.log(error.message))
    }
  }



  return (
    <div className="cards-row">
      <h3 className={`${simplified? "title":""}`}>{title}</h3>
      <main className="slider">
        {movies.map((item) => (
          <div key={item?.id} className={`card ${simplified ? "first_row_card": "" }`}>
            <img
              src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
              alt=""
              onClick={()=>handleTrailer(item)}
            />
          </div>
        ))}
      </main>
        {movieUrl && <YouTube videoId={movieUrl} opts={opts} />}
    </div>
  );
};

export default Cards;
