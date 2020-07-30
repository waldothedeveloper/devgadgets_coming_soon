import React from "react"
import hero_img from "../../images/hero-gadgets.svg"
import love_heart from "../../images/love-heart.gif"
import TechnologyBlogDefinition from "./technology-blog-definition"
import useOnClickOutside from "../../hooks/use-on-click-outside"
import { motion } from "framer-motion"
//

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

//
const Hero = () => {
  const [open, setOpen] = React.useState(false)
  const ref = React.createRef()
  useOnClickOutside(ref, () => setOpen(false))

  //
  return (
    <div className="mt-6 md:mt-12 lg:mt-0 max-w-7xl mx-auto">
      <div>
        <div className="flex items-center justify-around px-6 sm:px-6 lg:py-16 lg:px-8">
          <div className="pt-12 flex flex-col">
            <div className="flex flex-col items-center justify-center">
              <motion.p
                initial={{ y: 26 * 0.6 }}
                animate={{ y: 0 }}
                transition={{ ease: "easeOut", duration: 0.6 }}
                className="text-xl md:text-2xl font-semibold text-gray-700 sm:leading-none"
              >
                Coming soon in 2020!
              </motion.p>

              <motion.h2
                initial={{ y: -26 * 0.6 }}
                animate={{ y: 0 }}
                transition={{
                  ease: "easeOut",
                  duration: 2.2,
                }}
                overflow={"hidden"}
                className="mt-4 text-4xl tracking-tight leading-10 font-extrabold sm:text-5xl sm:leading-none md:text-6xl text-teal-400"
              >
                {`<`}Dev{`/>`} Gadgets
              </motion.h2>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ ease: "easeIn", duration: 3.2 }}
                className="text-center p-0 mt-3 text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl"
              >
                the{" "}
                <span ref={ref}>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setOpen(!open)}
                    className="inline-block text-orange-500 font-semibold underline focus:outline-none"
                  >
                    technology blog
                  </motion.button>
                </span>{" "}
                that developers & technology enthusiasts{` `}
                <span className="text-orange-500 font-semibold">#love</span>
                <span className="-mb-2 inline-block align-baseline">
                  <img className="h-8 w-8" src={love_heart} alt="heart" />
                </span>
              </motion.p>
            </div>
            <TechnologyBlogDefinition open={open} />
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeIn", duration: 2.2 }}
          className="p-2"
        >
          <img
            className="mt-4 md:mt-2 w-auto h-auto lg:max-w-3xl lg:mx-auto"
            src={hero_img}
            alt="hero"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
