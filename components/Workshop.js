import React from 'react'
import SectionHero from "./SectionHero";
import ocean3 from "../public/ocean3.jpg";
import workshoppic from '../public/workshop.jpg'
import Image from "next/image";


export default function Workshop() {
    return (
        <>
            <div className={'flex flex-row flex-nowrap justify-around items-center m-auto text-black w-[80vw] h-[50vh]'}>
                <div className={'w-1/3 h-full relative ml-6'}>
                    <Image
                        // className={styles.landingImage}
                        priority
                        src={workshoppic}
                        alt="Picture of people sitting around a desk"
                        // layout={'fill'}
                        // width={400}
                        // height={250}
                        fill={'cover'}
                        // objejctPosition={'center'}
                        // position={'relative'}
                    />
                </div>
                <div className={'flex flex-col w-1/2 h-full flex-nowrap justify-evenly m-auto'}>
                    <div className={'m-5 text-2xl text-bold border-b-2 border-black'}>
                        OSAH Research Workshop
                    </div>
                    <div className={'text-base'}>
                        We will offer a workshop at the beginning of each semester, starting in Fall 2022, to help undergraduates understand ocean scholarship across the University. In this workshop, we will address common questions and concerns regarding research, and outline several ways to find and join groups or labs that pique your interest.
                    </div>
                </div>

            </div>



        </>
    )
}
