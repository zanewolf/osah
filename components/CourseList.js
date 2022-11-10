import React from 'react'
import {useState} from 'react'
import {Accordion, AccordionDetails, Typography,AccordionSummary} from "@material-ui/core";
// import {ExpandMore} from "@material-ui/icons";
import {FaAngleDown} from 'react-icons/fa'

export default function CourseList({title,courses,updating}) {
    // const [data,setData] = useState(courses)

    return (
        <div className={'border-1 border-gray-500 drop-shadow-2xl'}>
            <Accordion className={'text-black relative'}>
                <AccordionSummary
                    expandIcon={<FaAngleDown/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className={'font-bold uppercase text-xl'}
                >
                    {title}
                </AccordionSummary>
                <AccordionDetails>
                    <div className={'flex flex-col flex-nowrap min-h-[10vh] bulletList'}>
                        {courses.map((d,i)=>{
                            return (<li key={i}><span className={'font-bold'}>{d.fields.Code}</span>: {d.fields.Name}</li>)
                        })}
                        {updating && <p className={'text-black relative'}>Hang tight, we&apos;re compiling the list. </p>}
                    </div>



                </AccordionDetails>
            </Accordion>

        </div>
    )
}
