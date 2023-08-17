import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
    const [search, setSearch] = useState("");

    const Ara = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    return (
        <header className='bg-black text-gega-grey py-7 lg:py-12 uppercase'>

            <div className='flex items-center container justify-between space-x-5 lg:space-x-10'>

                {/* Logo Bölgesi */}

                <Link className=" pl-4 lg:pl-0 text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey text-3xl lg:text-6xl font-bold" to="/">GEGA</Link>

                {/* mobile menü  */}
                <div className='pr-4 block md:hidden' >
                    <button> <FontAwesomeIcon icon={faBars} size='2xl' /></button>
                </div>
                {/* navbar Bölgesi */}

                <nav className='hidden md:flex justify-between flex-1 '>

                    <div className='flex items-center  lg:text-lg space-x-4 lg:space-x-8'>

                        <NavLink className="text-gega-white hover:text-gega-melon transition duration-300" to="/movies">Movies</NavLink>

                        <NavLink className="text-gega-white hover:text-gega-melon transition duration-300" to="/celebrities">Celebrities</NavLink>

                        <NavLink className="text-gega-white hover:text-gega-melon transition duration-300" to="/blog">Blog</NavLink>

                        <NavLink className="text-gega-white hover:text-gega-melon transition duration-300" to="/news">News</NavLink>

                        <NavLink className="text-gega-white hover:text-gega-melon transition duration-300" to="/about">About</NavLink>

                    </div>
                </nav>

                {/* Arama ve login Bölgesi */}
                <div className='hidden group border-r px-3 lg:px-5 h-7 items-center md:flex text-gega-white'>
                    <form>
                        <input name="ara" placeholder='Ara' className='w-20 lg:w-44 opacity-0 border-b  border-gega-red bg-transparent focus:opacity-100 focus:outline-none group-hover:opacity-100 transition duration-300' value={search} onChange={Ara} />

                        <button type='submit' className='group-hover:text-gega-red transition duration-300' >  <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </form>
                </div>

                <div className=' items-center hidden md:flex space-x-7 text-gega-white'>
                    <Link to="#" className=' px-2 py-2 whitespace-nowrap '>Giriş Yap</Link>

                    <Link to="#" className='bg-rose-600 px-2 py-2 '>Kaydol</Link>
                </div>


            </div>

        </header>

    )
}

export default Header