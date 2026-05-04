import Image from 'next/image';
import React from 'react';
import Peyaraful from '../../public/peyaraful.jpg';
import Coolbreze from '../../public/coolbreze.png';
import Airwear from '../../public/airwear.png';

const TopBrand = () => {
    return (
        <>
        <h1 className='text-3xl font-bold text-center mt-10'>  Top Brands</h1>
        <div className='flex flex-wrap justify-center gap-10  mb-10'>
            <div className='p-4 shadow-2xl rounded-md cursor-pointer'>
                <Image src={Peyaraful} className='rounded-md border border-gray-300' width={100} height={100} alt='peyaraful'></Image>
                <p className='text-center font-medium mt-2 shadow-md'>peyaraful</p>
               
                
            </div>
            <div className='p-4 shadow-2xl rounded-md cursor-pointer'>
                <Image src={Coolbreze} className='rounded-md border border-gray-300' width={100} height={100} alt='coolbreze'></Image>
               <p className='text-center font-medium mt-2 shadow-md'>coolbreze</p>
                
            </div>
            <div className='p-4 shadow-2xl rounded-md cursor-pointer'>
                <Image src={Airwear} className='rounded-md border border-gray-300'  width={100} height={100} alt='airwear'></Image>
               <p className='text-center font-medium mt-2 shadow-md'>airwear</p>

                
            </div>
        </div>
        </>
    );
};

export default TopBrand;