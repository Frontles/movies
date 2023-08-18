import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='bg-black text-gega-white py-12 px-10 lg:px-0 '>
            <div className="container flex flex-col md:grid md:grid-cols-4 space-y-10 md:space-y-0">
                <div className="col-span-1 space-y-2">
                    <Link className="text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey text-2xl lg:text-4xl font-bold" to="/">GEGA</Link>
                    <p className='text-sm font-gemunu'>2023 © COPYRIGHT Frontles.com Bu Proje Eğitim Amaçlı Hazırlanmıştır.. </p>
                </div>
                <div className="col-span-1 md:items-center md:justify-center flex flex-col space-y-2">
                    <Link className=" gap-16 text-gega-red text-3xl" to="/">LINKS</Link>
                    <div className='flex flex-col md:items-center  lg:text-lg space-y-3'>

                        <Link className="text-gega-white hover:text-gega-melon transition duration-300" to="/movies">Movies</Link>

                        <Link className="text-gega-white hover:text-gega-melon transition duration-300" to="/celebrities">Celebrities</Link>

                        <Link className="text-gega-white hover:text-gega-melon transition duration-300" to="/blog">Blog</Link>


                    </div>
                </div>

                <div className="col-span-1 md:items-center md:justify-center flex flex-col space-y-2">

                    <div className='flex flex-col md:items-center  lg:text-lg space-y-3'>


                        <Link className="text-gega-white hover:text-gega-melon transition duration-300" to="/news">News</Link>

                        <Link className="text-gega-white hover:text-gega-melon transition duration-300" to="/about">About</Link>

                    </div>
                </div>


                <div className="col-span-1 flex flex-col justify-start items-start space-y-2">
                    <Link className=" text-gega-red text-3xl" to="/">Abone Ol</Link>

                    <div className='flex text-sm font-gemunu '>
                        <input placeholder='Eposta Adresi Giriniz' type='text' className=' border-2 md:w-28 border-gega-red outline-none bg-black p-2' />
                        <button type="submit" name="aboneol" id="" value="gönder" className='text-gega-white  bg-gega-red py-2 px-4 font-gemunu text-sm uppercase'>Abone Ol</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer