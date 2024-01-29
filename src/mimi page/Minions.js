import React from 'react'
import { FaPlay } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import logo from "./images/logo.png"
import trio from "./images/trio.png"
import stuart from "./images/stuart.png"
import kevin from "./images/kevin.png"
import bob from "./images/bob.png"
import minions from "./images/Minions_ Beach.png"
import img1 from "./images/Minions.jpg"
import img2 from "./images/Connecting to the iTunes Store_.jpg"
import img3 from "./images/Minions_ True love hits Stuart.jpg"
import img4 from "./images/Minions trio.jpg"
import logo1 from "./images/logo1.png"
import logo2 from "./images/logo2.png"
import logo3 from "./images/logo3.png"
import logo4 from "./images/logo4.png"

function Minions() {
    return (
        <div className='relative flex flex-col h-auto bg-white w-full overflow-x-hidden overflow-y-scroll scroll-m-0 pb-20'>

            <div className='relative z-10'>

                <div className='lg:flex justify-end gap-16 pt-6 pr-12 lg:pr-28 text-lg font-semibold hidden'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Characters</p>
                    <p>Blogs</p>
                </div>
                <div className='flex justify-end pr-10 pt-6'>
                    <RiMenu3Fill className='scale-125 lg:hidden' />
                </div>

                <div className='flex justify-center w-full'>
                    <img src={logo} className='w-36 mt-6' alt='' />
                </div>
                <div className='flex md:scale-[80%] md:-mt-6 flex-col items-center mt-4'>
                    <h1 className='text-yellow-500 font-extrabold text-[120px] md:text-[200px] lg:text-[350px] mt-[-50px]'>BELLO</h1>

                    <h4 className='flex mt-[-28px] sm:mt-[-40px] lg:mt-[-90px] ml-[-20rem] sm:ml-[-33rem] lg:ml-[-60rem]'>(Hello)</h4>

                    <img src={trio} className='w-[280px] sm:w-[480px] lg:w-[780px] mt-[-5rem] sm:mt-[-10rem] lg:mt-[-13rem] sm:-mb-2 md:mb-6' alt='' />
                </div>


                <div className='flex justify-center w-full mt-5'>
                    <div className='w-[450px] h-[250px] scale-[70%] lg:scale-100 bg-black rounded-lg'></div>
                </div>


                <div className='text-sm lg:text-base flex flex-col items-center text-center gap-4 mt-10 font-semibold px-10'>
                    <h4>The Minions are small, yellow, cylindrical, creatures who have one or two eyes.</h4>
                    <p className='lg:w-[60rem]'>They are impulsive creatures with little self-control, but with a wide-eyed wonder and odd innocence that endears them to viewers and makes them relatable. They can be pesky when they are doing weird interactions with other people, animals or objects.</p>
                </div>


                <div id='stuart' className='lg:mt-24 flex justify-between scale-[80%] lg:scale-100'>
                    <img src={stuart} className='scale-[80%] lg:scale-100 ml-[-8rem] lg:ml-0' alt='stuart' />
                    <div className='lg:w-[650px] lg:scale-100'>
                        <div className='ml-[-5rem] lg:ml-0'>
                            <h2 className='text-[40px] lg:text-[60px] font-bold text-orange-500'>meet</h2>
                            <h2 className='text-white text-[60px] lg:text-[100px] font-extrabold mt-[-20px] lg:mt-[-40px]'>STUART</h2>
                            <p className='w-[250px] text-sm lg:text-base sm:w-[350px] lg:w-[500px] font-semibold'>Stuart is a one-eyed short Minion with combed hair. Stuart is playful and funny. He is skillful at video games like Dave. He can also be the most sincere and innocent out of all the minions.</p>
                            <div className='flex gap-6'>
                                <div className=' bg-yellow-400 rounded-full hover:bg-yellow-500 border-[12px] mt-10 border-white px-5 py-5 shadow-inner'>
                                    <FaPlay className='text-white' />
                                </div>
                                <h2 className='text-xs lg:text-sm font-bold mt-14'>WATCH AN INTERVIEW</h2>
                            </div>
                        </div>
                    </div>
                </div>


                <div id='kevin' className='lg:mt-24 flex justify-between'>
                    <div className='w-[300px] lg:w-[650px]'>
                        <div className='pl-6 sm:pl-16 lg:pl-28'>
                            <h2 className='text-[40px] lg:text-[60px] font-bold text-yellow-500'>meet</h2>
                            <h2 className='text-black text-[60px] lg:text-[100px] font-extrabold mt-[-20px] lg:mt-[-40px]'>KEVIN</h2>
                            <p className='w-[200px] text-xs lg:text-base sm:w-[350px] lg:w-[500px] font-semibold'>Kevin is a tall two-eyed minion with sprout cut hair and is usually seen wearing his golf apparel. Kevin loves to make fun of and tease people or Minions, shown when he made fun of Jerry and teases him for being a coward. He loves playing golf.</p>
                            <div className='flex lg:gap-6 gap-3'>
                                <div className=' bg-yellow-400 rounded-full hover:bg-yellow-500 border-[12px] mt-10 border-white px-5 py-5 shadow-inner'>
                                    <FaPlay className='text-white' />
                                </div>
                                <h2 className='text-xs lg:text-sm font-bold mt-16'>WATCH AN INTERVIEW</h2>
                            </div>
                        </div>
                    </div>
                    <img src={kevin} className='scale-[50%] lg:scale-100 mt-[-10rem] ml-[-6rem] lg:ml-0' alt='stuart' />
                </div>

                <div id='bob' className='-mt-36 lg:mt-24 flex justify-between scale-[80%] lg:scale-100'>
                    <img src={bob} className='scale-[70%] lg:scale-90 ml-[-8rem] lg:ml-0' alt='stuart' />
                    <div className=' lg:w-[650px] lg:scale-100'>
                        <div className='ml-[-5rem] lg:ml-0'>
                            <h2 className='text-[40px] lg:text-[60px] font-bold text-orange-500'>meet</h2>
                            <h2 className='text-white text-[60px] lg:text-[100px] font-extrabold mt-[-20px] lg:mt-[-40px]'>BOB</h2>
                            <p className='w-[250px] sm:w-[350px] text-sm lg:text-base lg:w-[500px] font-semibold'>Bob is a short and bald minion with multi-colored eyes (green and brown). He often carries around a Teddy Bear that he owns called Tim which is brown with yellow buttoned eyes. Bob is a minion who is more childish than most. He is described as a "Little Brother" who finds love in anything and everything. He also enjoys bedtime stories and playing with his Teddy Bear, Tim.</p>
                            <div className='flex gap-6'>
                                <div className=' bg-yellow-400 rounded-full hover:bg-yellow-500 border-[12px] mt-10 border-white px-5 py-5 shadow-inner'>
                                    <FaPlay className='text-white' />
                                </div>
                                <h2 className='text-xs lg:text-sm font-bold mt-14'>WATCH AN INTERVIEW</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* images section  */}
                <div className='relative h-[50rem] sm:h-[55rem] lg:h-[72rem] mt-[-6rem]'>

                    <img src={img1} className=' scale-[50%] lg:scale-75 absolute -right-16 sm:right-6 lg:right-72 w-[450px] h-[450px] object-cover border-white border-[18px] z-50 shadow-2xl rounded-lg' alt='' />

                    <img src={img3} className='scale-[50%] lg:scale-90 absolute border-[18px] sm:left-12 border-white w-[550px] h-[450px] -left-20 lg:left-64 top-44 lg:top-56 z-40 shadow-2xl rounded-lg' alt='' />

                    <img src={img2} className='absolute border-[18px] border-white object-cover w-[550px] h-[550px] -right-24 sm:-right-12 lg:right-56 top-[15rem] lg:top-[28rem] z-30 scale-[50%] lg:scale-75 shadow-2xl rounded-lg' alt='' />

                    <img src={img4} className='absolute border-[16px] border-white z-20 w-[550px] -left-16 sm:left-0 lg:left-[14rem] top-[35rem] sm:top-[32rem] lg:top-[46rem] scale-[60%] lg:scale-90 shadow-2xl rounded-lg' alt='' />

                </div>


                <div className='flex flex-col items-center'>
                    <h2 className=' font-bold text-[40px] lg:text-[80px]'>WATCH &</h2>
                    <h2 className='text-[60px] lg:text-[150px] font-extrabold text-yellow-500 mt-[-20px] lg:mt-[-45px]'>ENJOY!</h2>


                    <div className='flex lg:mb-8 gap-4 lg:gap-8'>
                        <img src={logo1} className=' grayscale w-20 sm:w-36 lg:w-48 hover:grayscale-0 object-contain' alt='' />
                        <img src={logo2} className=' grayscale w-20 sm:w-36 lg:w-48 hover:grayscale-0 object-contain' alt='' />
                        <img src={logo3} className=' grayscale w-20 sm:w-36 lg:w-48 hover:grayscale-0 object-contain' alt='' />
                        <img src={logo4} className=' grayscale w-20 sm:w-36 lg:w-48 hover:grayscale-0 object-contain' alt='' />
                    </div>

                    <button className='scale-[70%] sm:scale-90 lg:scale-100 font-extrabold text-white bg-[#353535] py-4 px-24 rounded-full shadow-inner hover:bg-black'>FIND YOUR OTT</button>

                    <img src={minions} className='mt-8 lg:mt-12' alt='' />

                    <h5 className=' font-semibold mt-6' >Copyright @2023 by jarvis</h5>
                </div>

            </div>



            <div className='absolute h-[300px] lg:h-[570px] w-full px-10 -skew-y-3 top-[32rem] sm:top-[39rem] lg:top-[60rem] bg-yellow-500'></div>
            <div className='absolute h-[350px] sm:h-[420px] lg:h-[200px] w-full skew-y-3 px-[90px] top-[45rem] lg:top-[90rem] bg-yellow-500'></div>


            <div className='absolute h-[200px] lg:h-[470px] w-full px-10 -skew-y-3 top-[93rem] sm:top-[100rem] lg:top-[140rem] bg-yellow-500'></div>
            <div className='absolute h-[335px] sm:h-[300px] lg:h-[270px] w-full skew-y-3 px-[90px] top-[100rem] sm:top-[110rem] lg:top-[164rem] bg-yellow-500'></div>
        </div>
    )
}

export default Minions