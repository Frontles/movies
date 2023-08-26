import React from 'react'


import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Youtube from 'react-youtube'



function WatchTrailer(props) {



    const opts = {
        width: "100%",
        height: "550",

        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };


    return (props.Trigger) ? (
        <div className=' bg-black bg-opacity-90 z-20 fixed top-0 left-0 w-full h-screen flex justify-center items-center '>
            <div className="container px-10 lg:px-0 flex flex-col lg:space-x-16 space-y-10 lg:space-y-0  justify-center items-center opacity-100">



                <Youtube style={{ width: "100%", height: "100%" }} videoId={props.videoKey} opts={opts} />



                <button className='absolute top-0 left-1/2 lg:top-20 lg:-right-80' onClick={() => props.setTrigger(false)} >  <FontAwesomeIcon icon={faCircleXmark} size='2xl' /> </button>


            </div>
        </div>
    ) : ""
}

export default WatchTrailer