import React from 'react'
import Image from "next/image";


export default function GrantCard({image, title, imagePriority, reverse,first,children}) {

    return (
        <>
            <div className={`flex flex-wrap lg:flex-nowrap justify-around gap-2 lg:gap-x-10 w-[90vw] h-auto lg:w-[75vw] lg:h-[45vh] ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center m-auto`}>
                <div className={'w-[400px] h-[400px] relative'}>
                    <Image
                        // className={styles.landingImage}
                        priority={imagePriority}
                        src={image}
                        alt="Picture of people sitting around a desk"
                        layout={'fill'}
                        // width={400}
                        // height={250}
                        objectFit={'cover'}
                        objectPosition={'center'}
                        // position={'relative'}
                    />
                    <div className={`relative flex text-white h-full w-full m-auto p-2 text-center items-center text-5xl font-extrabold bg-black bg-opacity-60`}>
                        <span className={'text-center m-auto'}>{title}</span></div>
                </div>
                <div className={'hidden lg:visible :w-[2px] h-1/2 m-auto bg-white '}></div>
                <div className={`flex flex-col gap-5 lg:gap-0 w-full lg:w-2/3 h-full flex-nowrap justify-evenly m-auto ${reverse ? 'justify-start' : 'justify-center'}`}>
                    <div className={'text-base lg:text-xl'}>
                        {children}
                    </div>
                </div>

            </div>



        </>

    )
}

