import React from 'react'
import Hero from "../components/Hero";
import ocean3 from "../public/ocean3.jpg";
import styled from "styled-components";
import {BsPlusCircleFill} from "react-icons/bs";
import guide from '../public/primary_field_guide.pdf'


let airTableForm = "https://airtable.com/shrZtj5uOH8Ncc9zC";
let airtableDataForm = "https://airtable.com/shrlU4ivGTFhQn6vb"

export default function JoinPage() {

    const openGuide = (doc)=>{
        console.log('open guide')
        window.open(doc, "_blank")
    }

    return (
        <div>
            <Hero image={ocean3} imageposition={'center'}>
                <div className={'flex flex-col flex-nowrap justify-between m-auto min-h-[70vh] h-auto gap-16'}>
                    <div className={'flex flex-row flex-nowrap justify-evenly gap-10 m-auto'}>
                        <div className={'flex flex-col flex-nowrap bg-opacity-30 backdrop-blur-sm drop-shadow-2xl bg-black w-[35vw] h-[15vh] md:w-[20vw] md:h-[30vh] mt-[2vh] rounded-2xl'}>
                            <div className={'pt-3 md:pt-6 text-center text-3xl lg:text-5xl uppercase m-auto'}>
                                <p className={'drop-shadow-xl shadow-black'}>Scholar</p>
                            </div>
                            <button className={'m-auto text-white text-5xl hover:scale-110'} as={'a'} aria-label={"Join Button"}
                                        onClick={(e)=>{
                                            e.preventDefault()
                                            window.open(airTableForm);}}>
                                <BsPlusCircleFill/>
                            </button>
                        </div>
                        <div className={'flex flex-col flex-nowrap bg-opacity-30  backdrop-blur-sm drop-shadow-2xl bg-black w-[35vw] h-[15vh] md:w-[20vw] md:h-[30vh] mt-[2vh] rounded-2xl'}>
                            <div className={'pt-3 md:pt-6 text-center text-3xl lg:text-5xl uppercase m-auto'}>
                                <p className={'drop-shadow-xl shadow-black'}>Data</p>
                            </div>
                            <button className={'m-auto text-white text-5xl hover:scale-110'} as={'a'}
                                        aria-label={"Join Button"} onClick={(e)=>{
                                e.preventDefault()
                                window.open(airtableDataForm);}}>
                                <BsPlusCircleFill/>
                            </button>
                        </div>
                    </div>
                    <div className={'flex flex-col flex-nowrap gap-10 justify-center m-auto w-[90vw] md:w-4/5 rounded-2xl p-10 relative bg-black bg-opacity-30 backdrop-blur-sm'}>
                        <p>
                            Welcome! As you fill out these forms, we ask that you think about how you and your work aligns with broad areas of work, which we call &quot;primary fields&quot;: Environmental Sciences, Biological Sciences, Engineering, Humanities, Policy/Economics, Communications, and Cross-Cutting Fields. You might feel your specific disciplines, or sub-fields, intersect two or more primary fields, or that you fit into none of them. That&apos;s totally okay (and awesome)! Select the primary field you think is best. If you&apos;d like to see some examples or edge-cases, check out our guide below.
                        </p>
                        <div className={'bg-blue-600 w-[20vw] p-3 rounded-3xl hover:scale-110 relative m-auto text-center text-2xl'}>
                            <a
                                href="/primary_field_guide.pdf"
                                alt="alt text"
                                target="_blank"
                                rel="noopener noreferrer"
                                >Primary Field Guide</a>
                        </div>

                    </div>
                </div>

            </Hero>
        </div>
    )
}

const DocButton = styled.a`
  font-size: var(--size-24);
  color: white;
  margin: auto;
  margin-top: 5vw;
  text-align: center;
  background: none;
  min-width: 10vw;
  width: auto;
  padding: 1vh;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  //border-radius: 20px;
  //border: 3px solid rgba(255,255,255,1);

  :hover {
    //-webkit-transform: translateZ(0);
    //transform: translateZ(0);
    //-webkit-transition-duration: 0.3s;
    //transition-duration: 0.3s;
    //-webkit-transition-property: transform;
    //transition-property: transform;
    //-webkit-transition-timing-function: ease-out;
    //transition-timing-function: ease-out;
    -webkit-transform: scale(1.05) translateZ(0);
    transform: scale(1.05) translateZ(0);
    //color: blue;
  }
`



