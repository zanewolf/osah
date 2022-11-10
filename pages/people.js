import React from 'react'
import {useState,useEffect,useMemo} from "react";
import SectionHero from "../components/SectionHero";
import {MultiSelect} from "react-multi-select-component";
import Link from "next/link";
import {tablePeople,getData} from "./api/utils/Airtable";
import ProfileCard from '../components/ProfileCard';
import debounce from "lodash.debounce";
import ocean3 from '../public/ocean3.jpg'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())


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


export async function getStaticProps(){
    const res = await getData(tablePeople);


    return {
        props:{
            content:res,
        },
        revalidate:60
    }

}

export default function People({content}) {
    const [selected, setSelected] = useState(options);
    const [buttonText, setButtonText] = useState('')
    const [search, setSearch] = useState("");
    const [dirData, setDirData] = useState(content)

    // const { data, error } = useSWR('/api/getPeople', fetcher)
    //
    // console.log(data)
    //




    ////// functions to debounce search bar and update search state
    const handleChange = (e) => {
        // console.log(e.target.value)
        setSearch(e.target.value);
    };

    const debouncedResults = useMemo(() => {
        // console.log('debouncedResults')
        return debounce(handleChange, 300);
    }, []);

    useEffect(() => {
        return () => {
            debouncedResults.cancel();
        };
    });


    ////// functions to filter data based on search and selection menus
    useEffect(()=>{
        let filteredData={}
        let filteredData2={}
        let primaryFields={}

        selected.forEach((d,i)=> {return primaryFields[d.value]=i})

        filteredData= content.filter((profile)=>{
            return Object.values(profile.fields).join(' ').toLowerCase().includes(search.toLowerCase());
        })
        // console.log(filteredData)

        filteredData2 = filteredData.filter((profile)=>{
                return profile.fields.Primary_Field in primaryFields
            })

        // console.log(filteredData2)
        setDirData(filteredData2)
    },[search,selected,content])


    //// functions to change button text based on window size
    useEffect(()=>{
        window.innerWidth > 1024 ? setButtonText('Add Profile') : setButtonText('+')
    },[])

    const updateDimensions = () => {
        if (typeof window !== 'undefined') {
            window.innerWidth > 1024 ? setButtonText('Add Profile') : setButtonText('+');
        }
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, )

    return (
        // <>
        //     {!loading ? (
                <div>
                    <SectionHero image={ocean3} imageposition={'center'} imageheight={'30vh'}>
                        <div className="directoryHeader relative flex flex-col flex-nowrap justify-end items-center m-auto h-[30vh] w-[100vw] mb-8">
                            <div className={'text-2xl lg:text-6xl font-bold drop-shadow-xl shadow-black mb-8'}>Directory of Ocean Scholars</div>
                            <div className="directoryMenu flex flex-row flex-nowrap justify-evenly lg:justify-around text-black w-[100vw] ">
                                <div className="selectMenu w-1/3 ">
                                    <MultiSelect
                                        options={options}
                                        value={selected}
                                        onChange={setSelected}
                                        disableSearch={true}
                                        labelledBy={"Select"}
                                    />
                                </div>
                                <div className="joinButton w-1/12 lg:w-1/5">
                                    <Link href="/join" passHref={true}>
                                        <button className="bg-white text-black  hover:scale-110 font-bold text-xl rounded w-full h-full m-auto">
                                            {buttonText}
                                        </button>
                                    </Link>
                                </div>
                                <div className="searchBar w-1/3">
                                    <label htmlFor="search-form">
                                        <input
                                            type="search"
                                            name="search-form"
                                            id="search-form"
                                            className="rounded border-gray-500 bg-no-repeat text-black w-full h-full px-2"
                                            placeholder="Search"
                                            defaultValue={''}
                                            onChange={debouncedResults}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>

                    </SectionHero>

                    <div className="min-h-[50vh] h-auto flex flex-row flex-wrap justify-evenly text-black m-auto py-2">
                        {dirData.map((profile,i)=>{
                            // console.log(profile)
                            return <ProfileCard profile={profile} index={i} key={profile.id}> </ProfileCard>
                        })}
                    </div>

                </div>
        //     ) : (
        //         <LoadingScreen />
        //     )}
        // </>

    )
}


