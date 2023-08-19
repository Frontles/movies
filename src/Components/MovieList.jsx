import React from 'react'
import { Link } from 'react-router-dom';

import MovieListItem from './MovieListItem';
import HotNewsItem from './HotNewsItem';


function MovieList() {
    return (
        <div className='py-24 bg-black'>
            <div className="container flex flex-col lg:flex-row lg:space-x-16 space-y-10 lg:space-y-0">
                {/* left content */}
                <div className="basis-2/3 ">
                    <div className="flex space-x-2 divide-x divide-gega-red divide-opacity-50 pl-10 lg:pl-0 mb-8">
                        <Link to="#"><h2 className='text-gega-white  hover:text-gega-red duration-500'>Latest</h2></Link>
                        <Link to="#"><h2 className='text-gega-white pl-2  hover:text-gega-red duration-500'>Popular</h2></Link>
                        <Link to="#"><h2 className='text-gega-white pl-2  hover:text-gega-red duration-500'>Best</h2></Link>
                    </div>

                    <div className="flex flex-wrap ">
                        {/* Movie Items */}
                        <MovieListItem kaynak='https://gega-project.netlify.app/images/mv1.jpg' />
                        <MovieListItem kaynak='https://gega-project.netlify.app/images/mv2.jpg' />
                        <MovieListItem kaynak='https://gega-project.netlify.app/images/mv3.jpg' />
                        <MovieListItem kaynak='https://gega-project.netlify.app/images/mv4.jpg' />
                        <MovieListItem kaynak='https://gega-project.netlify.app/images/mv5.jpg' />
                        <MovieListItem kaynak='https://gega-project.netlify.app/images/mv6.jpg' />
                    </div>

                </div>
                {/* right content */}
                <div className="basis-1/3 pl-10 lg:pl-0">
                    <h2 className='text-gega-white mb-8'>HOT news</h2>
                    <div className="flex flex-row lg:flex-col lg:h-full lg:pb-16 justify-start lg:justify-between flex-wrap lg:flex-nowrap space-y-4">
                        <HotNewsItem kaynak="https://gega-project.netlify.app/images/new1.jpg" />
                        <HotNewsItem kaynak="https://gega-project.netlify.app/images/new1.jpg" />
                        <HotNewsItem kaynak="https://gega-project.netlify.app/images/new1.jpg" />
                        <HotNewsItem kaynak="https://gega-project.netlify.app/images/new1.jpg" />
                        <HotNewsItem kaynak="https://gega-project.netlify.app/images/new1.jpg" />
                        <HotNewsItem kaynak="https://gega-project.netlify.app/images/new1.jpg" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MovieList