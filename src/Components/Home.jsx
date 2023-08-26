import React from 'react'
import Hero from './Hero'
import MovieList from './MovieList'
import Matrix from './Matrix'
import PopularPosts from './PopularPosts'
import HotNews from './HotNews'
function Home() {
  return (
    <>
      <Hero />
      <MovieList hotnews={<HotNews />} page="home" />
      <Matrix />
      <PopularPosts />
    </>
  )
}

export default Home