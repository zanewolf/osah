import React from 'react';
import Link from 'next/link'
import logo from '../public/logo.png'
import Image from "next/image";
import styles from "../styles/section.module.css";


import {Button} from '@material-ui/core'

export default function Hero ({image,imagealt,imageposition,imageheight,children}) {
    return (
        <section className={styles.heroWrapper}>
            <Image
                className={styles.landingImage}
                priority={true}
                src={image}
                alt={imagealt}
                layout={'fill'}
                objectFit={'cover'}
                objectPosition={imageposition}
                loading={'eager'}
                // position={'relative'}
            />

            <div className={styles.sectionHeroContent}>
                {children}
            </div>
        </section>
    );
}
