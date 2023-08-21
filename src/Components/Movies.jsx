import React from 'react'
import MovieList from './MovieList'

function Movies() {
  return (

    <div className='bg-black '>
      <div className="container">
        <h1 className='text-3xl text-gega-red '>Tüm Filmler</h1>

        <MovieList />

      </div>


    </div>


  )
}

export default Movies