import React from 'react'
import BlogProfileImage from "../assets/Blog Website Design.jpg"
import CSS from "../assets/css-3.png"
import HTML from "../assets/html.png"
import DB from "../assets/data-server.png"
import JS from "../assets/js.png"
import REACTICON from "../assets/physics.png"
import NODE from "../assets/node-js.png"
import P1 from "../assets/p1.jpg"
import P2 from "../assets/p2.png"
import P3 from "../assets/p3.png"
import BlogImage from "../assets/blogImage.png"
import { useNavigate } from 'react-router-dom';
import Footer from './common/Footer'
import { motion } from "framer-motion"


function Home() {
    const navigate = useNavigate()
    return (
        <>
            <motion.div


                initial={{ opacity: 0, translateX: "-100%" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 3 }}


                className='flex  items-center justify-center'>
                <div className="w-full sm:w-1/2 flex-col justify-center">
                    <h2 className='text-3xl md:text-6xl font-serif pb-2'>Hey! I Am</h2>
                    <h2 className='text-4xl md:text-7xl font-serif text-[#22C6F0]   py-2'>Peter Parker</h2>
                    <img src={BlogProfileImage} className='w-60 block sm:hidden' alt="Blog heading" />
                    <p className='py-2 font-serif'>I can create stunning website for your company, Do check my works. I won't disappoint you. Try me for 7 Days before you decide anything.</p>
                    <button className='button-style mt-2'>Hire Me</button>
                </div>

         
                


            <div className='justify-center hidden sm:block'>
                <img src={BlogProfileImage} className='w-60 md:w-96  ' alt="Blog small " />

            </div>

        </motion.div>



            <div className='flex justify-evenly py-6'>
                <img src={HTML} style={{ width: "50px" }} alt="html " className='animate-bounce' />
                <img src={CSS} style={{ width: "50px" }} alt="css " className='animate-bounce' />
                <img src={JS} style={{ width: "50px" }} alt="js " className='animate-bounce' />
                <img src={REACTICON} style={{ width: "50px" }} alt="react " className='animate-bounce' />
                <img src={DB} style={{ width: "50px" }} alt="db " className='animate-bounce' />
                <img src={NODE} style={{ width: "50px" }} alt=" node" className='animate-bounce' />
            </div>





            < motion.div


                initial={{ opacity: 0, translateX: "-100%" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 4 }}



                className='flex flex-col mt-10 items-center justify-around sm:flex-row'>
                <div className='flex-col'>
                    <div className='mt-4 border-[6px] rounded-lg border-[#22C6F0] p-5 border-t-0 w-60 flex-col items-center'>
                        <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-purple-200 to-[#22C6F0]'>6</div>
                        <p className='text-center font-serif'>Projects Completed</p>
                    </div>
                    <div className='mt-4 border-[6px] rounded-lg border-[#FF0000] p-5 border-t-0 w-60 flex-col items-center'>
                        <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br   from-green-200 to-[#FF0000]'>6</div>

                        <p className='text-center font-serif'>Months of Experience</p>
                    </div>
                </div>

                <div className='ml-4 mt-4 sm:mt-0'>
                    <h2 className='text-3xl sm:text-7xl font-serif text-[#22C6F0]'>My Awesome</h2>
                    <h2 className='text-3xl sm:text-7xl font-serif text-black'>Services</h2>
                    <p className='my-2 font-serif'>I have attahed my Resume here for your Reference</p>
                    <button className='button-style mt-2'>Download CV</button>

                </div>




            </motion.div>

            <div>

                <h2 className='text-center text-5xl my-14 font-serif'>Checkout My Live <span className='text-[#FF0000]'>Projects</span> Here</h2>
                <motion.div


                    initial={{ opacity: 0, translateY: "-100%" }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 3 }}


                    className='flex justify-around my-5 flex-col sm:flex-row'>

                    <img src={P1} className='w-64 border rounded-md cursor-pointer' alt="p1 " />

                    <img src={P2} className='w-64 border rounded-md cursor-pointer' alt="p2 " />

                    <img src={P3} className='w-64 border rounded-md cursor-pointer' alt="p3" />

                </motion.div>
            </div>


            <motion.div



                initial={{ opacity: 0, translateX: "-100%" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 3 }}




                className='flex items-center justify-center my-14'>
                <div className='justify-center'>
                    <img src={BlogImage} className='w-60 md:w-96 ' alt="Blog Profile " />

                </div>
                <div className="w-full sm:w-1/2 flex-col justify-center ml-6">
                    <h2 className='text-3xl md:text-6xl font-serif pb-2'>I like to Write</h2>
                    <h2 className='text-4xl md:text-7xl font-serif text-[#22C6F0] py-2'>Blogs about tech</h2>

                    <p className='py-2 font-serif'>You can know better about me by reading my blogs here. I share my expertise here.</p>
                    <button className='button-style mt-2' onClick={() => navigate("/blogs")}>Read My Blogs</button>
                </div>


            </motion.div>



            < motion.div

                initial={{ opacity: 0, translateX: "-100%" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 3 }}





                className="text-center ">

                <h1 className="text-5xl font-sans mt-5 text-center p-3">Join our News Letter</h1>
                <p className='font-serif'>Sign up for our email newspaper to get exclusive discounts,updates,and more</p>
                <input type="text" className=" p-2 m-4 w-[80%] focus:outline-none border border-[#22C6F0] " /> <br></br>
                <button className="bg-[#FF0000] text-white p-3  m-1 mb-5 rounded-md hover:bg-[#22C6F0]" >Subscribe</button>

            </motion.div>





            <Footer />

        </>



    )
}

export default Home