import React from 'react'
import {useState} from 'react'
import ocean3 from '../public/ocean3.jpg'
import Link from 'next/link'
import SectionHero from "../components/SectionHero";
import Hero from '../components/Hero'
import InfoCard from "../components/InfoCard";
import workshoppic from '../public/workshop.jpg'
import mentorship from '../public/mentorship.jpg'
import marineclass from '../public/marineclass.jpg'
import whoi from '../public/whoi.jpg'

export default function UndergradPage() {

    const copyEmail =  () => {
        console.log('copyEmail')
        navigator.clipboard.writeText('oceans@fas.harvard.edu');
        alert('Email address copied');
    }


    return (
        <>
            <SectionHero image={ocean3} imageposition={'center'} imageheight={'30vh'}>
                <div className={'text-2xl lg:text-5xl font-bold drop-shadow-xl shadow-black mb-8 mt-16 text-center'}>Information for Undergraduate Students
                </div>
            </SectionHero>
            {/*<button className={`${component === 'cards' ? 'hidden' : 'visible'} text-black pl-4 text-lg `} onClick={()=>{setComponent('cards')}}>⬅Go Back</button>*/}
            <div className={'m-5 text-black flex flex-col gap-y-20'}>
            {/*    {component === 'cards' ?*/}
            {/*        <UndergraduateCards setComp={setComponent}/>*/}
            {/*        : component === 'workshop' ?*/}
            {/*            <Workshop/>*/}
            {/*            : component === 'jobs' ?*/}
            {/*                <div>jobs</div>*/}
            {/*                : component === 'courses' ?*/}
            {/*        <div>research</div>:<div>for PIs</div>*/}
            {/*    }*/}
                <InfoCard
                image={workshoppic}
                title={'OSAH Research Workshop'}
                imagePriority={true}
                >
                    We will offer a workshop at the beginning of each semester, starting in Spring 2023, to help undergraduates understand ocean scholarship across the University. In this workshop, we will address common questions and concerns regarding research, and outline several ways to find and join groups or labs that pique your interest.
                </InfoCard>
                <InfoCard
                    image={marineclass}
                    title={'Undergrad Courses in Marine Science'}
                    reverse={true}
                    imagePriority={true}
                >
                    <div className={'flex flex-col flex-nowrap gap-2'}>
                        <p>High enrollment in marine science classes at Harvard shows that our students have an appetite for the topic. There are many Harvard courses related to the marine environment, though they are spread across many concentrations and schools.</p>
                        <Link href={'/courses'} passHref={true} >
                            <button
                                className={'bg-blue-600 text-white w-1/3 p-1 rounded-3xl mt-5 hover:scale-110 relative text-center text-xl'}
                                alt="alt text"
                            >View Course List</button>
                        </Link>

                    </div>
                    </InfoCard>
                <InfoCard
                    image={whoi}
                    title={'Marine Research and Marine-Related Jobs at Harvard'}
                    reverse={false}
                >
                    <div>
                        <p>Conducting research as an undergraduate alongside coursework can be an important piece of building a career in marine science. Research can be conducted for credit, for pay, and as work towards a thesis, all during the semester as your schedule allows. Research opportunities for undergraduates are commonly found by reaching out to faculty. In addition, the following within-Harvard databases may including postings/opportunities in marine science. Note that we are encouraging PIs to post opportunities to broaden access to marine science at Harvard.</p>

                        <div className={'mt-2 font-light'}>
                            <li>Harvard Office of Undergraduate Research and Fellowships (link)</li>
                            <li>Harvard Student Research Opportunities in FAS (link)</li>
                            <li>Harvard Student Employment Office Job Board (link)</li>
                            <li> Guidance from Harvard (link) </li>
                        </div>
                    </div>

                </InfoCard>
                <InfoCard
                    image={whoi}
                    title={'Marine Research and Marine-Related Jobs outside of Harvard'}
                    reverse={true}
                >
                    <div>
                        <p>
                            Gaining experience outside of Harvard labs can also be valuable in building your expertise in marine science. Such opportunities may occur through study abroad, during the summer break or J term, or even just after graduation. The databases below are a few that include a wide range of research opportunities, internships, and jobs outside of Harvard for during and after graduation.
                        </p>
                        <div className={'mt-2 font-light'}>
                            <li>Pathways to Science Database (link)</li>
                            <li> Seven Seas Media Job Board (link)</li>
                            <li> Schmidt Marine Job Board (link)</li>
                            <li> NOAA Job Board (link)</li>
                            <li> USA Jobs (link) (Note: Look up some agencies you aren&apos;t familiar with like NOAA, BOEM, Navy, Coast Guard, EPA, U.S. Army Corps of Engineers, U.S. Geological Survey, etc. You might be surprised the types of jobs available)</li>
                            <li> Zintellect Government Jobs Board (link)</li>
                            <li> Texas A&M Wildlife and Fisheries Job Board (link)</li>
                            <li> Conservation Job Board (link)</li>

                        </div>
                    </div>
                    </InfoCard>
                <InfoCard
                    image={mentorship}
                    title={'Information for PIs'}
                    reverse={false}
                >
                    PIs, please <button className={'text-blue-800'} onClick={()=>{copyEmail()}}>email us</button> if you are seeking students interested in ocean-related research. We are happy to help you communicate your opportunity broadly and connect you with fantastic students.
                </InfoCard>
            </div>


        </>
    )
}
