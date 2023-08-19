import React from 'react'

function HotNewsItem(props) {
    return (
        <div className='flex space-x-12 group cursor-pointer items-center basis-3/4 md:basis-1/2'>
            <div className='basis-1/3 h-full'>
                <img src={props.kaynak} alt='news' className='h-full w-full object-cover' />
            </div>

            <div className='group-hover:text-gega-melon text-gega-grey basis-2/3'>
                <p className='mb-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, explicabo.</p>
                <p className='font-gemunu uppercase bold text-sm'>ON NOW 01 2022</p>
            </div>
        </div>
    )
}

export default HotNewsItem