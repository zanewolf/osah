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
import ehs from '../public/ehs.jpg'
import GrantCard from "../components/GrantCard";
import { Menu } from '@headlessui/react'


export default function ResourcePage() {

    const copyEmail =  (email) => {
        console.log('copyEmail')
        navigator.clipboard.writeText(email);
        alert('Email address copied');
    }


    return (
        <>
            <SectionHero image={ocean3} imageposition={'center'} imageheight={'30vh'}>
                <div className={'text-6xl font-bold drop-shadow-xl shadow-black mb-8 mt-16 text-center'}>
                    Resources
                </div>
            </SectionHero>
            {/*<div className={'text-black flex flex-col flex-nowrap gap-2'}>*/}
            {/*    <Menu>*/}
            {/*        <Menu.Button>Jump to Section</Menu.Button>*/}
            {/*        <Menu.Items>*/}
            {/*            <Menu.Item>*/}
            {/*                <Link href="#undergrads"><a className={'text-black'}>Undergrads</a></Link>*/}
            {/*            </Menu.Item>*/}
            {/*            <Menu.Item>*/}
            {/*                <Link href="#jobs"><a className={'text-black'}>Jobs</a></Link>*/}
            {/*            </Menu.Item>*/}
            {/*            <Menu.Item>*/}

            {/*                <Link href="#harvard"><a className={'text-black'}>Harvard</a></Link>*/}
            {/*            </Menu.Item>*/}
            {/*        </Menu.Items>*/}
            {/*    </Menu>*/}
            {/*    /!*<h2>Jump to...</h2>*!/*/}
            {/*    /!*<Link href="#undergrads"><a className={'text-black'}>Undergrads</a></Link>*!/*/}
            {/*    /!*<Link href="#jobs"><a className={'text-black'}>Jobs</a></Link>*!/*/}
            {/*    /!*<Link href="#harvard"><a className={'text-black'}>Harvard</a></Link>*!/*/}
            {/*</div>*/}
            <div id={'undergrads'} className="infoCardSection min-h-[50vh] h-auto bg-white text-black justify-center m-auto justify-center gap-y-5 py-8">
                    <div className={'p-2 md:p-8'}>
                        <h2 className={'m-auto text-center font-bold uppercase text-3xl p-4'}>For Undergrads</h2>
                        <div className="verticalRuler h-[3px] bg-black w-full md:w-[80vw] justify-center m-auto"></div>
                    </div>
                <div className={'m-5 flex flex-col gap-y-10'}>
                    <GrantCard
                        image={workshoppic}
                        title={'OSAH Research Workshop'}
                        reverse={false}
                        imagePriority={true}
                        first={true}
                    >
                        <div>
                            <p>
                                We will offer a workshop at the beginning of each semester, starting in Spring 2023, to help undergraduates understand ocean scholarship across the University. In this workshop, we will address common questions and concerns regarding research, and outline several ways to find and join groups or labs that pique your interest.
                            </p>
                        </div>
                    </GrantCard>
                    <GrantCard
                        image={marineclass}
                        title={'Undergrad Courses in Marine Science'}
                        reverse={true}
                        imagePriority={true}
                    >
                        <div className={'flex flex-col flex-nowrap gap-2'}>
                            <p>High enrollment in marine science classes at Harvard shows that our students have an appetite for the topic. There are many Harvard courses related to the marine environment, though they are spread across many concentrations and schools.</p>
                            <Link href={'/courses'} passHref={true} >
                                <button
                                    className={'bg-blue-600 text-white w-1/3 p-1 rounded-3xl m-auto justify-center hover:scale-110 relative text-center text-xl'}
                                    alt="alt text"
                                >View Course List</button>
                            </Link>

                        </div>
                    </GrantCard>
                </div>
            </div>
            <div id={'jobs'} className="infoCardSection min-h-[50vh] h-auto bg-sky-800 text-white justify-center m-auto justify-center py-8">

                <div className={'p-2 md:p-8'}>
                    <h2 className={'m-auto text-center font-bold uppercase text-3xl p-4'}>For Marine Research and Marine-Related Jobs</h2>
                    <div className="verticalRuler h-[3px] bg-white w-full md:w-[80vw] justify-center m-auto"></div>
                </div>
                <div className={'m-5 flex flex-col gap-y-16'}>
                <GrantCard
                    image={whoi}
                    title={'Jobs At Harvard'}
                    reverse={false}
                >
                    <div>
                        <p>Conducting research as an undergraduate alongside coursework can be an important piece of building a career in marine science. Research can be conducted for credit, for pay, and as work towards a thesis, all during the semester as your schedule allows. Research opportunities for undergraduates are commonly found by reaching out to faculty. In addition, the following within-Harvard databases may including postings/opportunities in marine science. Note that we are encouraging PIs to post opportunities to broaden access to marine science at Harvard.</p>

                        <div className={'mt-2 font-light bulletList'}>
                            <li>Harvard Office of Undergraduate Research and Fellowships (link)</li>
                            <li>Harvard Student Research Opportunities in FAS (link)</li>
                            <li>Harvard Student Employment Office Job Board (link)</li>
                            <li> Guidance from Harvard (link) </li>
                        </div>
                    </div>
                </GrantCard>
                <GrantCard
                    image={whoi}
                    title={'Jobs outside of Harvard'}
                    reverse={true}
                    imagePriority={false}
                >
                    <div>
                        <p>
                            Gaining experience outside of Harvard labs can also be valuable in building your expertise in marine science. Such opportunities may occur through study abroad, during the summer break or J term, or even just after graduation. The databases below are a few that include a wide range of research opportunities, internships, and jobs outside of Harvard for during and after graduation.
                        </p>
                        <div className={'mt-2 font-light bulletList'}>
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
                    </GrantCard>
                </div>
            </div>
            <div id={'harvard'} className="infoCardSection min-h-[50vh] h-auto bg-white text-black justify-center m-auto justify-center gap-y-5 py-8">

                <div className={'p-2 md:p-8'}>
                    <h2 className={'m-auto text-center font-bold uppercase text-3xl'}>For Harvard</h2>
                    <div className="verticalRuler h-[3px] bg-black w-full md:w-[80vw] justify-center m-auto"></div>
                </div>
                <div className={'m-5 flex flex-col gap-y-10'}>
                    <GrantCard
                        image={mentorship}
                        title={'Information for PIs'}
                        reverse={false}
                        imagePriority={false}
                    >
                        PIs, please <button className={'text-blue-800'} onClick={()=>{copyEmail('oceans@fas.harvard.edu')}}>email us</button> if you are seeking students interested in ocean-related research. We are happy to help you communicate your opportunity broadly and connect you with fantastic students.
                    </GrantCard>
                    <GrantCard
                        image={ehs}
                        title={'EHS'}
                        reverse={true}
                        imagePriority={false}
                    >
                        The EHS team at Harvard can help with pre-trip safety planning, risk assessments, safety equipment and procedures, sample permitting documentation, shipping/receiving, and more in relation to field work. If Ocean Scholars ever have any questions about these topics or what else EHS can do to help support their research, please feel free to reach out to <button className={'text-blue-800'} onClick={()=>{copyEmail('chris_caldwell@harvard.edu')}}>Chris Caldwell </button> (Laboratory Safety Services Manager) or their lab’s <a className={'text-blue-800'} href={"https://www.ehs.harvard.edu/safety-officers"} target={"_blank"} rel={"noreferrer"}>Lab Safety Advisor</a>.

                    </GrantCard>
                </div>
            </div>



        </>
    )
}
