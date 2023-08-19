import React, { useState } from 'react'
import { Link } from 'react-router-dom'





function Footer() {
    const [subscribe, setSubscribe] = useState("");
    const handleSubscribe = (e) => {
        e.preventDefault();

    }

    const aboneOl = (e) => { setSubscribe(e.target.value); }






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

                    <div className='flex text-sm font-gemunu'>
                        <form className='flex flex-wrap' onSubmit={handleSubscribe} >
                            <input placeholder='Eposta Adresi Giriniz' type='text' value={subscribe} onChange={aboneOl} className=' border-2 w-auto md:w-24 lg:w-auto border-gega-red outline-none py-2  bg-black' />
                            <button type="submit" className='text-gega-white inline p-2 bg-gega-red font-gemunu text-sm uppercase'>Abone Ol</button>
                        </form>
                    </div>

                    {/* Arama ve login Bölgesi */}

                </div>

            </div>
        </footer>
    )
}

export default Footer