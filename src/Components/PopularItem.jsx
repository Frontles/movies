import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function PopularItem(props) {
    return (

        <div className={`col-span-6 md:col-span-${props.Kapladigiyer}  border border-gega-red`}>
            <div className="border-b border-gega-melon flex justify-between p-2 px-4 items-center ">
                <h3>Lorem, ipsum dolor...</h3>
                <img src='https://gega-project.netlify.app/images/userava1.jpg' alt='avatar' className='rounded-full' />
            </div>
            <div className="border-b border-gega-melon flex justify-between p-2 px-4 items-center text-sm py-4 ">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur temporibus dolorem nihil excepturi quos.
                    Amet cupiditate aperiam temporibus perferendis?
                </p>
            </div>
            <div className="border-b border-gega-melon flex justify-end p-2 px-4 items-center text-sm py-4 ">
                <p className='text-sm font-gemunu'>ON DEC 17, 2022</p>

                <div className='flex px-4 space-x-4'>
                    <p><FontAwesomeIcon icon={faComment} className='pr-1' />25</p>
                    <p><FontAwesomeIcon icon={faHeart} className='pr-1' />31</p>
                </div>
            </div>
        </div >
    )
}

export default PopularItem