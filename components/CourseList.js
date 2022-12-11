import React, {useEffect} from 'react'
import {useState} from 'react'
import {Accordion, AccordionDetails, Typography,AccordionSummary} from "@material-ui/core";
import {FaAngleDown} from 'react-icons/fa'
import {BsInfoCircle} from 'react-icons/bs'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';



const CustomWidthTooltip = styled(({ className, ...props }, TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 500,
        // backgroundColor: theme.palette.common.white,
        color: 'white',
        backgroundColor:'rgba(0,54,120,0.92)',
        boxShadow: 'black',
        fontSize: '1rem',
    },
});

export default function CourseList({title,courses,updating}) {
    // const [data,setData] = useState(courses)
    const [width, setWidth]   = useState(typeof window === 'undefined' ? 0 : window.innerWidth);

    const updateDimensions = () => {
        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, );



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

                            // console.log(d.)
                            return (
                                <li key={i}>
                                    {/*<div>*/}
                                        <span className={'font-bold'}>{d.fields.Code}</span>: {d.fields.Name}
                                        {/*<Tooltip title="Delete">*/}

                                        {/*</Tooltip>*/}
                                        <CustomWidthTooltip
                                            enterTouchDelay={0}
                                            className={'leading-tight'}
                                            placement={width < 1000 ? 'bottom':'right'}
                                            title={d.fields.Description ? d.fields.Description : "No description provided."}
                                        >
                                            <Button size="small" sx={{fontSize:"0.75rem"}}><BsInfoCircle/></Button>
                                        </CustomWidthTooltip>
                                    {/*</div>*/}
                                </li>
                            )
                        })}
                        {updating && <p className={'text-black relative'}>Hang tight, we&apos;re compiling the list. </p>}
                    </div>



                </AccordionDetails>
            </Accordion>

        </div>
    )
}
