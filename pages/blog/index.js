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


    const copy =  (email) => {
        navigator.clipboard.writeText(email);
        alert('Email address copied');
    }

    return (
        <>
            <SectionHero image={ocean3} imageposition={'center'} imageheight={'30vh'}>
                <div className={'text-6xl font-bold drop-shadow-xl shadow-black mb-8 mt-16 text-center'}>
                    Community News
                </div>
            </SectionHero>
            <div className={''}>
                <div className={'min-h-[50vh] w-auto h-auto flex flex-nowrap gap-4 my-16 mx-8 justify-evenly text-black'}>
                   <div className={'flex flex-wrap justify-around gap-10'}>
                       {blogs.map((blog,i)=>{
                        return <BlogCard content={blog} key={i}/>
                    })}
                   </div>
                    <div className={'h-full w-[3px] bg-black'}></div>
                    <div className={'w-1/4 flex flex-col flex-nowrap gap-5'}>
                        <Timeline
                            dataSource={{ sourceType: "profile", screenName: "OceanScholars" }}
                            options={{ width: "400", height: "600" }}
                        />
                        <div className={'font-bold bg-blue-500 rounded-xl text-lg text-center text-white'} >
                            <button onClick={()=>copy('oceans@fas.harvard.edu')}>Have news you want to share with the community? Email us!
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
