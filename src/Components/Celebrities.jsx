import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Celebrities() {
  const [Peoples, setPeoples] = useState();

  useEffect(() => {
    const PeoplesData = async () => {
      const res = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_API_KEY}`);
      const data = res.data.results;

      setPeoples(data)

    }
    PeoplesData()
  }, [])

  const truncateString = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)} ...`
  }

  return (
    <div className='py-24 bg-black'>

      <div className="container ">
        <h2 className='  font-bold text-3xl mx-5 mb-5 text-gega-white '>Popüler Kişiler</h2>



        <div className='flex w-full flex-wrap gap-y-7  items-center justify-center '>

          {Peoples?.map((people, index) => {
            return (
              <div key={index} className=' w-1/5 h-1/5 shadow-xl  mx-5 border border-gray-900'>
                <img src={`https://www.themoviedb.org/t/p/w235_and_h235_face/${people.profile_path}`} alt='mehaba' className='w-full h-full object-cover' />
                <div className='mt-2'>
                  <span className='font-bold text-xl text-gega-white '>{people.name}</span>

                  <p className='text-sm flex flex-nowrap text-gega-grey'>  {truncateString(people.known_for[0].title + "," + people.known_for[1].title, 22)}  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default Celebrities