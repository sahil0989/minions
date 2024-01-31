import React, { useState } from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import logo from "./images/logo.png";
import char1 from "./images/SHM_PRINTS_P1880.png"
import char2 from "./images/Minions_Kevin2.png"
import char3 from "./images/Minions_KingBob.png"
import char4 from "./images/ScarlettOverkill-1.png"
import char5 from "./images/HerbOverkill-1.png"
import char6 from "./images/SHM_PRINTS_P1780.png"

function Characters() {
    const [open, setOpen] = useState(false)

    return (
        <div className='relative px-8 flex flex-col h-auto bg-white w-full overflow-x-hidden overflow-y-scroll scroll-m-0 pb-20'>

            <div className='relative z-10'>

                <div className='lg:flex justify-end z-50 bg-white w-full pb-2 fixed gap-16 pt-6 pr-12 lg:pr-28 text-lg font-semibold hidden'>
                    <a href='/' className='hover:border-b-4 border-yellow-500 rounded-full px-4'>Home</a>
                    <a href='/about' className='hover:border-b-4 border-yellow-500 rounded-full px-4'>About</a>
                    <a href='/characters' className='hover:border-b-4 border-yellow-500 rounded-full px-4'>Characters</a>
                </div>
                <div className='lg:hidden pb-4 flex bg-white w-full z-50 justify-end fixed pr-10 pt-6'>
                    {
                        !open && <RiMenu3Fill onClick={() => setOpen(!open)} className='scale-125' />
                    }
                    {
                        open && <div className='flex flex-col items-end gap-6'>
                            <RxCross2 onClick={() => setOpen(!open)} className='scale-125' />
                            <div className='flex flex-col items-end gap-3 font-semibold'>
                                <a href='/' className='hover:border-b-4 border-yellow-500 rounded-full px-4'>Home</a>
                                <a href='/about' className='hover:border-b-4 border-yellow-500 rounded-full px-4'>About</a>
                                <a href='/characters' className='hover:border-b-4 border-yellow-500 rounded-full px-4'>Characters</a>
                            </div>
                        </div>
                    }
                </div>

                <div className='flex justify-center w-full'>
                    <img src={logo} className='w-36 mt-14 md:mt-16 lg:mt-20' alt='' />
                </div>

                <h2 className='text-3xl mt-6 font-bold lg:ml-16 pl-4 mb-6 border-yellow-400 border-l-8 text-black'>Characters</h2>

                <div className='grid overflow-x-hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 p-5 gap-5'>
                    <div className='relative w-full h-56 rounded-lg shadow-xl'>

                        <div className='group bg-yellow-400 flex justify-center w-full rounded-lg'>
                            <img src={char1} className=' w-full h-56 object-contain' alt='' />
                            <div className='absolute opacity-0 group-hover:opacity-90 w-full h-full rounded-lg text-white flex flex-col transition-all justify-center px-12 text-center bg-black'>
                                <h2 className='text-xl font-bold pb-6'>STUART</h2>
                                <p>Rebel without a cause and aspiring rock star.</p>
                            </div>
                        </div>
                    </div>

                    <div className='relative w-full h-56 rounded-lg shadow-xl'>
                        <div className='group bg-yellow-400 rounded-lg flex justify-center w-full'>
                            <img src={char2} className=' w-full h-56 object-contain' alt='' />
                            <div className='absolute opacity-0 group-hover:opacity-90 w-full h-full rounded-lg text-white flex flex-col transition-all justify-center px-12 text-center bg-black'>
                                <h2 className='text-xl font-bold pb-6'>KEVIN</h2>
                                <p>The protective slightly bossy leader of the team.</p>
                            </div>
                        </div>
                    </div>

                    <div className='relative w-full h-56 rounded-lg shadow-xl'>
                        <div className='group bg-yellow-400 flex justify-center w-full rounded-lg'>
                            <img src={char3} className='group-hover:opacity-60 w-full h-56 object-contain' alt='' />
                            <div className='absolute opacity-0 group-hover:opacity-90 w-full h-full rounded-lg text-white flex flex-col transition-all justify-center text-center bg-black'>
                                <h2 className='text-xl font-bold pb-6'>BOB</h2>
                                <p>Sweet and naive, a tiny minions with a giant heart.</p>
                            </div>
                        </div>
                    </div>

                    <div className='relative w-full h-56 rounded-lg shadow-xl'>
                        <div className='group bg-yellow-400 flex justify-center w-full rounded-lg'>
                            <img src={char4} className=' w-full h-56 object-contain' alt='' />
                            <div className='absolute opacity-0 group-hover:opacity-90 w-full h-full rounded-lg text-white flex flex-col transition-all justify-center px-12 text-center bg-black'>
                                <h2 className='text-xl font-bold pb-6'>SCARLETT OVERKILL</h2>
                                <p>Super-Villain obsessed with royalty, she sets out to steal the British crown jewels and make herself queen.</p>
                            </div>
                        </div>
                    </div>

                    <div className='relative w-full h-56 rounded-lg shadow-xl'>
                        <div className='group bg-yellow-400 flex justify-center w-full rounded-lg'>
                            <img src={char5} className=' w-full h-56 object-contain' alt='' />
                            <div className='absolute opacity-0 group-hover:opacity-90 w-full h-full rounded-lg text-white flex flex-col transition-all justify-center px-12 text-center bg-black'>
                                <h2 className='text-xl font-bold pb-6'>HERB OVERKILL</h2>
                                <p>Scarlet's mad scientist husband.</p>
                            </div>
                        </div>
                    </div>

                    <div className='relative w-full h-56 rounded-lg shadow-xl'>
                        <div className='group bg-yellow-400 flex justify-center w-full rounded-lg'>
                            <img src={char6} className=' w-full h-56 object-contain' alt='' />
                            <div className='absolute opacity-0 group-hover:opacity-90 w-full h-full rounded-lg text-white flex flex-col transition-all justify-center px-12 text-center bg-black'>
                                <h2 className='text-xl font-bold pb-6'>THE NELSONS</h2>
                                <p>Part time mild-mannered family, full time dangerous.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h5 className='flex justify-center font-semibold mt-6' >Copyright @2023 by jarvis</h5>
        </div>
    )
}

export default Characters