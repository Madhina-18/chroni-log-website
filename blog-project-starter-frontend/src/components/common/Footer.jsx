import React from 'react';
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import {motion} from "framer-motion"



function Footer() {
  return (

    <>
      < motion.footer 
        

        initial={{ opacity: 0, translateY: "-100%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 2 }}
          
      class="bg-[#22C6F0] text-white p-7 mt-8 ">

        <div className="flex  flexgap-2">

          <div className="flex flex-col justify-between text-center gap-5 font-serif ">

            <p>ChroniLOG Business</p>
            <p>Teach On ChroniLOG</p>
            <p>Get the App</p>
            <p>Contact Us</p>
            <p>About Us</p>
          </div>
          <div className="flex flex-col justify-between text-center">
            <p>Careers</p>
            <p>Blog</p>
            <p>Affiliate</p>
            <p>Investors</p>
            <p>Help and Support</p>
          </div>

          
        </div>

        <div className="flex flex-row gap-4 text-2xl justify-end  ">
                <p className='animate-bounce' ><RiInstagramFill /></p>
                <p className='animate-bounce' ><FaTwitter /></p>
                <p className='animate-bounce'><GrYoutube /></p>
            </div>

            <p className="flex justify-end">@2024 ChroniLOG All rights reserved</p>

      </motion.footer>

    </>
  )
}

export default Footer