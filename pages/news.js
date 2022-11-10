import React, {useContext} from 'react'
import Hero from "../components/Hero";
import ocean3 from "../public/ocean3.jpg";




export default function News() {

    console.log(data)
    return (
        <>
            <Hero image={ocean3} imageposition={'center'}>
                <div className={'flex justify-center m-auto z-1 relative text-white text-6xl'}>
                    news
                </div>
            </Hero>
            <div>
                <h1 className={'text-black'}>testing</h1>
            </div>
        </>
    )
}
