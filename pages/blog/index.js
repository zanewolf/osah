import React, {useContext,useState} from 'react'
import Hero from "../../components/Hero";
import ocean3 from "../../public/ocean3.jpg";
import SectionHero from "../../components/SectionHero";
import {fetchMedia} from "./../api/utils/ContentfulAPI";
import BlogCard from "../../components/BlogCard";
import aerial from '../../public/surface.jpg'
import { Timeline } from 'react-twitter-widgets'


export async function getStaticProps(){
    let content = fetchMedia()
        .then((projectsFetched) => projectsFetched)
        .catch((error) => console.log(error))

    return content
}

export default function Blog({content}) {
    const [blogs, setBlogs] = useState(content);

    return (
        <>
            <SectionHero image={ocean3} imageposition={'center'} imageheight={'30vh'}>
                <div className={'text-6xl font-bold drop-shadow-xl shadow-black mb-8 mt-16 text-center'}>
                    Community News
                </div>
            </SectionHero>
            <div className={''}>
                <div className={'min-h-[50vh] w-auto h-auto flex flex-wrap gap-4 mb-16 mt-16 justify-center text-black'}>
                    {blogs.map((blog,i)=>{
                        return <BlogCard content={blog} key={i}/>
                    })}
                    {/*<Timeline*/}
                    {/*    dataSource={{ sourceType: "profile", screenName: "HUCEnvironment" }}*/}
                    {/*    options={{ width: "400", height: "600" }}*/}
                    {/*/>*/}
                </div>
            </div>

        </>
    )
}
