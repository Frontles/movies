import React, { useState, useEffect } from 'react'
import axios from 'axios';

function HotNewsItem(props) {

    const [movies, SetMovies] = useState([{}]);


    useEffect(() => {
        const MoviesData = async () => {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=tr-TR`);
            const data = res.data.results;



            SetMovies(data.slice(0, 6))




        }
        MoviesData()



    }, [])


    const truncateOverview = (string, maxLength) => {
        if (!string) return null;
        if (string.length <= maxLength) return string;
        return `${string.substring(0, maxLength)} ...`
    }


    return (movies.map((movie, index) => (
        <div key={index} className='flex space-x-12 group cursor-pointer items-center basis-3/4 md:basis-1/2'>
            <div className='basis-1/3 h-full'>
                <img src={` https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt='news' className='h-full w-full object-cover' />
            </div>

            <div className='group-hover:text-gega-melon text-gega-grey basis-2/3'>
                <p className='mb-2 text-sm'>{truncateOverview(movie.overview, 120)}</p>
                <p className='font-gemunu uppercase bold text-sm'>Çıkış Tarihi: {movie.release_date}</p>
            </div>
        </div>
    ))

    )
}

export default HotNewsItem