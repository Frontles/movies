import React, { memo } from 'react'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";
import axios from "axios";

function MovieListItem(props) {


    const [movies, SetMovies] = useState([{}]);


    useEffect(() => {
        const MoviesData = async () => {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=tr-TR`);
            const data = res.data.results;

            const filtrelenmisFilmler = data.filter((film) => {
                return (props.kategori ? film.genre_ids.indexOf(props.kategori) !== -1 : "")

            })

            SetMovies(filtrelenmisFilmler.slice(0, 6))



        }
        MoviesData()



    }, [props.kategori])

    const truncateOverview = (string, maxLength) => {
        if (!string) return null;
        if (string.length <= maxLength) return string;
        return `${string.substring(0, maxLength)} ...`
    }




    return movies.length !== 0 ? movies.map((movie, index) => (
        <div className="group relative overflow-hidden basis-1/3" key={index} >
            <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" + movie.poster_path} alt={movie.title} className='w-full h-full group-hover:scale-110 group-hover:opacity-30 duration-500' />
            <div className="absolute px-3 md:px-6 bottom-2 md:bottom-8 ">
                <h3 className='text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500 '>{movie.title}</h3>
                <p className='text-xs md:text-sm text-gega-grey opacity-0 group-hover:opacity-100 duration-500 group-hover:mb-2 md:group-hover:mb-5'>{truncateOverview(movie.overview, 50)}</p>
                <div className=' flex space-x-5'>
                    <FontAwesomeIcon className='text-gega-grey opacity-0 group-hover:opacity-100 -mb-3 group-hover:mb-3 duration-500 cursor-pointer hover:text-gega-red' icon={faPlay} />
                    <FontAwesomeIcon className='text-gega-grey opacity-0 group-hover:opacity-100 -mb-3 group-hover:mb-3 duration-500 cursor-pointer hover:text-gega-red' icon={faArrowRight} />
                </div>
            </div>
        </div>
    )) : <div className='text-white py-24 my-10'>Bu Kategoriye ait Kayıt Bulunamadı</div>

}

export default memo(MovieListItem)