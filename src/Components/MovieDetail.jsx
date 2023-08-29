import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import WatchTrailer from './WatchTrailer'

function MovieDetail() {

    const { movie_id } = useParams()
    const [movie, setMovie] = useState([])
    const [WatchButton, setWatchButton] = useState(false)
    const [VideoKey, setVideoKey] = useState([])



    useEffect(() => {
        const MoviesData = async () => {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`);
            setMovie(res.data)

            const trailer = res.data.videos.results.find(vid => vid.name === 'Official Trailer')
            if (trailer === "" || trailer === undefined) {
                setVideoKey("")
            } else {
                setVideoKey(trailer.key)

            }




        }
        MoviesData()


    }, [movie_id])


    return (
        <>

            <div className='' style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path})` }}>
                <div className='h-full w-full flex items-center bg-cover bg-center duration-500 py-10' style={{ backgroundImage: "linear-gradient(to right, rgba(31.5, 31.5, 52.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 52.5, 0.84) 50%, rgba(31.5, 31.5, 52.5, 0.84) 100%)" }} >



                    {/* img */}
                    <div className='container py-10'>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:space-x-7 space-y-5 lg:space-y-0">
                            <div className='flex items-center justify-center gap-5 basis-1/3'>
                                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} className=' max-h-72 md:max-h-80 lg:max-h-max lg:w-auto  object-cover' alt='movie' />

                            </div>
                            <div className='basis-2/3 space-y-3 px-5 lg:px-0'>
                                <h2 className="text-4xl font-bold text-white flex items-center ">
                                    {movie.title}   <span className='text-xl text-gega-grey'>     (   IMDB : {movie.vote_average?.toFixed(1)} )</span>
                                </h2>
                                <p className='text-sm text-gega-grey'>Çıkış Tarihi : {movie.release_date} •  {movie.runtime} Dakika  </p>
                                <p className='text-sm text-gega-grey'>  {movie.genres?.map((genre, index) => (<span key={index} className=' border rounded-xl px-4 py-1 mx-1'  >{genre.name}</span>))} </p>
                                <h3 className='font-bold text-white text-xl'>Özet</h3>
                                <p className='text-sm text-gega-grey'>{movie.overview}</p>

                                {VideoKey.length !== 0 ?

                                    <div className='flex flex-col text-gega-white py-2'>
                                        <button className='text-gega-white border max-w-fit border-gega-red px-4 py-2 duration-1000  hover:bg-gega-red hover:text-white hover:border-transparent text-sm' onClick={() => { setWatchButton(true) }}>Tanıtımı Izle</button>


                                        <WatchTrailer Trigger={WatchButton} setTrigger={setWatchButton} videoKey={VideoKey} />
                                    </div>

                                    : ""}

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default MovieDetail