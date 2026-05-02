import Image from 'next/image';
import React from 'react';
import Peyaraful from '../../public/peyaraful.jpg';
import Coolbreze from '../../public/coolbreze.png';
import Airwear from '../../public/airwear.png';

const TopBrand = () => {
    return (
        <>
        <h1 className='text-3xl font-bold text-center'>  Top Brands</h1>
        <div className='flex flex-wrap justify-center gap-10 mt-2'>
            <div className='p-4'>
                <Image src={Peyaraful} className='rounded-md' width={100} height={100} alt='peyaraful'></Image>
               
                
            </div>
            <div className='p-4'>
                <Image src={Coolbreze} className='rounded-md' width={100} height={100} alt='coolbreze'></Image>
               
                
            </div>
            <div className='p-4'>
                <Image src={Airwear} className='rounded-md'  width={100} height={100} alt='airwear'></Image>
               
                
            </div>
        </div>
        </>
    );
};

export default TopBrand;