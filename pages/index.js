import Link from 'next/link'
import ocean3 from '../public/ocean3.jpg'
import ocean3_gradient from '../public/ocean3_gradient_subwidth.jpg'
import ocean3_gradient2 from '../public/ocean3_gradient.jpg'
import ocean_floor from '../public/ocean_floor.jpg'
import React from "react";
import '../styles/header.module.css'
import Hero from '../components/Hero'
import {useEffect,useState} from "react";
import useWindowDimensions from '../utils/useWindowSize'
import AboutTeam from "../components/AboutTeam";
import dynamic from 'next/dynamic'

// const ocean3 = dynamic(() => import('../public/ocean3.jpg'))
// const ocean3_gradient = dynamic(() => import('../public/ocean3_gradient_subwidth.jpg'))
// const ocean3_gradient2 = dynamic(() => import('../public/ocean3_gradient.jpg'))
// const ocean_floor = dynamic(() => import('../public/ocean_floor.jpg'))



Home.title='Ocean Scholars | Home'


export default function Home() {


    const [width, setWidth]   = useState(typeof window === 'undefined' ? 0 : window.innerWidth);

    const updateDimensions = () => {
        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, [updateDimensions]);



    let section2Image = width > 1800? ocean3_gradient2: ocean3_gradient;

  return (
      <div className={'homePage'} >
          <Hero image={ocean3} imagealt={'Background image of water surface with color light rays'} imageposition={'center'}>
              <div className="title text-4xl xl:text-6xl m-12 relative text-white font-bold text-center drop-shadow-xl shadow-black">
                  Ocean Scholars @ Harvard University
              </div>
              <div className="joinbutton z-1 relative ">
                  <Link href="/join" passHref={true}>
                      <button className="bg-white mt-16 hover:scale-105 text-black font-bold text-3xl py-2 px-4 rounded-lg ">
                          Join Us
                      </button>
                  </Link>
              </div>
          </Hero>
          <Hero image={section2Image} imagealt={'Background image of gradually darkening water column'} imageposition={'center'}>
              <div className="mission z-1 relative text-white">
                  <div className={'flex flex-row flex-wrap justify-center justify-items-center h-1/2 m-auto '}>
                      <div className="ourMission flex flex-col flex-nowrap lg:flex-row xl:flex-col  m-auto ">
                          <p className="text-3xl xl:text-6xl m-auto flex justify-center align-middle px-4 py-2 xl:p-8">
                              connecting people
                          </p>
                          <p className="text-3xl xl:text-6xl m-auto flex justify-center align-middle px-4 py-2 xl:p-8">
                              &
                          </p>
                          <p className="text-3xl xl:text-6xl m-auto flex justify-center align-middle px-4 py-2 xl:p-8">
                              connecting oceans
                          </p>
                      </div>
                      <div className="missionStatement w-full px-2 xl:px-0 mt-8 xl:mt-0 text-center xl:text-left xl:w-1/2">
                          <p className={'text m-2 xl:m-24 text-md xl:text-xl '}>
                              Our primary mission is to catalyze engagement among ocean-focused and ocean-
                              adjacent scholars across the Harvard community. There are Harvard scholars whose
                              work touches upon the ocean in nearly every School. We aim to catalyze engagement
                              by supporting scholarly activities, such as helping identify funds to support
                              transdisciplinary research, supporting students and early career scientists through
                              bespoke education and mentoring, and facilitating cross-disciplinary discussions and
                              events.
                          </p>
                          <p className={'text m-2 xl:m-24 mt-8 xl:mt-0 text-md xl:text-xl '}>
                              The ocean has shaped human social, cultural, and biological evolution. Its influence can
                              be seen in literature, art, philosophy, political science, and music. The ocean is also key
                              to the health of our biosphere. We hope to work with you to illuminate the inextricable
                              ties between ocean science and human culture.
                          </p>
                      </div>

                  </div>

              </div>
          </Hero>
          <Hero image={ocean_floor} imagealt={'Background image of black ocean floor with ROV illuminating stony outcropping'} imageposition={'left'}>
            <AboutTeam/>
          </Hero>
      </div>
  )
}
