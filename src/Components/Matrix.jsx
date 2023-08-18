import React from 'react'

function Matrix() {
    return (
        <div className='relative flex items-center justify-center container'>
            <div className=' basis-1/3 lg:basis-1/2 hidden md:block   '>
                <img src='https://gega-project.netlify.app/images/matrix.png' className='lg:absolute lg:bottom-0' alt='matrix' />
            </div>

            <div className='basis-1/2  flex flex-col justify-center py-7 space-y-2'>
                <h3 className='text-gega-melon text-l lg:text-lg'>ACTION, DARAMA, THRILLER</h3>
                <h2 className='text-gega-black text-3xl'>Matrix reloaded</h2>
                <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cum neque exercitationem ab earum, consequatur deserunt pariatur. Corporis, asperiores nihil!</p>
                <p className='text-gega-red font-gemunu text-l '>8 WINS 34 NOMINATIONS</p>
            </div>

            <div className='left-10 absolute -top-12 -rotate-45 lg:left-0 uppercase text-xl font-gemunu w-24 h-24 text-gega-red rounded-full flex text-center items-center font-bold bg-gega-melon '>
                <p>OLDIE & GOLDIE</p>
            </div>


        </div>
    )
}

export default Matrix