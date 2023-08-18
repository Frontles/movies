import React from 'react'
import { Link } from 'react-router-dom';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
                        <div className="group relative overflow-hidden basis-1/3">
                            <img src='https://gega-project.netlify.app/images/mv1.jpg' alt='movie1' className='w-full h-full group-hover:scale-110 group-hover:opacity-50 duration-500' />
                            <div className="absolute px-6 bottom-8">
                                <h3 className='text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500 '>Oblivion</h3>
                                <p className='text-sm text-gega-grey opacity-0 group-hover:opacity-100 duration-500 group-hover:mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, quia?</p>
                                <div className=' flex space-x-5'>
                                    <FontAwesomeIcon className='text-gega-grey opacity-0 group-hover:opacity-100 -mb-3 group-hover:mb-3 duration-500 cursor-pointer hover:text-gega-red' icon={faPlay} />
                                    <FontAwesomeIcon className='text-gega-grey opacity-0 group-hover:opacity-100 -mb-3 group-hover:mb-3 duration-500 cursor-pointer hover:text-gega-red' icon={faArrowRight} />
                                </div>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden basis-1/3">
                            <img src='https://gega-project.netlify.app/images/mv2.jpg' alt='movie1' className='w-full h-full group-hover:scale-110 group-hover:opacity-50 duration-500' />
                            <div className="absolute px-6 bottom-8">
                                <h3 className='text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500 '>Oblivion</h3>
                                <p className='text-sm text-gega-grey opacity-0 group-hover:opacity-100 duration-500 group-hover:mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, quia?</p>
                                <div className=' flex space-x-5'>
                                    <FontAwesomeIcon className='text-gega-grey opacity-0 group-hover:opacity-100 -mb-3 group-hover:mb-3 duration-500 cursor-pointer hover:text-gega-red' icon={faPlay} />
                                    <FontAwesomeIcon className='text-gega-grey opacity-0 group-hover:opacity-100 -mb-3 group-hover:mb-3 duration-500 cursor-pointer hover:text-gega-red' icon={faArrowRight} />
                                </div>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden basis-1/3">
                            <img src='https://gega-project.netlify.app/images/mv3.jpg' alt='movie1' className='w-full h-full group-hover:scale-110 group-hover:opacity-50 duration-500' />
                            <div className="absolute px-6 bottom-8">
                                <h3 className='text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500 '>Oblivion</h3>
                                <p className='text-sm text-gega-grey opacity-0 group-hover:opacity-100 duration-500 group-hover:mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, quia?</p>
                                <div className=' flex space-x-5'>
                                    <FontAwesomeIcon className='text-gega-grey opacity-0 group-hover:opacity-100 -mb-3 group-hover:mb-3 duration-500 cursor-pointer hover:text-gega-red' icon={faPlay} />
                                    <FontAwesomeIcon className='text-gega-grey opacity-0 group-hover:opacity-100 -mb-3 group-hover:mb-3 duration-500 cursor-pointer hover:text-gega-red' icon={faArrowRight} />
                                </div>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden basis-1/3">
                            <img src='https://gega-project.netlify.app/images/mv4.jpg' alt='movie1' className='w-full h-full group-hover:scale-110 group-hover:opacity-50 duration-500' />
                            <div className="absolute px-6 bottom-8">
                                <h3 className='text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500 '>Oblivion</h3>
                                <p className='text-sm text-gega-grey opacity-0 group-hover:opacity-100 duration-500 group-hover:mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, quia?</p>
                                <div className=' flex space-x-5'>
                                    <FontAwesomeIcon className='text-gega-grey opacity-0 group-hover:opacity-100 -mb-3 group-hover:mb-3 duration-500 cursor-pointer hover:text-gega-red' icon={faPlay} />
                                    <FontAwesomeIcon className='text-gega-grey opacity-0 group-hover:opacity-100 -mb-3 group-hover:mb-3 duration-500 cursor-pointer hover:text-gega-red' icon={faArrowRight} />
                                </div>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden basis-1/3">
                            <img src='https://gega-project.netlify.app/images/mv5.jpg' alt='movie1' className='w-full h-full group-hover:scale-110 group-hover:opacity-50 duration-500' />
                            <div className="absolute px-6 bottom-8">
                                <h3 className='text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500 '>Oblivion</h3>
                                <p className='text-sm text-gega-grey opacity-0 group-hover:opacity-100 duration-500 group-hover:mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, quia?</p>
                                <div className=' flex space-x-5'>
                                    <FontAwesomeIcon className='text-gega-grey opacity-0 group-hover:opacity-100 -mb-3 group-hover:mb-3 duration-500 cursor-pointer hover:text-gega-red' icon={faPlay} />
                                    <FontAwesomeIcon className='text-gega-grey opacity-0 group-hover:opacity-100 -mb-3 group-hover:mb-3 duration-500 cursor-pointer hover:text-gega-red' icon={faArrowRight} />
                                </div>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden basis-1/3">
                            <img src='https://gega-project.netlify.app/images/mv6.jpg' alt='movie1' className='w-full h-full group-hover:scale-110 group-hover:opacity-50 duration-500' />
                            <div className="absolute px-6 bottom-8">
                                <h3 className='text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500 '>Oblivion</h3>
                                <p className='text-sm text-gega-grey opacity-0 group-hover:opacity-100 duration-500 group-hover:mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, quia?</p>
                                <div className=' flex space-x-5'>
                                    <FontAwesomeIcon className='text-gega-grey opacity-0 group-hover:opacity-100 -mb-3 group-hover:mb-3 duration-500 cursor-pointer hover:text-gega-red' icon={faPlay} />
                                    <FontAwesomeIcon className='text-gega-grey opacity-0 group-hover:opacity-100 -mb-3 group-hover:mb-3 duration-500 cursor-pointer hover:text-gega-red' icon={faArrowRight} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* right content */}
                <div className="basis-1/3 pl-10 lg:pl-0">
                    <h2 className='text-gega-white mb-8'>HOT news</h2>
                    <div className="flex flex-row lg:flex-col lg:h-full lg:pb-16 justify-start lg:justify-between flex-wrap lg:flex-nowrap space-y-4">
                        <div className='flex space-x-12 group cursor-pointer items-center basis-3/4 md:basis-1/2'>
                            <div className='basis-1/3 h-full'>
                                <img src='https://gega-project.netlify.app/images/new1.jpg' alt='news' className='h-full w-full object-cover' />
                            </div>

                            <div className='group-hover:text-gega-melon text-gega-grey basis-2/3'>
                                <p className='mb-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, explicabo.</p>
                                <p className='font-gemunu uppercase bold text-sm'>ON NOW 01 2022</p>
                            </div>
                        </div>

                        <div className='flex space-x-12 mb-5 group cursor-pointer  items-center basis-3/4 md:basis-1/2'>
                            <div className='basis-1/3 h-full'>
                                <img src='https://gega-project.netlify.app/images/new1.jpg' alt='news' className='  h-full w-full object-cover' />
                            </div>

                            <div className='group-hover:text-gega-melon text-gega-grey basis-2/3'>
                                <p className='mb-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, explicabo.</p>
                                <p className='font-gemunu uppercase bold text-sm'>ON NOW 01 2022</p>
                            </div>
                        </div>
                        <div className='flex space-x-12 mb-5 group cursor-pointer  items-center basis-3/4 md:basis-1/2'>
                            <div className='basis-1/3 h-full'>
                                <img src='https://gega-project.netlify.app/images/new1.jpg' alt='news' className='  h-full w-full object-cover' />
                            </div>

                            <div className='group-hover:text-gega-melon text-gega-grey basis-2/3'>
                                <p className='mb-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, explicabo.</p>
                                <p className='font-gemunu uppercase bold text-sm'>ON NOW 01 2022</p>
                            </div>
                        </div>
                        <div className='flex space-x-12 mb-5 group cursor-pointer  items-center basis-3/4 md:basis-1/2'>
                            <div className='basis-1/3 h-full'>
                                <img src='https://gega-project.netlify.app/images/new1.jpg' alt='news' className='  h-full w-full object-cover' />
                            </div>

                            <div className='group-hover:text-gega-melon text-gega-grey basis-2/3 '>
                                <p className='mb-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, explicabo.</p>
                                <p className='font-gemunu uppercase bold text-sm'>ON NOW 01 2022</p>
                            </div>
                        </div>
                        <div className='flex space-x-12 mb-5 group cursor-pointer  items-center basis-3/4 md:basis-1/2'>
                            <div className='basis-1/3 h-full'>
                                <img src='https://gega-project.netlify.app/images/new1.jpg' alt='news' className='  h-full w-full object-cover' />
                            </div>

                            <div className='group-hover:text-gega-melon text-gega-grey basis-2/3'>
                                <p className='mb-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, explicabo.</p>
                                <p className='font-gemunu uppercase bold text-sm'>ON NOW 01 2022</p>
                            </div>
                        </div>

                    </div>




                </div>
            </div>
        </div>
    )
}

export default MovieList