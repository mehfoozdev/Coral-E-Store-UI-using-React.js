import React from 'react'
import banner from '../../assets/images/image-product.png'
import { FaShoppingBag } from 'react-icons/fa';

const Banner = () => {
  return (
    <>
        <div className='bg-primaryBG py-12 xl:px-28 px-4'>

            <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14">
                
                <div className="md:w-1/2">
                    <img src={banner} alt="" />
                </div>

                <div className="md:w-1/2">
                    <h1 className='text-5xl font-light mb-10'>Collections</h1>
                    <p className='text-lg my-2'>You can explore ans shop many differnt collection
                    from various barands here. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, similique!</p>
                    <button className='bg-gray-800  hover:bg-orange-600 px-6 py-2 text-white font-semibold  flex items-center gap-2 my-6'><FaShoppingBag className='inline-flex'/> Shop Now</button>
                </div>
            </div>

        </div>
    </>
  )
}

export default Banner