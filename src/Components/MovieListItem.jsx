import React from 'react'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function MovieListItem(props) {
    return (
        <div className="group relative overflow-hidden basis-1/3">
            <img src={props.kaynak} alt='movie1' className='w-full h-full group-hover:scale-110 group-hover:opacity-50 duration-500' />
            <div className="absolute px-6 bottom-8">
                <h3 className='text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500 '>Oblivion</h3>
                <p className='text-sm text-gega-grey opacity-0 group-hover:opacity-100 duration-500 group-hover:mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, quia?</p>
                <div className=' flex space-x-5'>
                    <FontAwesomeIcon className='text-gega-grey opacity-0 group-hover:opacity-100 -mb-3 group-hover:mb-3 duration-500 cursor-pointer hover:text-gega-red' icon={faPlay} />
                    <FontAwesomeIcon className='text-gega-grey opacity-0 group-hover:opacity-100 -mb-3 group-hover:mb-3 duration-500 cursor-pointer hover:text-gega-red' icon={faArrowRight} />
                </div>
            </div>
        </div>
    )
}

export default MovieListItem