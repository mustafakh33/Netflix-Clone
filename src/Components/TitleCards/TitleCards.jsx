import   './TitleCards.css'
import { useRef, useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const TitleCards = ({title, category}) => {
  const [apiData, setApiData] = useState([]);
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2U1NjliY2I0NTNkMGQ0YWZkNDE4YjFhMjk1N2ZlYSIsIm5iZiI6MTcxOTc3NzE5NS45NTMzNjMsInN1YiI6IjY2ODFiNjQyZDhjYTI0NTg0ZjM0YWRmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K70lcp_EkLmD8yzlvHVwtXFvDurZ-yrCQZR3Wcg4U1w'
    }
  };
  const cardsRef = useRef();
  const handlewheel = (e)=>{
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  }
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel',handlewheel)
  },[])
  
  return (
    <div className='titlecards'>
      <h2>{title? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          )
        })}
      </div>
    </div> 
  )
}

export default TitleCards
