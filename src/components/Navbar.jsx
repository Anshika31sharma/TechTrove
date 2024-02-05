import React, { useState } from 'react';
import HamBurgerMenu from './HamBurgerMenu';


const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const handleClick = () => {
        setNavOpen(prevValue => !prevValue)
    }
    return (
        <>
            <div className='fixed w-full max-w-[100vw] h-20 bg-gradient-to-b from-black via-black to-transparent z-50 bg-opacity-[0.9]'>
                <div className='flex justify-between items-center px-5 max-w-screen-2xl mx-auto'>
                    <div className=' text-[2.5rem] duration-500 font-semibold group cursor-pointer'>
                        <p className='animatedHeading font-signature'>
                            <span className='text-transparent'>Anshika</span>
                            <span className='text-transparent'>Sharma</span>
                        </p>
                    </div>

                   
                    <HamBurgerMenu handleClick={handleClick} navOpen={navOpen} />
                </div>
            </div>
            <div className="md:hidden h-32 w-full bg-black "></div>
        </>
    )
}

export default Navbar;