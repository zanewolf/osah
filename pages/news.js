import React, {useContext,useState} from 'react'
import Hero from "../components/Hero";
import ocean3 from "../public/ocean3.jpg";
import SectionHero from "../components/SectionHero";
import {fetchMedia} from "./api/utils/ContentfulAPI";
import BlogCard from "../components/BlogCard";


export async function getStaticProps(){
    let content = fetchMedia()
        .then((projectsFetched) => projectsFetched)
        .catch((error) => console.log(error))

    return content
}

export default function News({content}) {
    const [blogs, setBlogs] = useState(content);

    return (
        <>
            <SectionHero image={ocean3} imageposition={'center'} imageheight={'30vh'}>
                <div className={'text-6xl font-bold drop-shadow-xl shadow-black mb-8 mt-16 text-center'}>
                    News & Announcements
                </div>
            </SectionHero>
            <div className={'min-h-[50vh] h-auto text-black text-2xl'}>
                {blogs.map((blog,i)=>{
                    return <BlogCard content={blog} key={i}/>
                })}
            </div>
        </>
    )
}
