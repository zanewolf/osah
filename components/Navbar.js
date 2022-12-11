import React, {useState} from 'react';
import Link from "next/link";
import Image from 'next/image'
import {menuData} from '../data/menuData'
import {update} from "lodash";
import {useRouter} from "next/router";

function NavLink({to, route, children}) {
    return <Link href={to} className={`mx-4 `}
                 legacyBehavior={true}>
        <a className={`hover:scale-110 duration-70 ${ route == to ? "font-bold" : "font-light"}`} >
            {children}
        </a></Link>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`mobileMenu absolute top-0 left-0 h-full min-h-screen w-screen bg-black z-10 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter pt-4 drop-shadow-md bg-white h-28"> {/*logo container*/}
                <Link href="/" legacyBehavior={true}>
                    <a className="text-xl font-semibold text-black " >Ocean Scholars @ Harvard University</a>
                </Link>
            </div>
            <div className="flex flex-col flex-between ">
                <div className="flex flex-col justify-center mt-12">
                    {menuData.map((navLink,i)=>{
                        return (
                            <Link key={i} href={navLink.to} legacyBehavior={true}>
                                <a className="text-4xl font-medium my-4 justify-center"  onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                                    {navLink.title}
                                </a>
                            </Link>
                        )})}
                    {/*<a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>*/}
                    {/*    About*/}
                    {/*</a>*/}
                    {/*<a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>*/}
                    {/*    Contact*/}
                    {/*</a>*/}
                </div>
                {/*<div className={'flex m-auto flex-end'}> by zane wolf</div>*/}

            </div>

        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)

    const router = useRouter();

    return (
        <nav className="flex px-2 lg:px-4 lg:py-2 text-center items-center">
            {/*<div className="mobile w-full">*/}

            <MobileNav open={open} setOpen={setOpen}/>
            {/*</div>*/}
            <div className="w:1/2 md:w-5/12 flex items-center">
                {/*<a className="text-2xl font-semibold" href="/">LOGO</a>*/}
                <h1 className={`text-3xl lg:text-4xl flex justify-center ${open ? 'text-black' :'text-primary'}`}>
                    <Link href={'/'} legacyBehavior={true}>
                        <a>
                            <div className={''}>
                                Ocean Scholars
                            </div>
                        </a>
                    </Link>
                </h1>
            </div>
            <div className="w-full flex justify-end items-center align-center m-auto pr-2">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center mt-2 mr-2 lg:hidden lg:text-lg m-2" onClick={() => {
                    setOpen(!open)
                }}>
                    <span className={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5 bg-black  " : "bg-white"}`} />
                    <span className={`h-1 w-full rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0 bg-black  " : "w-full bg-white"}`} />
                    <span className={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out ${open ? "bg-black -rotate-45 -translate-y-3.5 b" : "bg-white"}`} />
                </div>

                <div className="hidden lg:flex text-lg lg:text-2xl gap-8 z-10">
                    {menuData.map((navLink,i)=>{
                            return <NavLink to={navLink.to} key={i} route={router.pathname} >
                                {navLink.title}
                            </NavLink>
                        }
                    )}
                </div>
            </div>
        </nav>
    )
}