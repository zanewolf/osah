import React from 'react'
import {teamData} from "../data/teamData";
import Image from "next/image";
import pgirguis from '../public/pgirguis_prof.png'
import ahartmann from '../public/ahartmann_prof.png'
import zwolf from '../public/zwolf_prof.png'

export default function AboutTeam() {
    return (
        <div className={'flex flex-col flex-nowrap justify-center text-white relative z-1 lg:mb-12 h-auto '}>
            <div className={'text-5xl m-auto pb-12'}>Meet the Team</div>
            <div className="teamMembers flex flex-row flex-wrap pb-8 lg:pb-24">
                {teamData.map((teamMember,i)=>{
                    return(
                        <div className={`teamAbout z-2 flex flex-col flex-nowrap justify-around w-5/6 lg:w-1/4 m-auto lg:pb-0 pb-8`} key={i}>
                            <div className="w-[30vw] lg:w-[20vw] justify-center m-auto">
                                <Image
                                    src={teamMember.name=='Pete Girguis' ? pgirguis : teamMember.name == 'Aaron Hartmann' ? ahartmann : zwolf}
                                    alt={"Profile picture of "+teamMember.name}
                                    layout={'responsive'}
                                    objectFit={'contain'}
                                    objectPosition={'center'}

                                />
                            </div>

                            <p className={'text-2xl text-center m-2'}>{teamMember.name}</p>
                            <p className={'text-lg text-center pb-1'}>{teamMember.title}</p>
                            <p className={'text-sm text-center'}>{teamMember.about}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
