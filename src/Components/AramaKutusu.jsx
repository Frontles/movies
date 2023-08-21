import React from 'react'


import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";
import axios from "axios";


function SearchItem(props) {

    const [searchMovies, SetsearchMovies] = useState([{}]);


    useEffect(() => {
        const MoviesData = async () => {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=tr-TR`);
            const data = res.data.results;

            const filtrelenmisFilmler = data.filter((film) => {
                return (props.arananfilm ? film.title.toLowerCase().indexOf(props.arananfilm.toLowerCase()) !== -1 : "")

            })


            SetsearchMovies(filtrelenmisFilmler.slice(0, 3))


        }
        MoviesData()


    }, [props.arananfilm])



    const truncateOverview = (string, maxLength) => {
        if (!string) return null;
        if (string.length <= maxLength) return string;
        return `${string.substring(0, maxLength)} ...`
    }




    return searchMovies.map((movie, index) => (
        <div className="group relative top-5 overflow-hidden w-full h-full" key={index} >
            <img src={"https://www.themoviedb.org/t/p/w533_and_h300_bestv2" + movie.poster_path} alt={movie.title} className='w-full h-full group-hover:scale-110 group-hover:opacity-30 duration-500' />
            <div className="absolute px-3 md:px-6 bottom-2 md:bottom-8 ">
                <h3 className='text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500 '>{movie.title}</h3>
                <div className=' flex space-x-5'>
                    <FontAwesomeIcon className='text-gega-grey opacity-0 group-hover:opacity-100 -mb-3 group-hover:mb-3 duration-500 cursor-pointer hover:text-gega-red' icon={faPlay} />
                    <FontAwesomeIcon className='text-gega-grey opacity-0 group-hover:opacity-100 -mb-3 group-hover:mb-3 duration-500 cursor-pointer hover:text-gega-red' icon={faArrowRight} />
                </div>
            </div>
        </div>
    ))
}



export default function AramaKutusu(props) {
    const [search, setSearch] = useState("");

    const Ara = (e) => {
        setSearch(e.target.value)

    }

    return (props.Trigger) ? (
        <div className=' bg-black opacity-80 z-20 fixed top-0 left-0 w-full h-screen flex justify-center items-center'>
            <div className="container  flex flex-col   lg:space-x-16 space-y-10 lg:space-y-0 transition-all duration-500 opacity-100">




                <form className='absolute top-36 left-36'>
                    <input name="ara" placeholder='Ara' className='border-b w-128 border-gega-red bg-transparent focus:outline-none transition duration-300' value={search} onChange={Ara} />
                </form>




                <div className="flex flex-col w-full h-full  ">
                    {/* Movie Items */}
                    <SearchItem arananfilm={search} />
                </div>


                <button className='absolute top-36 right-36' onClick={() => props.setTrigger(false)} >close</button>


            </div>
        </div>
    ) : ""
}
