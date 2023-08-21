import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Hero() {



  const slides = [
    {
      url: "https://gega-project.netlify.app/images/batman.jpg",
    },
    {
      url: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw",
    },
    {
      url: "https://images5.alphacoders.com/998/998470.jpg"
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);

  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);

  }
  useEffect(() => {

  }, [currentIndex])


  const goToSlide = (slideIndex) => {

    setCurrentIndex(slideIndex)
  }

  return (
    <div className='h-96 lg:h-128 group relative'>
      <div className='h-full w-full bg-cover bg-center duration-500 ' style={{ backgroundImage: `url(${slides[currentIndex].url})` }} >

        <div className="absolute bottom-0  w-full bg-gradient-to-b from-transparent to-black px-3 lg:pl-0">
          <div className="container">
            <div className=" group-hover:mb-5 lg:group-hover:mb-10  duration-500">
              <h3 className='text-gega-melon text-l lg:text-lg'>ACTION, DARAMA, THRILLER
              </h3>
              <h1 className="text-gega-grey text-4xl lg:text-6xl font-bold">
                THE DARK KNIGHT

              </h1>
              <p className='text-gega-grey lg:text-lg w-full md:w-3/4 lg:w-2/3 mb-4 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente quas officia aut quidem?
                Numquam fuga quis repellendus ad beatae culpa?
              </p>
              <div className="flex  opacity-0 group-hover:opacity-100 group-hover:mb-7 lg:group-hover:mb-14 duration-500">
                <Link to="#" className='text-gega-white hover:text-gega-red duration-500 lg:text-lg flex'>
                  Tanıtımı İzle
                  <div className='mx-3 flex h-8 w-8 bg-gega-red items-center !text-gega-white justify-center rounded-full'>
                    {<FontAwesomeIcon icon={faPlay} fontSize="15px" />}</div>
                </Link>
                <Link to="#" className='mx-10 text-gega-white hover:text-gega-red duration-500 lg:text-lg flex'>
                  Daha Fazla Bilgi
                  <div className='mx-3 flex h-8 w-8 bg-gega-red items-center !text-gega-white justify-center rounded-full'>
                    {<FontAwesomeIcon icon={faArrowRight} fontSize="15px" />}</div>
                </Link>
              </div>

              <div className="flex lg:space-x-3 opacity-0 group-hover:opacity-100 duration-500">
                {
                  slides.map((slide, slideIndex) => {
                    return <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={slideIndex === currentIndex ? "bg-gega-red w-4 h-4 rounded-full cursor-pointer duration-500 " : "bg-gega-white w-4 h-4 rounded-full cursor-pointer "} ></div>
                  }

                  )
                }



              </div>


            </div>
          </div>

        </div>
        <div onClick={prevSlide} className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full px-5 py-2 group-hover:bg-black/20 text-white cursor-pointer'>
          <FontAwesomeIcon size="xs" icon={faChevronLeft} />
        </div>
        <div onClick={nextSlide} className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full px-5 py-2 group-hover:bg-black/20 duration-500 text-white cursor-pointer'>
          <FontAwesomeIcon size="xs" icon={faChevronRight} />
        </div>
      </div>
    </div >
  )
}

export default Hero