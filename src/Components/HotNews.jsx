import React from 'react'
import HotNewsItem from './HotNewsItem'

function HotNews() {
    return (
        <div className="basis-1/3 pl-10 lg:pl-0">
            <h2 className='text-gega-white mb-8'>HOT news</h2>
            <div className="flex flex-row lg:flex-col lg:h-full lg:pb-16 justify-start lg:justify-between flex-wrap lg:flex-nowrap space-y-4">
                <HotNewsItem />

            </div>

        </div>
    )
}

export default HotNews