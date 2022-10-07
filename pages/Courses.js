import React, {useState} from 'react'
import rocky from '../public/rocky-shore-of-the-island-of-tenerife-aerial-dron-2021-08-27-09-58-20-utc.jpg'
import SectionHero from "../components/SectionHero";
import {getCourses} from "../utils/Airtable";
import CourseList from "../components/CourseList";
import { useRouter } from 'next/router'

export async function getStaticProps({req,res}){
    const courses = await getCourses();
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
    const [harvardFall,setHarvardFall] = useState(content.filter((d,i)=>{
        return d.fields.Semester==='Fall' & d.fields.School ==='Harvard'
    }))
    const [harvardSpring,setHarvardSpring] = useState(content.filter((d,i)=>{
        return d.fields.Semester==='Spring' & d.fields.School ==='Harvard'
    }))
    const [mitFall,setMITFall] = useState(content.filter((d,i)=>{
        return d.fields.Semester==='Fall' & d.fields.School ==='MIT'
    }))
    const [mitSpring,setMITSpring] = useState(content.filter((d,i)=>{
        return d.fields.Semester==='Spring' & d.fields.School ==='MIT'
    }))

    const router = useRouter()
    // const style = {
    //     marginRight: 10,
    //     color: router.asPath === href ? 'red' : 'black',
    // }

    const handleClick = (e) => {
        e.preventDefault()
        router.push('/undergrad')
    }


    return (
        <>
            <SectionHero image={rocky} imageheight={'30vh'} imageposition={'right'}>
                <div className={'text-2xl lg:text-5xl font-bold drop-shadow-xl shadow-black mb-8 mt-16 text-center'}>Undergraduate Marine-Related Courses
                </div>
            </SectionHero>
            <a className={`text-black pl-8 mt-4 text-lg `} href={'/for-undergrads'} onClick={handleClick}>⬅Go Back</a>
            <div className={'text-black text-base h-auto min-h-[50vh] flex flex-col flex-nowrap justify-center m-auto w-[90vw] lg:w-4/5 gap-10 mt-4 mb-4'}>
                <CourseList key={'harvardFall'} title={'Harvard Fall Courses'} courses={harvardFall}/>
                <CourseList title={'Harvard Spring Courses'} courses={harvardSpring}/>
                <CourseList title={'MIT Fall Courses'} courses={mitFall}/>
                <CourseList title={'MIT Spring Courses'} courses={mitSpring} updating={true}/>
            </div>

        </>
    )
}
