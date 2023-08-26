import React, { memo } from 'react'
import MovieList from './MovieList'



function Movies() {

  return (

    <div className='bg-black '>
      <div className="container movieCategory">
        <h1 className='text-3xl text-gega-red '>Film Kategorileri</h1>

        <MovieList page="movies" />

      </div>


    </div>


  )
}

export default memo(Movies)