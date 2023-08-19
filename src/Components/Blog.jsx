import React from 'react'
import HotNews from './HotNews'

function Blog() {
  return (
    <div className='py-24 bg-black'>
      <div className="container flex flex-col lg:flex-row lg:space-x-16 space-y-10 lg:space-y-0">

        <div className="basis-2/3 text-gega-white ">
          <h1 className='text-gega-red bold text-3xl'>Blog Sayfası</h1>


        </div>
        {/* Side Bar  */}
        <HotNews />
      </div>
    </div>
  )
}

export default Blog