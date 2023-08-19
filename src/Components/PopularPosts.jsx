import React from 'react'

import PopularItem from './PopularItem'

function PopularPosts() {
    return (
        <section className='bg-black text-gega-grey py-16'>
            <div className='container px-10 lg:px-0'>
                <h2 className="text-gega-red">
                    Popüler Yorumlar
                </h2>

                {/* GRID LAYOUT */}
                <div className=" grid grid-cols-6 gap-10">
                    {/* ITEM 1 */}
                    <PopularItem Kapladigiyer={3} />

                    {/* ITEM 2 */}

                    <PopularItem Kapladigiyer={3} />

                    {/* ITEM 3 */}

                    <PopularItem Kapladigiyer={2} />

                    {/* ITEM 4 */}

                    <PopularItem Kapladigiyer={2} />

                    {/* ITEM 5 */}
                    <PopularItem Kapladigiyer={2} />

                </div>
            </div>

        </section>
    )
}

export default PopularPosts