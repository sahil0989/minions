import React, { useState } from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import logo from "./images/logo.png";
import steve from "./images/cast_crew/290995_v9_bb.jpg"
import tara from "./images/cast_crew/170706_v9_bb.jpg"
import michalle from "./images/cast_crew/73516_v9_ba.jpg"
import rza from "./images/cast_crew/282410_v9_bc.jpg"
import kyle from "./images/cast_crew/640067_v9_ba.jpg"
import brad from "./images/cast_crew/9kxb7xp9.png"
import jona from "./images/cast_crew/1202991_v9_ba.jpg"
import christopher from "./images/cast_crew/399589_v9_ba.jpg"
import healy from "./images/cast_crew/311258_v9_ba.jpg"
import chris from "./images/cast_crew/567231_v9_bb.jpg"
import latifa from "./images/cast_crew/527630_v9_ba.jpg"
import claire from "./images/cast_crew/653659_v9_aa.jpg"
import matthew from "./images/cast_crew/611886_v9_aa.jpg"

function About() {

    const [open, setOpen] = useState(false)
    const [showMore, setShowMore] = useState(false)

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

                <h2 className='text-3xl mt-6 font-bold lg:ml-16 pl-4 border-yellow-400 border-l-8 '>About</h2>
                <div className='lg:px-36 mt-8'>
                    <p className={`${showMore ? "line-clamp-none" : "line-clamp-4"}`}>In the heart of the 1970s, amid a flurry of heathered hair and flared jeans, Gru (Oscar® nominee Steve Carell) is growing up in the suburbs. A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them. Luckily, he gets some mayhem-making backup from his loyal followers, the Minions. Together, Kevin, Stuart, Bob, and Otto--a new Minion sporting braces and a desperate need to please--deploy their skills as they and Gru build their first lair, experiment with their first weapons and pull off their first missions. When the Vicious 6 oust their leader, legendary fighter Wild Knuckles (Oscar® winner Alan Arkin), Gru interviews to become their newest member. It doesn't go well (to say the least), and only gets worse after Gru outsmarts them and suddenly finds himself the mortal enemy of the apex of evil. On the run, Gru will turn to an unlikely source for guidance, Wild Knuckles himself, and discover that even bad guys need a little help from their friends.</p>
                    {!showMore && <h3 onClick={() => setShowMore(!showMore)} className='text-blue-400 cursor-pointer font-semibold'>SHOW MORE</h3>}
                    {showMore && <h3 onClick={() => setShowMore(!showMore)} className='text-blue-400 cursor-pointer font-semibold'>SHOW LESS</h3>}
                    <br />
                    <h4 className='mb-2'><span className='font-semibold'>Rating : </span>PG (Some Action/Violence|Rude Humor)</h4>

                    <h4 className='mb-2'><span className='font-semibold'>Genre : </span>Kids & family, Comedy, Adventure, Animation</h4>

                    <h4 className='mb-2'><span className='font-semibold'>Original Language : </span>English</h4>

                    <h4 className='mb-2'><span className='font-semibold'>Director : </span>Kyle Balda</h4>

                    <h4 className='mb-2'><span className='font-semibold'>Producer : </span>Christopher Meledandri, Janet Healy, Chris Renaud</h4>

                    <h4 className='mb-2'><span className='font-semibold'>Writer : </span>Matthew Fogel</h4>

                    <h4 className='mb-2'><span className='font-semibold'>Release Date(Theaters) : </span>Jul 1, 2022  Wide</h4>

                    <h4 className='mb-2'><span className='font-semibold'>Release Date(Streaming) : </span>Sep 23, 2022</h4>

                    <h4 className='mb-2'><span className='font-semibold'>Box Office (Gross USA) : </span>$369.5M</h4>

                    <h4 className='mb-2'><span className='font-semibold'>Runtime : </span>1h 27m</h4>

                    <h4 className='mb-2'><span className='font-semibold'>Distributor : </span>Universal Pictures</h4>

                    <h4 className='mb-2'><span className='font-semibold'>Production Co : </span>Universal Pictures, Illumination Entertainment</h4>

                    <h4 className='mb-2'><span className='font-semibold'>Sound Mix : </span>SDDS, Dolby Digital</h4>

                    <h4 className='mb-2'><span className='font-semibold'>Aspect Ratio : </span>Scope (2.35:1)</h4>

                    <h2 className='mt-12 text-lg font-bold border-l-4 border-black pl-5 text-yellow-400 mb-6'>CAST & CREW</h2>


                    <div className='flex flex-wrap gap-4 md:gap-8'>
                        <div className='flex flex-col items-center w-28'>
                            <img src={steve} alt='pic' className='h-16 object-contain w-16 rounded-full border-2 border-black' />
                            <div className='flex flex-col items-start'>
                                <h4 className=' font-semibold'>Steve Carell</h4>
                                <h4 className='text-xs'>Gru Voice</h4>
                            </div>
                        </div>

                        <div className='flex flex-col items-center w-28'>
                            <img src={tara} alt='pic' className='h-16 object-contain w-16 rounded-full border-2 border-black' />
                            <div className='flex flex-col items-start'>
                                <h4 className=' font-semibold'>Taraji P.Henson</h4>
                                <h4 className='text-xs'>Belle Bottom Voice</h4>
                            </div>
                        </div>
                        <div className='flex flex-col items-center w-28'>
                            <img src={michalle} alt='pic' className='h-16 object-contain w-16 rounded-full border-2 border-black' />
                            <div className='flex flex-col items-start'>
                                <h4 className=' font-semibold'>Michelle Yeoh</h4>
                                <h4 className='text-xs'>Master Chow Voice</h4>
                            </div>
                        </div>
                        <div className='flex flex-col items-center w-28'>
                            <img src={rza} alt='pic' className='h-16 object-contain w-16 rounded-full border-2 border-black' />
                            <div className='flex flex-col items-start'>
                                <h4 className=' font-semibold'>RZA</h4>
                                <h4 className='text-xs'>Voice</h4>
                            </div>
                        </div>
                        <div className='flex flex-col items-center w-28'>
                            <img src={kyle} alt='pic' className='h-16 object-contain w-16 rounded-full border-2 border-black' />
                            <div className='flex flex-col items-start'>
                                <h4 className=' font-semibold'>Kyle Balda</h4>
                                <h4 className='text-xs'>Director</h4>
                            </div>
                        </div>
                        <div className='flex flex-col items-center w-28'>
                            <img src={brad} alt='pic' className='h-16 object-contain w-16 rounded-full border-2 border-black' />
                            <div className='flex flex-col items-start'>
                                <h4 className=' font-semibold'>Brad Ableson</h4>
                                <h4 className='text-xs'>Co-Director</h4>
                            </div>
                        </div>
                        <div className='flex flex-col items-center w-28'>
                            <img src={jona} alt='pic' className='h-16 object-contain w-16 rounded-full border-2 border-black' />
                            <div className='flex flex-col items-start'>
                                <h4 className=' font-semibold'>Jonathan Del Val</h4>
                                <h4 className='text-xs'>Co-Director</h4>
                            </div>
                        </div>
                        <div className='flex flex-col items-center w-28'>
                            <img src={matthew} alt='pic' className='h-16 object-contain w-16 rounded-full border-2 border-black' />
                            <div className='flex flex-col items-start'>
                                <h4 className=' font-semibold'>Matthew Fogel</h4>
                                <h4 className='text-xs'>Screenwriter</h4>
                            </div>
                        </div>
                        <div className='flex flex-col items-center w-28'>
                            <img src={christopher} alt='pic' className='h-16 object-contain w-16 rounded-full border-2 border-black' />
                            <div className='flex flex-col items-start'>
                                <h4 className=' font-semibold'>Christopher Meledandri</h4>
                                <h4 className='text-xs'>Producer</h4>
                            </div>
                        </div>
                        <div className='flex flex-col items-center w-28'>
                            <img src={healy} alt='pic' className='h-16 object-contain w-16 rounded-full border-2 border-black' />
                            <div className='flex flex-col items-start'>
                                <h4 className=' font-semibold'>Janet Healy</h4>
                                <h4 className='text-xs'>Producer</h4>
                            </div>
                        </div>
                        <div className='flex flex-col items-center w-28'>
                            <img src={chris} alt='pic' className='h-16 object-contain w-16 rounded-full border-2 border-black' />
                            <div className='flex flex-col items-start'>
                                <h4 className=' font-semibold'>Chris Renaud</h4>
                                <h4 className='text-xs'>Producer</h4>
                            </div>
                        </div>
                        <div className='flex flex-col items-center w-28'>
                            <img src={latifa} alt='pic' className='h-16 object-contain w-16 rounded-full border-2 border-black' />
                            <div className='flex flex-col items-start'>
                                <h4 className=' font-semibold'>Latifa Ouaou</h4>
                                <h4 className='text-xs'>Executive Producer</h4>
                            </div>
                        </div>
                        <div className='flex flex-col items-center w-28'>
                            <img src={claire} alt='pic' className='h-16 object-contain w-16 rounded-full border-2 border-black' />
                            <div className='flex flex-col items-start'>
                                <h4 className=' font-semibold'>Claire Dodgson</h4>
                                <h4 className='text-xs'>Film Editor</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <h5 className='flex justify-center mt-6 text-xs' >Copyright @2023 by jarvis</h5>
        </div>
    )
}

export default About