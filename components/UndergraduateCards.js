import React from 'react'
import InfoCard from "./InfoCard";
import ocean3 from '../public/ocean3.jpg'
import rockyshore from '../public/rocky-shore-of-the-island-of-tenerife-aerial-dron-2021-08-27-09-58-20-utc.jpg'
import oceanfloor from '../public/ocean_floor.jpg'

export default function UndergraduateCards({setComp}) {


    return (
        <div className={'min-h-[50vh] text-black flex flex-row flex-wrap justify-evenly m-auto items-center gap-5'}>
            <InfoCard
                image={ocean3}
                title={'OSAH Research Workshop'}
                subtitle={'A workshop designed for undergrads interested in entering research labs'}
                buttonlink={'workshop'}
                setComp={setComp}
            />
            <InfoCard
                image={oceanfloor}
                title={"For PIS"}
                subtitle={'Information for PIs seeking undergraduate researchers'}
                buttonlink={'pis'}
                setComp={setComp}
            />
            <InfoCard
                image={rockyshore}
                title={'Marine Science Courses'}
                subtitle={'A list of marine-related courses at Harvard and MIT'}
                buttonlink={'courses'}
                setComp={setComp}
            />
            <InfoCard
                image={ocean3}
                title={'Research and Jobs'}
                subtitle={'Marine-related research and jobs within and outside of Harvard'}
                buttonlink={'jobs'}
                setComp={setComp}
            />

        </div>
    )
}
