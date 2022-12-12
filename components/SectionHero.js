import React from 'react';
import Image from "next/image";
import styles from "../styles/section.module.css";

import {Button} from '@material-ui/core'

export default function SectionHero ({image,imageposition,imageheight,children}) {
    return (
        <section className={`relative overflow-hidden block ${imageheight === '30vh'? 'h-[30vh]' : 'h-[50vh]'}  w-[100vw]`}>
            {/*<div className={styles.imageWrapper}>*/}
                <Image
                    // className={styles.landingImage}
                    priority={true}
                    src={image}
                    alt="Picture of ocean surface with sunset rays"
                    // layout={'fill'}
                    // objectFit={'cover'}
                    // objectPosition={imageposition}
                    placeholder="blur"
                    fill={'cover'}
                    // position={'relative'}
                />
            {/*</div>*/}


            <div className={styles.sectionHeroContent}>
                {children}
            </div>
        </section>
    );
}
