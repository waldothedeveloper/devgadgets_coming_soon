import React from "react"
import smartwatch from "../../images/smart-watch.gif"
import coffee from "../../images/coffee.gif"
import ebook from "../../images/ebook-reader.gif"
import computer from "../../images/computer-display.gif"
import { motion } from "framer-motion"
//

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const Features = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ ease: "easeIn", duration: 2.2 }}
      className="py-12 bg-white"
    >
      <div className="px-3 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center">
          <p className="text-base leading-6 text-teal-600 font-semibold tracking-wide uppercase">
            So what is this about?
          </p>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            You’ve got questions, we’ve got answers.
          </h3>
          <p className="mt-4 max-w-xl md:max-w-2xl mx-auto text-xl leading-7 text-gray-500 lg:mx-auto">
            Hi{" "}
            <span role="img" aria-label="hello hand">
              👋
            </span>{" "}
            there! Do you like gadgets? If yes, that's great because this might
            be your next favorite blog
            <span role="img" aria-label="green heart">
              💚
            </span>
            . So while we're working on an amazing spectrum of articles, check
            out some of the cools stuff we'll discover together!
            {` `}
            <span role="img" aria-label="green heart">
              🚀
            </span>
            .
          </p>
        </div>

        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
                  <img
                    src={smartwatch}
                    alt="smart watch"
                    className="h-16 w-auto"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Gadgets for Geeks
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    The gadgets that will improve your productivity, such as
                    routers, mechanic keyboards, mouses, monitors and more.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <img src={ebook} alt="smart watch" className="h-16 w-auto" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Programming Books
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    A curated collection of the best programming books in
                    popular languages like Python, Javascript, Ruby, SQL and
                    more.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <img
                    src={computer}
                    alt="smart watch"
                    className="h-16 w-auto"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Online Courses
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Learn from the best and become one of the best. Find out
                    what courses from Udemy, Udacity, or FrontEnd Masters can
                    leverage your skills in no time.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <img src={coffee} alt="smart watch" className="h-16 w-auto" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Healthy LifeStyle
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Feeling tired? Trying to get on a diet? Learn the best tips
                    to a healthier work-life balance, so you can code like a
                    champion.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Features
