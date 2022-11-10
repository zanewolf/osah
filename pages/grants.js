import React from 'react'
import SectionHero from "../components/SectionHero";
import ocean3 from "../public/ocean3.jpg";
import InfoCard from "../components/InfoCard";
import marineclass from "../public/marineclass.jpg";
import Link from "next/link";
import GrantCard from "../components/GrantCard";

let contactForm = 'www.google.com'

export default function Grants() {
    return (
        <div>
            <SectionHero image={ocean3} imageposition={'center'} imageheight={'30vh'}>
                <div className={'flex text-center pt-14 lg:pt-0 m-auto z-1 relative text-white text-2xl lg:text-6xl font-bold drop-shadow-2xl shadow-black'}>Grant Information</div>
            </SectionHero>
            <div className={'text-black pt-2 w-96 md:w-5/6 flex items-center h-auto min-h-[30vh] text-center m-auto leading-tight sm:leading-10 text-lg lg:text-xl'}>One of our primary goals at Ocean Scholars @ Harvard is to support marine science at Harvard. Funding is the lifeblood of research, and we would like to help you, the community, find more funding to sustain your research and build your career. We are constantly compiling marine research funding opportunities in order to share them with you. What&apos;s more, we will meet with you one-on-one to understand your needs then provide tailored funding sources, help you understand the application process, provide examples of funded grants, organize an informal proposal peer review, and enhance the overall strength of your proposal (e.g., improving Broader Impacts). We are here to help people at every level, including principal investigators, staff, postdocs, graduate students, and undergraduates. Please reach out to get started (hyperlink to grants page short survey).</div>
            <div className={'grantInfoSection min-h-[20vh] text-black flex flex-col flex-wrap m-auto  justify-evenly w-full h-full items-center text-center' }>
                <p className={'text-2xl'}>Looking for grants to fund marine science? <span className={'font-extrabold'}>We can help! </span></p>
                <a className={'text-black font-extrabold text-3xl bg-sky-900 rounded-2xl p-2 text-white'} href={contactForm}>Contact Us</a>
            </div>
            <div className={'grantInfoSection w-[100vw] h-auto lg:h-[40vh] bg-sky-900 text-white flex flex-row flex-wrap m-auto lg:pt-20 justify-evenly gap-10 p-6 md:p-4 '}>
                <div className={'w-[400px]'}>
                    <div className={'w-full uppercase font-bold text-3xl border-b-2 border-black text-left border-white'}>What we can do</div>
                    <div className={'bulletList text-left'}>
                        {/*<ul className={'list-disc list-inside'}>*/}
                            <li>
                                Learn your interests and needs
                            </li>
                            <li>Provide funding sources tailored to your needs</li>
                            <li>Help you understand the application process</li>
                            <li>Provide examples of funded grants</li>
                            <li>Organize an informal proposal peer review</li>
                            <li>Enhance overall strength of your proposal (e.g. improving Broder Impacts)</li>
                        {/*</ul>*/}

                    </div>
                </div>
                <div className={'w-[400px]'}>
                    <div className={'w-full uppercase font-bold text-3xl border-b-2 border-black text-left border-b-2 border-white'}>Who we work with</div>
                    <div className={'bulletList text-left'}>
                        <li>Principle Investigators
                        </li>
                        <li>Staff</li>
                        <li>Post Doctorates</li>
                        <li>Graduate Students</li>
                        <li>Undergraduate Students</li>
                    </div>
                </div>
                <div className={'w-[400px]'}>
                    <div className={'w-full text-left border-b-2 border-white uppercase font-bold text-3xl border-b-2 border-black'}>Why we do it</div>
                    <div className={'bulletList text-left'}>
                        <li>Because the oceans are largely unexplored</li>
                        <li>because the oceans need our help</li>
                        <li>Because Harvard has amazing ocean scientists</li>
                    </div>
                </div>

            </div>
            <div className="infoCardSection min-h-[50vh] h-auto bg-white text-black flex flex-row flex-wrap justify-center m-auto justify-center gap-y-5 py-8">
                {/*<div className={'w-full flex text-5xl justify-center text-center m-auto uppercase py-6'}>Grant Types Explained</div>*/}
                <GrantCard
                    image={marineclass}
                    title={'Federal Grants'}
                    reverse={false}
                    imagePriority={true}
                    first={true}
                >
                    <div className={'flex flex-col flex-nowrap gap-2'}>
                        <p>
                            Multiple federal agencies fund basic and applied marine research. Federal grants tend to be large ($500K—$5 million), often involve multiple PIs, and usually require an extensive application. Federal funding agencies include the National Science Foundation, NOAA, the Office of Naval Research, the Department of Defense, and others. The website Grants.gov is the &quot;go to&quot; search engine for federal grants. While federal grants traditionally have the same annual due date, many are transitioning to a rolling application process.
                        </p>
                    </div>
                </GrantCard>
                <GrantCard
                    image={marineclass}
                    title={'Foundation Grants'}
                    reverse={true}
                    imagePriority={true}
                >
                    <div className={'flex flex-col flex-nowrap gap-2'}>
                        <p>
                            Foundation grants come from a wide range of non-governmental organizations. These funders support cutting-edge and inspired projects across a wide range of disciplines, including the social sciences. Foundation grants support individuals at all career levels (PIs, postdocs, graduate students, undergraduates) and have a wide range of support, from a couple thousand to millions of dollars. Foundation grants tend to have fewer strings attached and may be more willing to fund high-risk projects, though this is not always the case. Foundation grants can be searched at the Foundation Directory Online that includes thousands of organizations.
                        </p>
                    </div>
                </GrantCard>
                <GrantCard
                    image={marineclass}
                    title={'Cross-Discipline Grants'}
                    reverse={false}
                    imagePriority={true}
                >
                    <div className={'flex flex-col flex-nowrap gap-2'}>
                        <p>
                            Both Federal and Foundation funding sources offer grants explicitly for cross-discipline research, particularly between the natural sciences, social sciences, and the humanities. These grants usually involve multiple PIs from disparate fields and openly embrace the need for a broad range of expertise to tackle some of the world’s largest challenges. As we compile grants to share with you, we are keeping a list of cross-discipline, ocean-related grants.
                        </p>
                    </div>
                </GrantCard>
            </div>

        </div>
    )
}
