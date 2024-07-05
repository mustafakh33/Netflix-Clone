import './Player.css'
import back_arrow_icon from "../../assets/back_arrow_icon.png"
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Player = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })
  console.log(apiData)
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2U1NjliY2I0NTNkMGQ0YWZkNDE4YjFhMjk1N2ZlYSIsIm5iZiI6MTcxOTc3NzE5NS45NTMzNjMsInN1YiI6IjY2ODFiNjQyZDhjYTI0NTg0ZjM0YWRmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K70lcp_EkLmD8yzlvHVwtXFvDurZ-yrCQZR3Wcg4U1w'
    }
  };
  useEffect(() => {   
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));
  },[])
  
  return (
    <div className='player'>
      <img onClick={() => {
        navigate('/')
      }
      } src={back_arrow_icon} alt="" />
      <iframe width='90%' height="90%" src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
