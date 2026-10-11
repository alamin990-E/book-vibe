import React from 'react';
import BannerImage  from "@/assets/pngwing 1.png"
import Image from 'next/image';

const Banner = () => {
    return (
        
        <section className='container mx-auto py-10 md:px-18 md:py-15 bg-[#f3f3f3] m-10 rounded-[15px]'>
           
                <div className="flex flex-col md:flex-row gap-2 md:justify-between md:items-center">
                 {/* Text and Button */}
            <div className='text-center md:text-start space-y-10'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.3]'>Books to freshen up <br /> your bookshelf</h2>
                <button className="btn text-[12px] sm:text-[14px] md:text-[16px] font-bold py-3 px-7 text-white rounded-2.5 border-none bg-[#23BE0A]">View The List</button>
            </div>

                {/* banner image */}
            <div className='mx-auto md:mx-0 mt-15 md:mt-0'>
                <Image src={BannerImage} alt="BannerImage" loading="eager" />
            </div>
           </div>
           
        </section>
    );
};

export default Banner;

