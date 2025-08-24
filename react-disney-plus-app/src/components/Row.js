import React, {useCallback, useEffect, useState} from 'react'
import axios from '../api/axios';
import './Row.css';

const Row = ({title, id, fetchUrl}) => {
  const [movies, setMovies] = useState([]);

  /**
   * 아래 useCallback 은 fetchUrl이 변경될 때 함수를 생성하여 API 를 호출하게 한다.
   * 성능을 향상시키기 위해 화면이 계속 랜더링 될 때마다 생성 후 호출하는 것이 아닌
   * fetchUrl 이 변경될 때마다 생성 후 호출하게 해서 불필요한 API 호출을 막기 위함이다.
   */
  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
  }, [fetchUrl]);

  /**
   * fetchMovieData 의 값이 변경될 때 마다 재호출
   */
  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  return (
    <div>
      <h2>{title}</h2>
      <div className='slider'>
        <div className='slider__arrow-left'>
          <span className='arrow'
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
            }}>
            {"<"}
          </span>
        </div>
        <div id={id} className='row__posters'>
          {movies.map(movie => (
            <img
              key={movie.id}
              className='row__poster'
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.name}
            />
          ))}
        </div>
        <div className='slider__arrow-right'>
          <span className='arrow'
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80;
            }}>
            {">"}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Row
