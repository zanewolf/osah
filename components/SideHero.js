import React from 'react';
import Link from 'next/link'
import logo from '../public/logo.png'
import Image from "next/image";
import styles from "../styles/section.module.css";


import {Button} from '@material-ui/core'

export default function SideHero ({image,imagealt,imageposition,children}) {
    return (
        <section className={styles.sectionHeroWrapper}>
            <Image
                className={styles.sideImage}
                priority
                src={image}
                alt={imagealt}
                layout={'responsive'}
                objectFit={'cover'}
                objectPosition={imageposition}
                // position={'relative'}
            />

            <div className={styles.heroContent}>
                {children}
            </div>
        </section>
    );
}