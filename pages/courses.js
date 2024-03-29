import React, {useState} from 'react'
import rocky from '../public/rocky-shore-of-the-island-of-tenerife-aerial-dron-2021-08-27-09-58-20-utc.jpg'
import SectionHero from "../components/SectionHero";
import {tableCourses,getData} from "./api/utils/Airtable";
import CourseList from "../components/CourseList";
import { useRouter } from 'next/router'
import ocean3 from '../public/ocean3.jpg'

export async function getStaticProps(){
    const courses = await getData(tableCourses);
    // console.log(courses)
    // res.setHeader(
    //     'Cache-Control',
    //     'public, s-maxage=10, stale-while-revalidate=59'
    // )

    return {
        props:{
            content:courses,
        }
    }

}

export default function Courses({content}) {
    let harvardFall = content.filter((d,i)=>{
        // console.log(d.fields.Name)
        return d.fields.Semester==='Fall' & d.fields.School ==='Harvard'
    }).sort((a,b)=>b.fields.Name - a.fields.Name)
    let harvardSpring = content.filter((d,i)=>{
        return d.fields.Semester==='Spring' & d.fields.School ==='Harvard'
    })
    let mitFall = content.filter((d,i)=>{
        return d.fields.Semester==='Fall' & d.fields.School ==='MIT'
    })
    let mitSpring = content.filter((d,i)=>{
        return d.fields.Semester==='Spring' & d.fields.School ==='MIT'
    })

    // console.log(harvardFall)

    const router = useRouter()
    // const style = {
    //     marginRight: 10,
    //     color: router.asPath === href ? 'red' : 'black',
    // }

    const handleClick = (e) => {
        e.preventDefault()
        router.push('/resources')
    }


    return (
        <>
            <SectionHero image={ocean3} imageheight={'30vh'} imageposition={'right'} priority={true}>
                <div className={'text-2xl lg:text-5xl font-bold drop-shadow-xl shadow-black mb-8 mt-16 text-center'}>Undergraduate Marine-Related Courses
                </div>
            </SectionHero>
            <a className={`text-black pl-8 mt-4 text-lg `} href={'/resources'} onClick={handleClick}>⬅Go Back</a>
            <div className={'text-black text-base h-auto min-h-[50vh] flex flex-col flex-nowrap justify-center m-auto w-[90vw] lg:w-4/5 gap-10 mt-4 mb-4'}>
                <CourseList key={'harvardFall'} title={'Harvard Fall Courses'} courses={harvardFall}/>
                <CourseList title={'Harvard Spring Courses'} courses={harvardSpring}/>
                <CourseList title={'MIT Fall Courses'} courses={mitFall}/>
                <CourseList title={'MIT Spring Courses'} courses={mitSpring}/>
            </div>

        </>
    )
}
