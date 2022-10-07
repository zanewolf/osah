import React from 'react'
import Hero from "../components/Hero";
import ocean3 from "../public/ocean3.jpg";

export default function News() {
    return (
        <>
            <Hero image={ocean3} imageposition={'center'}>
                <div className={'flex justify-center m-auto z-1 relative text-white text-6xl'}>news</div>
            </Hero>
        </>
    )
}
