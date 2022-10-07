import React from 'react';
import styled from "styled-components";

import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';

let paletteColors=['#351431','#823c3a',
    '#002d50', '#01778c','#818588']
export default function TagSection({tags, color}) {

    console.log(color, paletteColors.includes(color))
    let fontColor = paletteColors.includes(color) ? '#fff' : '#000'

    if (tags) {

        tags = tags.split(',');

        let tagItems = tags.map((tag, i) => {
            return (
                <span className={"tagItem"} key={i}>{tag} </span>
            )
        })

        return (
            <KeywordSection bandColor={color} fontColor={fontColor}>
                {tagItems}
            </KeywordSection>
        )
    } else {
        return (<> <p> No Keywords Given</p></>)
    }

}

const KeywordSection=styled.div`
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: space-evenly;


  & span {
    color: ${props => props.fontColor};
    background-color: ${props => props.bandColor || "#ffffff"};
    padding: 2pt 10pt;
    border-radius: 10pt;
    font-size: var(--size-12);
    margin: 2pt;
  }

`