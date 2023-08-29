import React, { useState, memo } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import AramaKutusu from './AramaKutusu';

function Header() {
    const [SearchButton, SetSearchButton] = useState(false);



    return (
        <header className='bg-black text-gega-grey py-7 lg:py-12 uppercase'>

            <div className='flex items-center  justify-end container md:justify-between space-x-4 lg:space-x-5'>

                {/* Logo Bölgesi */}

                <Link className="mr-auto pl-4 lg:pl-0 text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-blue-500 text-3xl lg:text-6xl font-bold" to="/">Frontles</Link>

                {/* mobile menü  */}

                {/* navbar Bölgesi */}

                <nav className='hidden md:flex justify-between flex-1 '>

                    <div className='flex items-center   lg:text-lg space-x-4 lg:space-x-8'>

                        <NavLink className="text-gega-white hover:text-gega-melon transition duration-300 md:text-lg" to="/movies">Filmler</NavLink>

                        <NavLink className="text-gega-white hover:text-gega-melon transition duration-300 md:text-lg" to="/celebrities">Kişiler</NavLink>

                        <NavLink className="text-gega-white hover:text-gega-melon transition duration-300 md:text-lg" to="/blog">Blog</NavLink>




                    </div>
                </nav>

                <div className='md:border-r md:px-5 flex flex-col text-gega-white '>
                    <FontAwesomeIcon className='hover:text-gega-red transition duration-300 cursor-pointer' icon={faMagnifyingGlass} onClick={() => { SetSearchButton(true) }} />
                    <AramaKutusu Trigger={SearchButton} setTrigger={SetSearchButton} />
                </div>
                <div className='pr-4 block md:hidden ' >
                    <button> <FontAwesomeIcon icon={faBars} size='2xl' /></button>
                </div>

                <div className=' items-center hidden md:flex space-x-7 text-gega-white'>
                    <Link to="#" className=' px-2 py-2 whitespace-nowrap '>Giriş Yap</Link>

                    <Link to="#" className='bg-rose-600 px-2 py-2 '>Kaydol</Link>
                </div>


            </div>

        </header>

    )
}

export default memo(Header)