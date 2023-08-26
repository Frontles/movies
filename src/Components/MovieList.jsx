import React, { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import MovieListItem from './MovieListItem';



function MovieList(props) {
    const [seciliKategori, SetSeciliKategori] = useState(27);
    useEffect(() => {
        kategorislemleri()
    }, [])





    return (
        <div className='py-24 bg-black '>
            <div className="container flex flex-col lg:flex-row lg:space-x-16 space-y-10 lg:space-y-0 movieLinks ">
                {/* Movie List */}
                <div className={props.hotnews ? `basis-2/3` : ``}>
                    <div className="flex flex-wrap space-x-2 divide-x  divide-gega-red divide-opacity-50 pl-10 lg:pl-0 mb-8  ">
                        <Link to="#" onClick={() => { SetSeciliKategori(27); }} className='text-gega-white  hover:text-gega-red duration-500 select active' ><h2>Korku</h2></Link>
                        <Link to="#" onClick={() => { SetSeciliKategori(878); }} className='text-gega-white pl-2  hover:text-gega-red duration-500 select'><h2>Bilim Kurgu</h2></Link>
                        <Link to="#" onClick={() => { SetSeciliKategori(10752); }} className='text-gega-white pl-2  hover:text-gega-red duration-500 select'><h2>Savaş</h2></Link>
                        <Link to="#" onClick={() => { SetSeciliKategori(28); }} className='text-gega-white pl-2  hover:text-gega-red duration-500 select'><h2>Aksiyon</h2></Link>
                        <Link to="#" onClick={() => { SetSeciliKategori(12); }} className='text-gega-white pl-2  hover:text-gega-red duration-500 select'><h2>Macera</h2></Link>
                        <Link to="#" onClick={() => { SetSeciliKategori(16); }} className='text-gega-white pl-2  hover:text-gega-red duration-500 select'><h2>Animasyon</h2></Link>
                    </div>

                    <div className="flex flex-wrap ">
                        {/* Movie Items */}
                        <MovieListItem kategori={seciliKategori} page={props.page} />

                    </div>

                </div>
                {/* Hot News  */}
                {props.hotnews}
            </div>
        </div>
    )
}


const kategorislemleri = async () => {
    const secilenKategori = await document.querySelectorAll(".select");
    for (const kategori of secilenKategori) {
        kategori.addEventListener('click', () => {

            for (const kategori of secilenKategori) { kategori.classList.remove("active") }
            kategori.classList.add('active');

        })
    }



}






export default memo(MovieList)