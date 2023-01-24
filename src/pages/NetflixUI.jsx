import React, { useEffect, useState } from "react";
import Navbar from "../components/NetflixNav";
import { BsPlayFill } from "react-icons/bs";
import requests from "../Requests";
import axios from "axios";
import Cards from "../components/Cards";


const NetflixUI = () => {

  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      const data = res.data;
      setMovies(data.results);
    });
  }, []);





  return (
    <>
      <div className="home">
        <Navbar />
        <section className="main">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt=""
          />
          <div className="description">
            <h2>{movie?.original_title}</h2>
            <aside>
              <button>
                <BsPlayFill size={25} />
                Play
              </button>
              <button>Watch Later</button>
            </aside>
            <p>Released on : {movie?.release_date}</p>
            <p>{movie?.overview}</p>
          </div>
        </section>
      </div>
      <aside className="second_home">
        <Cards
          simplified
          title="Netflix Originals"
          url={requests.requestNetflixOriginals}
        />
        <Cards title="Trending" url={requests.requestTrending} />
        <Cards title="Top Rated" url={requests.requestTopRated} />
        <Cards title="Popular" url={requests.requestPopular} />
        <Cards title="Upcoming" url={requests.requestUpcoming} />
        <Cards title="Action" url={requests.requestAction} />
        <Cards title="Comedy" url={requests.requestComedy} />
        <Cards title="Horror" url={requests.requestHorror} />
        <Cards title="Documentaries" url={requests.requestDocumentaries} />
      </aside>
    </>
  );
};

export default NetflixUI;
