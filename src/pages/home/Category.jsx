import React from 'react'
import { Link } from 'react-router-dom';

import img1 from '../../assets/images/brand-1.png'
import img2 from '../../assets/images/02.png'
import img3 from '../../assets/images/03.png'
import img4 from '../../assets/images/04.png'
import img5 from '../../assets/images/05.png'
import imgCat1 from '../../assets/images/image-category-1.png'
import imgCat2 from '../../assets/images/card.png'
import imgCat3 from '../../assets/images/card (3).png'
import imgCat4 from '../../assets/images/card (1).png'
import imgCat5 from '../../assets/images/card (2).png'



const companyLogo = [
    {id: 1, img: img1},
    {id: 2, img: img2},
    {id: 3, img: img3},
    {id: 4, img: img4},
    {id: 5, img: img5},

]

const Category = () => {
  return (
    <>
        <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28">
            <div className="flex  items-center justify-around flex-wrap gap-4 py-5">
                {
                    companyLogo.map(({id, img})=>(
                        <div key={id}><img src={img} alt="brand-imgs" /></div>
                    ))
                }
            </div>

            {/* Category Grid */}
            <div className="mt-8 flex flex-cols md:flex-row items-center gap-4">
                <p className='text-2xl font-semibold uppercase md:-rotate-90 text-center text-gray-800 hover:text-orange-600 md:p-1.5 p-2 rounded-sm inline-flex'>Explore new and popular styles</p>
                <div>
                    <Link to='/'><img src={imgCat1} alt="" className='w-full hover:scale-110 transition-all duration-500' /></Link>
                </div>
                <div className="md:w-1/2">
                    <div className="grid grid-cols-2 gap-2">
                        <Link to='/'><img src={imgCat2} alt="" className='w-full hover:scale-105 transition-all duration-500' /></Link>
                        <Link to='/'><img src={imgCat3} alt="" className='w-full hover:scale-105 transition-all duration-500' /></Link>
                        <Link to='/'><img src={imgCat4} alt="" className='w-full hover:scale-105 transition-all duration-500' /></Link>
                        <Link to='/'><img src={imgCat5} alt="" className='w-full hover:scale-105 transition-all duration-500' /></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Category