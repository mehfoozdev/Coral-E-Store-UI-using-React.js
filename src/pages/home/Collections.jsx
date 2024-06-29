import React from 'react'
import collectionImg from '../../assets/images/background.png'
import zarLogo1 from '../../assets/images/1024px-Zara_Logo 1.png'
import zarLogo2 from '../../assets/images/1024px-Zara_Logo 2.png'

const Collections = () => {
  return (
    <>
        <div className="bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20"
        style={{ backgroundImage: `url(${collectionImg})` }}>
            
            <div className="h-[588px] flex justify-between md:flex-row items-center">
                <div className="md:w-1/2"></div>
                <div className="md:w-1/2">
                    <img src={zarLogo2} alt="" className=''/>
                    <p className='text-lg text-white capitalize my-8 md:w-2/3 leading-[32px]'>Lustrous yet understated. The new evening
                        wear collection exclusively offered at the
                        reopened Giorgio Armani boutique in Los
                        Angeles.
                    </p>
                    <button className='px-6 py-2 bg-white text-gray-800 rounded-sm font-semibold hover:text-black'>See Collections</button>
                    
                </div>
                
            </div>
        
        </div>
    </>
  )
}

export default Collections