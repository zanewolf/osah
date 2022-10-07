import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import {FaChevronRight} from "react-icons/fa";
import {FaExternalLinkAlt,FaEnvelope,FaTimes} from "react-icons/fa";
import workshoppic from "../public/workshop.jpg";

export default function InfoCard({image, title, reverse,children}) {

    const updateComponent=(comp)=>{
        setComp(comp)
    }

    return (
        <>
            <div className={`flex flex-row flex-wrap lg:flex-nowrap justify-around items-center gap-x-10 m-auto text-black w-[90vw] h-auto lg:w-[75vw] lg:h-[55vh] ${reverse ? 'flex-row-reverse' : 'flex-row'} `}>
                <div className={'w-full h-[40vh] lg:w-1/3 lg:h-full relative '}>
                    <Image
                        // className={styles.landingImage}
                        priority
                        src={image}
                        alt="Picture of people sitting around a desk"
                        layout={'fill'}
                        // width={400}
                        // height={250}
                        objectFit={'cover'}
                        objectPosition={'center'}
                        // position={'relative'}
                    />
                </div>
                <div className={`flex flex-col w-full lg:w-2/3 h-full flex-nowrap justify-evenly m-auto ${reverse ? 'justify-start' : 'justify-center'}`}>
                    <div className={' text-2xl font-bold uppercase border-b-2 border-black'}>
                        {title}
                    </div>
                    <div className={'text-base lg:text-lg'}>
                        {children}
                    </div>
                </div>

            </div>



        </>

    )
}
