import React from 'react'
import Hero from "../components/Hero";
import ocean3 from "../public/ocean3.jpg";
import {useEffect, useMemo, useState} from "react";
import debounce from "lodash.debounce";
import {getData} from "../utils/Airtable";
import SectionHero from "../components/SectionHero";

let options=  [
    {
        "value": "Biological Sciences",
        "label": "Biological Sciences",
        "color": "blue",
    }, {
        "value": "Environmental Sciences",
        "label": "Environmental Sciences"
    }, {
        "value": "Engineering",
        "label": "Engineering"
    }, {
        "value": "Policy/Economics",
        "label": "Policy/Economics"
    }, {
        "value": "Communications",
        "label": "Communications"
    }, {
        "value": "Humanities",
        "label": "Humanities"
    }, {
        "value": "Cross-Cutting",
        "label": "Cross-Cutting Fields"
    }
]

export async function getServerSideProps({req,res}){
    const data = await getData();

    return {
        props:{
            content:data,
        }
    }

}

export default function Map({content}) {

    return (
        <div>
            <SectionHero image={ocean3} imageposition={'center'} imageheight={'30vh'}>
                <div className={'flex justify-center m-auto z-1 relative text-white text-6xl'}>
                    Map of Scholars Data
                </div>
            </SectionHero>
            {/*<MapComponent data={content}/>*/}


        </div>
    )
}
