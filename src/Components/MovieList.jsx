import React, { memo } from 'react'
import { Link } from 'react-router-dom';

import MovieListItem from './MovieListItem';


function MovieList(props) {
    return (
        <div className='py-24 bg-black'>
            <div className="container flex flex-col lg:flex-row lg:space-x-16 space-y-10 lg:space-y-0">
                {/* Movie List */}
                <div className={props.hotnews ? `basis-2/3` : ``}>
                    <div className="flex space-x-2 divide-x divide-gega-red divide-opacity-50 pl-10 lg:pl-0 mb-8">
                        <Link to="#"><h2 className='text-gega-white  hover:text-gega-red duration-500'>Latest</h2></Link>
                        <Link to="#"><h2 className='text-gega-white pl-2  hover:text-gega-red duration-500'>Popular</h2></Link>
                        <Link to="#"><h2 className='text-gega-white pl-2  hover:text-gega-red duration-500'>Best</h2></Link>
                    </div>

                    <div className="flex flex-wrap ">
                        {/* Movie Items */}
                        <MovieListItem />

                    </div>

                </div>
                {/* Hot News  */}
                {props.hotnews}
            </div>
        </div>
    )
}

export default memo(MovieList)