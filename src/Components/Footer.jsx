import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='bg-black text-gega-white py-12 px-10 lg:px-0 '>
            <div className="container flex flex-col md:grid md:grid-cols-4 space-y-10 md:space-y-0">
                <div className="col-span-1 space-y-2">
                    <Link className="text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-blue-500 text-2xl lg:text-4xl font-bold" to="/">Frontles</Link>
                    <p className='text-sm font-gemunu'>2023 © COPYRIGHT Frontles.com Bu Proje Eğitim Amaçlı Hazırlanmıştır.. </p>
                </div>
                <div className="col-span-1 md:items-center md:justify-center flex flex-col space-y-2">
                    <Link className=" gap-16 text-gega-red text-3xl" to="/">LINKS</Link>
                    <div className='flex flex-col md:items-center  lg:text-lg space-y-3'>

                        <Link className="text-gega-white hover:text-gega-melon transition duration-300 " to="/movies">Filmler</Link>

                        <Link className="text-gega-white hover:text-gega-melon transition duration-300" to="/celebrities">Ünlüler</Link>

                        <Link className="text-gega-white hover:text-gega-melon transition duration-300" to="/blog">Blog</Link>


                    </div>
                </div>

                <div className="col-span-1 md:items-center md:justify-center flex flex-col space-y-2">

                    <div className='flex flex-col md:items-center  lg:text-lg space-y-3'>


                        <Link className="text-gega-white hover:text-gega-melon transition duration-300 inline" to="/news">Haberler</Link>

                        <Link className="text-gega-white hover:text-gega-melon transition duration-300" to="/about">Hakkımızda</Link>

                    </div>
                </div>


                <div className="col-span-1 flex flex-col justify-start items-start space-y-2   ">
                    <Link className=" text-gega-red text-3xl" to="/">Abone Ol</Link>

                    <div className='flex text-sm font-gemunu '>
                        <input placeholder='Eposta Adresi Giriniz' type='text' className=' border-2  border-gega-red outline-none p-2 w-full md:w-28 lg:w-full  bg-black ' />
                        <button type="submit" name="aboneol" id="" value="gönder" className='text-gega-white inline bg-gega-red p-2 font-gemunu text-sm uppercase'>Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer