import Image from 'next/image';
import React from 'react';
import Banner from '../../public/hero-banner.png'
import Link from 'next/link';
import Fan from '../../public/fan-offer.png'
import Vest from '../../public/vest-offer.png'


const Hero = () => {
    return (
        <div className='mx-auto'>
            <Image src={Banner} className='w-full rounded-sm' alt='products banner'></Image>
            <h1 className='text-2xl mt-6 font-bold text-center'>Hot Deals!</h1>
            <div className=' flex  gap-10 justify-center'>
                <Link href='/'>
                <Image className='w-full rounded-xl' src={Fan} alt='fan-offer'></Image>
                </Link>
                <Link href='/'>
                <Image className='w-full rounded-xl' src={Vest} alt='vest-offer'></Image>
                </Link>
            </div>
        </div>
    );
};

export default Hero;