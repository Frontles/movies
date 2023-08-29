import React from 'react'


import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faMagnifyingGlass, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";
import axios from "axios";


export function SearchItem(props) {

    const [searchMovies, SetsearchMovies] = useState([{}]);


    useEffect(() => {
        const MoviesData = async () => {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=tr-TR`);
            const data = res.data.results;

            const filtrelenmisFilmler = data.filter((film) => {
                return (props.arananfilm ? film.title.toLowerCase().indexOf(props.arananfilm.toLowerCase()) !== -1 : "")

            })


            SetsearchMovies(filtrelenmisFilmler.slice(0, 10))


        }
        MoviesData()


    }, [props.arananfilm])


    const truncateOverview = (string, maxLength) => {
        if (!string) return null;
        if (string.length <= maxLength) return string;
        return `${string.substring(0, maxLength)} ...`
    }






    return searchMovies.map((movie, index) => (
        <div className="group relative  w-full h-full flex flex-col sm:flex-row items-center  sm:items-start bg-white p-5 md:p-10 " key={index} >
            <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face/" + movie.poster_path} alt={movie.title} className='  sm:w-4/12 md:w-3/12 lg:w-2/12 group-hover:scale-110 object-cover duration-500' />
            <div className="py-10 sm:py-0 sm:px-10">
                <h3 className=' text-gega-red md:text-black group-hover:text-gega-melon text-2xl md:group-hover:text-3xl duration-500 '>{movie.title}</h3>
                <p className='text-black  text-sm py-10 pr-10 duration-500 '>{truncateOverview(movie.overview, 200)}</p>
                <div className=' relative lg:absolute bottom-0  flex md:my-12 space-x-5 sm:items-center  lg:items-center lg:justify-center '>

                    <Link to={`/movie/${movie.id}`} ><FontAwesomeIcon className='text-gega-melon bg-gega-red p-3 lg:opacity-0 group-hover:opacity-100 lg:-mb-3 group-hover:mb-3 duration-500 cursor-pointer hover:text-gega-red hover:bg-gega-melon' icon={faArrowRight} /></Link>
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
        <div className=' bg-black bg-opacity-80 z-20 fixed top-0 left-0 w-full h-screen flex justify-center items-center '>
            <div className="container px-10 lg:px-0 flex flex-col lg:space-x-16 space-y-10 lg:space-y-0 opacity-100">

                <div className='px-4 py-2 rounded-xl h-10 w-full bg-white flex items-center justify-between duration-1000'>
                    <FontAwesomeIcon className=' text-blue-700 transition duration-300' icon={faMagnifyingGlass} />

                    <input name="ara" placeholder='Ara' className='border-b text-black  bg-transparent h-full text-lg w-full  focus:outline-none ml-2' value={search} onChange={Ara} />
                    {isNaN(search) ? <FontAwesomeIcon className=' text-black ml-2' icon={faCircleXmark} size='xl' onClick={() => { setSearch("") }} /> : ""}
                </div>

                <div className=" flex flex-col w-full !m-0 !mt-10  bg-white shadow-md !rounded-xl max-h-128 overflow-y-scroll  items-center justify-between duration-1000  ">
                    {/* Movie Items   */}
                    <SearchItem arananfilm={search} />

                </div>



                <button className='absolute top-0 left-1/2 lg:top-20 lg:-right-80' onClick={() => props.setTrigger(false)} >  <FontAwesomeIcon icon={faCircleXmark} size='2xl' /> </button>


            </div>
        </div>
    ) : ""
}
