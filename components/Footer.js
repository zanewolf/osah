import React from 'react';
import Link from "next/link";
import {AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";
import {FiGithub} from "react-icons/fi";
import {HiOutlineMail} from "react-icons/hi";

const Footer = () => {
    return (
        <footer>
            <section className="flex flex-col flex-nowrap justify-center mb-8">
                {/*<div className="text-2xl m-auto">follow or contact me</div>*/}
                <div className="icons flex flex-row justify-center text-2xl md:text-7xl gap-12 md:gap-24 mt-4">
                    <div className={"twitter hover:scale-110 duration-200"}>
                        <Link href={'https://twitter.com/inzaneresearch'} passHref>
                            <a target={"_blank"} referrer={'noreferrer'}>
                                <AiOutlineTwitter />
                            </a>
                        </Link>
                    </div>
                    {/*<div className={"instagram hover:scale-110 duration-200"}>*/}
                    {/*    <Link href={'https://www.instagram.com/zaneywolf/?hl=en'} passHref>*/}
                    {/*        <a target={"_blank"} referrer={'noreferrer'}>*/}
                    {/*            <AiOutlineInstagram/>*/}
                    {/*        </a>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                    {/*<div className={'github scale-90 hover:scale-100 duration-200'}>*/}
                    {/*    <Link href={'https://github.com/zanewolf'} passHref>*/}
                    {/*        <a target={"_blank"} referrer={'noreferrer'}>*/}
                    {/*            <FiGithub/>*/}
                    {/*        </a>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                    <div className={'email hover:scale-110 duration-200'}  onClick={()=>copy()}>
                        {/*<Link href={'https://twitter.com/inzaneresearch'} passHref>*/}
                        {/*<a target={"_blank"} referrer={'noreferrer'}>*/}
                        <HiOutlineMail/>
                        {/*</a>*/}
                        {/*</Link>*/}
                    </div>
                </div>
            </section>
            <p>Copyright 2022 Ocean Scholars @ Harvard University</p>
        </footer>
    );
};

export default Footer;