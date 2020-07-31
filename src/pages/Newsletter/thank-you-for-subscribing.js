import React from "react"
import lifestyle from "../../images/lifestyle.svg"
// import scooter from "../../images/scooter-5.gif"
import { motion } from "framer-motion"
const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}
//
const ThankYouForSubscribing = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1.5 }}
      className="relative bg-teal-800 pt-20 md:pb-10 md:pt-2 lg:pt-0"
    >
      <div className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={lifestyle}
          alt="lifestyle team of people"
        />
      </div>
      <div className="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-52">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
            Thank you for subscribing!{" "}
          </h2>
          <p className="mt-3 text-lg leading-7 text-gray-300">
            You will be the first to know about the big launching day{" "}
            <span role="img" aria-label="green heart">
              🚀
            </span>
            <br />
            If you don't see our welcome email in your inbox, please check your
            Spam folde. Once you'll open it mark it as not-spam. This will
            ensure you will receive our future newsletters. Peace!
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default ThankYouForSubscribing
