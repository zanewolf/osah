import React, {useState} from 'react'
import Image from "next/image";
import {FaExternalLinkAlt,FaEnvelope,FaTimes} from "react-icons/fa";
import Avatar from "boring-avatars";
import styled from "styled-components";
import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";
import {ExpandMore} from "@material-ui/icons";
import Modal from 'react-modal'
import TagSection from "./TagSection";

const myLoader = ({ src, quality }) => {
    return `${src}?&q=${quality || 100}`
}
let bgColor

let paletteColors=['#351431','#823c3a','#f5a578',
    '#002d50', '#01778c', '#52b69a','#818588']

let fieldColor

const fieldColors={
    'Policy/Economics': paletteColors[0],
    'Communications':paletteColors[1],
    'Humanities':paletteColors[2],
    'Environmental Sciences': paletteColors[3],
    'Biological Sciences': paletteColors[4],
    'Engineering': paletteColors[5],
    'Cross-Cutting':paletteColors[6]

}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        position:'absolute',
        transform: 'translate(-50%, -50%)',
        marginTop: `var( --screen-nav-bar-height)`,
        height: '80vh',
        borderRadius: '15px',
        color: 'black',
        // maxWidth: '95vw',
        // minWidth: '70vw',
        width: '90vw',
        zIndex: '10000'
        // overflow: 'scroll'
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',

    }
};
export default function ProfileCard({profile,index}) {
    const [modalState, setModalState] = useState(false)
    const [image,setImage] = useState(profile.fields.ImageAttachment ? true : false)

    let profileImage = profile.fields.ImageAttachment ? profile.fields.ImageAttachment[0].url : null;

    fieldColor = profile.fields.Primary_Field in fieldColors ? fieldColors[profile.fields.Primary_Field] : '800'
    let colors = paletteColors.filter(d=>d!==fieldColor)


    const copy =  (email) => {
        console.log(email)
        navigator.clipboard.writeText(email);
        alert('Email address copied');
    }

    const openWebsite = (href) => {
        href != null ?
            window.open(href, "_blank")
            :
            alert('No website provided. Sorry!')
    }

    return (
        <>
            <div className={`profileCard shadow-xl relative w-[300px] h-[450px]  rounded-xl m-1 sm:m-3 flex flex-col flex-nowrap text-center m-auto `}>
                <div className={`colorHeader relative z-0 h-40 rounded-t-lg py-1 ${fieldColor === '#351431' ? 'bg-split-100' :
                    fieldColor === '#823c3a' ? 'bg-split-200' :
                        fieldColor === '#f5a578' ? 'bg-split-300' :
                            fieldColor === '#002d50' ? 'bg-split-400' :
                                fieldColor === '#01778c' ? 'bg-split-500' :
                                    fieldColor === '#52b69a' ? 'bg-split-600' : 'bg-split-700' }`}>
                    <div className="imageContainer m-auto block w-[40%] relative h-full mt-2 rounded-full overflow-hidden">
                        {image ?
                                <Image
                                    loader={myLoader}
                                    className={'profileImage'}
                                    src={profileImage}
                                    alt={'Profile picture of ' + profile.fields.Name}
                                    layout={'fill'}
                                    objectFit={'cover'}
                                    unoptimized={false}
                                    quality={100}
                                    loading={"eager"}
                                    priority = {index < 10 ? true : false}
                                />
                            :
                            <div className="avatarWrapper ">
                                <Avatar
                                    size={'12vh'}
                                    name={profile.fields.Name}
                                    variant="beam"
                                    colors={colors}
                                />
                            </div>
                        }
                    </div>

                </div>

                {/*<div className={'m-auto justify-center w-[80%] bg-black h-[2px] m-2'}></div>*/}
                <div className="profileTitles px-1 text-lg h-32 flex flex-col flex-nowrap justify-evenly">
                    <div className="profileName m-2 h-auto text-3xl font-bold">
                        {profile.fields.Name}
                    </div>
                    <div className="profileLocation font-bold">
                        {profile.fields.Affiliations.split(",")[0]}
                    </div>
                    <div className="profileTitle m-2">
                        {profile.fields.Title}
                    </div>
                </div>
                <div className="primaryFields text-md h-44 m-auto flex flex-col flex-nowrap justify-end pb-4">
                    <div className="primaryField underline pb-1 uppercase">
                        {profile.fields.Primary_Field}
                    </div>
                    <div className="secondaryField font-light">
                        {profile.fields.Secondary_Fields.split(',').map((secondary,i)=>{
                            return <div key={i}>{secondary}</div>
                        })}
                    </div>
                </div>
                <div className={`cardFooter justify-center rounded-b-lg h-[13%] ${fieldColor === '#351431' ? 'bg-accent-100' :
                    fieldColor === '#823c3a' ? 'bg-accent-200' :
                        fieldColor === '#f5a578' ? 'bg-accent-300' :
                            fieldColor === '#002d50' ? 'bg-accent-400' :
                                fieldColor === '#01778c' ? 'bg-accent-500' :
                                    fieldColor === '#52b69a' ? 'bg-accent-600' : 'bg-accent-700' }`}>
                    <div className="footerIcons flex flex-row flex-nowrap h-full text-white">
                        <div className={'websiteIcon items-center m-auto text-3xl md:text-3xl hover:scale-105 translate-y-1'}>
                            <button onClick={()=>openWebsite(profile.fields.Website)}>
                                <FaExternalLinkAlt/>
                            </button>
                        </div>
                        <div className="verticalRuler w-[5px] bg-white h-full"></div>
                        <div className={'emailIcon items-center m-auto text-3xl md:text-4xl  hover:scale-105 translate-y-1'}>

                            <button  onClick={()=>copy(profile.fields.Email)}>
                                <FaEnvelope/>
                            </button>

                        </div>
                        <div className="verticalRuler w-[5px] bg-white h-full  "></div>
                        <div className={'bioButton items-center m-auto text-3xl md:text-4xl  hover:scale-105'}>
                            <button onClick = {()=>setModalState(true)}>
                                Bio
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalState}
                // onHide={handleClose}
                onRequestClose={()=>setModalState(false)}
                style={customStyles}
                contentLabel="Profile Modal"
                ariaHideApp={false}
                preventScroll={true}
                backdropClassName={'modal-backdrop'}
                overlayClassName="Overlay"
            >
                <div className={`flex justify-end m-auto text-black text-4xl`}>
                    <button
                        aria-label={profile.fields.Name + "Profile Modal Close Button"}
                        onClick={()=>setModalState(false)}
                        className={' hover:scale-110'}
                    >
                        <FaTimes/>
                    </button>                </div>
                <PersonBlock>
                    <div className={`flex flex-col flex-nowrap justify-around w-[90%] md:w-[80%] xl:w-[40%] mr-4 max-h-[75vh]`}>
                        <div className={`colorHeader h-[50%] rounded-t-lg py-1 flex flex-col flex-nowrap m-auto justify-center align-center `}>
                            <div className={`imageContainer relative m-auto w-64 h-64 overflow-hidden rounded-full border-8 ${fieldColor === '#351431' ? 'border-accent-100' :
                                fieldColor === '#823c3a' ? 'border-accent-200' :
                                    fieldColor === '#f5a578' ? 'border-accent-300' :
                                        fieldColor === '#002d50' ? 'border-accent-400' :
                                            fieldColor === '#01778c' ? 'border-accent-500' :
                                                fieldColor === '#52b69a' ? 'border-accent-600' : 'border-accent-700'}`}>
                                {profileImage ?
                                    <Image
                                        loader={myLoader}
                                        className={'image'}
                                        src={profileImage}
                                        alt={'Profile picture of ' + profile.fields.Name}
                                        layout={'fill'}
                                        objectFit={'cover'}
                                        quality={90}
                                        // width={450}
                                        // height={600}
                                        priority = {index < 10 ? true : false}
                                    />
                                    :
                                    <div className="avatarWrapper -translate-x-4 -translate-y-4">
                                        <Avatar
                                            size={'30vh'}
                                            name={profile.fields.Name}
                                            variant="beam"
                                            colors={colors}
                                        />
                                    </div>
                                }
                            </div>

                        </div>
                        <div className={`flex flex-col flex-nowrap justify-between m-auto align-center pt-2 pb-2 h-[60%]`}>
                            <div className={'flex justify-center m-auto uppercase text-4xl text-center break-words'}>{profile.fields.Name}</div>
                            <div className={`flex flex-col flex-nowrap text-center justify-center m-auto p-2`}>
                                <div className={` justify-center text-xl font-normal p-2 ${fieldColor === '#351431' ? 'border-accent-100' :
                                    fieldColor === '#823c3a' ? 'border-accent-200' :
                                        fieldColor === '#f5a578' ? 'border-accent-300' :
                                            fieldColor === '#002d50' ? 'border-accent-400' :
                                                fieldColor === '#01778c' ? 'border-accent-500' :
                                                    fieldColor === '#52b69a' ? 'border-accent-600' : 'border-accent-700'}`}>
                                    {profile.fields.Title && profile.fields.Title} at {profile.fields.Affiliations && profile.fields.Affiliations}
                                </div>
                                <div className={`justify-center m-auto p-2 ${fieldColor === '#351431' ? 'border-accent-100' :
                                    fieldColor === '#823c3a' ? 'border-accent-200' :
                                        fieldColor === '#f5a578' ? 'border-accent-300' :
                                            fieldColor === '#002d50' ? 'border-accent-400' :
                                                fieldColor === '#01778c' ? 'border-accent-500' :
                                                    fieldColor === '#52b69a' ? 'border-accent-600' : 'border-accent-700'}`}>

                                </div>

                            </div>
                            <div className={'flex flex-col justify-end align-end text-center m-auto'}>
                                <p className={'uppercase text-xl'}>{profile.fields.Primary_Field}</p>
                                <hr style={{color: fieldColor}}/>
                                <ul>
                                    {profile.fields.Secondary_Fields.split(',').map((d, i) => {
                                        return (
                                            <li key={i}>
                                                <h6>{d}</h6>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className={`card-footer flex flex-row flex-nowrap pt-4`}>
                            <div className={`rounded-full text-white flex text-5xl justify-center m-auto w-[10vh] h-[10vh] ${fieldColor === '#351431' ? 'bg-accent-100' :
                                fieldColor === '#823c3a' ? 'bg-accent-200' :
                                    fieldColor === '#f5a578' ? 'bg-accent-300' :
                                        fieldColor === '#002d50' ? 'bg-accent-400' :
                                            fieldColor === '#01778c' ? 'bg-accent-500' :
                                                fieldColor === '#52b69a' ? 'bg-accent-600' : 'bg-accent-700' }`}>
                                <button
                                    title="Personal Website"
                                    aria-label={profile.fields.Name + " Modal Website Link"}
                                    onClick={() => openWebsite(profile.fields.Website)}
                                className={' hover:scale-110'}>
                                    {<FaExternalLinkAlt/>}
                                </button>
                            </div>
                            <div className={`rounded-full text-white flex text-5xl justify-center m-auto w-[10vh] h-[10vh] ${fieldColor === '#351431' ? 'bg-accent-100' :
                                fieldColor === '#823c3a' ? 'bg-accent-200' :
                                    fieldColor === '#f5a578' ? 'bg-accent-300' :
                                        fieldColor === '#002d50' ? 'bg-accent-400' :
                                            fieldColor === '#01778c' ? 'bg-accent-500' :
                                                fieldColor === '#52b69a' ? 'bg-accent-600' : 'bg-accent-700' }`}>
                                <button
                                    title="Click to copy email"
                                    aria-label={profile.fields.Name + " Modal Email Button"}
                                    onClick={() => copy(profile.fields.Email)}
                                    className={' hover:scale-110'}>
                                    {<FaEnvelope/>}
                                </button>
                            </div>
                        </div>
                    </div>
                    <RightBlock>
                        <div className={`flex flex-col flex-nowrap`}>
                            <p className={'text-lg font-bold uppercase'}>About</p>
                            <p className={`overflow-hidden mb-2 text-base`}> {profile.fields.About}</p>
                        </div>
                        <ModalAccordions>
                            {profile.fields.Affiliations && profile.fields.Affiliations.includes(',') && <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore/>}>
                                    ALL AFFILIATIONS
                                </AccordionSummary>
                                <AccordionDetails>
                                    <TagSection tags={profile.fields.Affiliations} color={fieldColor}></TagSection>
                                </AccordionDetails>
                            </Accordion>
                            }
                            {profile.fields.Active_Field_Sites && <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore/>}>
                                    ACTIVE FIELD SITES
                                </AccordionSummary>
                                <AccordionDetails>
                                    <TagSection tags={profile.fields.Active_Field_Sites} color={fieldColor}></TagSection>
                                </AccordionDetails>
                            </Accordion>
                            }
                            {profile.fields.Research_Keywords && <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore/>}>
                                    RESEARCH KEYWORDS
                                </AccordionSummary>
                                <AccordionDetails>
                                    <TagSection tags={profile.fields.Research_Keywords} color={fieldColor}></TagSection>
                                </AccordionDetails>
                            </Accordion>
                            }
                            {profile.fields.Personal_Keywords && <Accordion>

                                <AccordionSummary expandIcon={<ExpandMore/>}>
                                    PERSONAL KEYWORDS
                                </AccordionSummary>

                                <AccordionDetails>
                                    <TagSection tags={profile.fields.Personal_Keywords} color={fieldColor}></TagSection>
                                </AccordionDetails>

                            </Accordion>
                            }
                        </ModalAccordions>
                    </RightBlock>
                </PersonBlock>
            </Modal>

            {/*{modalState && <ProfileModal*/}
            {/*    onClose={() => setModalState(false)}*/}
            {/*    show={modalState}*/}
            {/*>*/}
            {/*    <PersonBlock>*/}
            {/*        <div className={`flex flex-col flex-nowrap justify-between w-[40%] mr-4 max-h-[75vh]`}>*/}
            {/*            <div className={`colorHeader h-[50%] rounded-t-lg py-1 flex flex-col flex-nowrap m-auto justify-center align-center `}>*/}
            {/*                <div className={`imageContainer relative m-auto w-64 h-64 overflow-hidden rounded-full border-8 ${fieldColor === '#351431' ? 'border-accent-100' :*/}
            {/*                    fieldColor === '#823c3a' ? 'border-accent-200' :*/}
            {/*                        fieldColor === '#f5a578' ? 'border-accent-300' :*/}
            {/*                            fieldColor === '#002d50' ? 'border-accent-400' :*/}
            {/*                                fieldColor === '#01778c' ? 'border-accent-500' :*/}
            {/*                                    fieldColor === '#52b69a' ? 'border-accent-600' : 'border-accent-700'}`}>*/}
            {/*                    {profileImage ?*/}
            {/*                        <Image*/}
            {/*                            loader={myLoader}*/}
            {/*                            className={'image'}*/}
            {/*                            src={profileImage}*/}
            {/*                            alt={'Profile picture of ' + profile.fields.Name}*/}
            {/*                            layout={'intrinsic'}*/}
            {/*                            quality={90}*/}
            {/*                            width={450}*/}
            {/*                            height={600}*/}
            {/*                            priority = {index < 10 ? true : false}*/}
            {/*                        />*/}
            {/*                        :*/}
            {/*                        <div className="avatarWrapper -translate-x-4 -translate-y-4">*/}
            {/*                            <Avatar*/}
            {/*                                size={'30vh'}*/}
            {/*                                name={profile.fields.Name}*/}
            {/*                                variant="beam"*/}
            {/*                                colors={colors}*/}
            {/*                            />*/}
            {/*                        </div>*/}
            {/*                    }*/}
            {/*                </div>*/}

            {/*            </div>*/}
            {/*            <div className={`flex flex-col flex-nowrap justify-between m-auto align-center pt-2 pb-2 h-[60%]`}>*/}
            {/*                <div className={'flex justify-center m-auto uppercase text-4xl text-center break-words'}>{profile.fields.Name}</div>*/}
            {/*                <div className={`flex flex-col flex-nowrap text-center justify-center m-auto p-2`}>*/}
            {/*                    <div className={` justify-center text-xl font-normal p-2 ${fieldColor === '#351431' ? 'border-accent-100' :*/}
            {/*                        fieldColor === '#823c3a' ? 'border-accent-200' :*/}
            {/*                            fieldColor === '#f5a578' ? 'border-accent-300' :*/}
            {/*                                fieldColor === '#002d50' ? 'border-accent-400' :*/}
            {/*                                    fieldColor === '#01778c' ? 'border-accent-500' :*/}
            {/*                                        fieldColor === '#52b69a' ? 'border-accent-600' : 'border-accent-700'}`}>*/}
            {/*                        {profile.fields.Title && profile.fields.Title} at {profile.fields.Affiliations && profile.fields.Affiliations}*/}
            {/*                    </div>*/}
            {/*                    <div className={`justify-center m-auto p-2 ${fieldColor === '#351431' ? 'border-accent-100' :*/}
            {/*                        fieldColor === '#823c3a' ? 'border-accent-200' :*/}
            {/*                            fieldColor === '#f5a578' ? 'border-accent-300' :*/}
            {/*                                fieldColor === '#002d50' ? 'border-accent-400' :*/}
            {/*                                    fieldColor === '#01778c' ? 'border-accent-500' :*/}
            {/*                                        fieldColor === '#52b69a' ? 'border-accent-600' : 'border-accent-700'}`}>*/}

            {/*                    </div>*/}

            {/*                </div>*/}
            {/*                <div className={'flex flex-col justify-end align-end text-center m-auto'}>*/}
            {/*                    <p className={'uppercase text-xl'}>{profile.fields.Primary_Field}</p>*/}
            {/*                    <hr style={{color: fieldColor}}/>*/}
            {/*                    <ul>*/}
            {/*                        {profile.fields.Secondary_Fields.split(',').map((d, i) => {*/}
            {/*                            return (*/}
            {/*                                <li key={i}>*/}
            {/*                                    <h6>{d}</h6>*/}
            {/*                                </li>*/}
            {/*                            )*/}
            {/*                        })}*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className={`card-footer flex flex-row flex-nowrap pt-4`}>*/}
            {/*                <div className={`rounded-full text-white flex text-5xl justify-center m-auto w-[10vh] h-[10vh] ${fieldColor === '#351431' ? 'bg-accent-100' :*/}
            {/*                    fieldColor === '#823c3a' ? 'bg-accent-200' :*/}
            {/*                        fieldColor === '#f5a578' ? 'bg-accent-300' :*/}
            {/*                            fieldColor === '#002d50' ? 'bg-accent-400' :*/}
            {/*                                fieldColor === '#01778c' ? 'bg-accent-500' :*/}
            {/*                                    fieldColor === '#52b69a' ? 'bg-accent-600' : 'bg-accent-700' }`}>*/}
            {/*                    <button*/}
            {/*                        title="Personal Website"*/}
            {/*                        aria-label={profile.fields.Name + " Modal Website Link"}*/}
            {/*                        onClick={() => openWebsite(profile.fields.Website)}>*/}
            {/*                        {<FaExternalLinkAlt/>}*/}
            {/*                    </button>*/}
            {/*                </div>*/}
            {/*                <div className={`rounded-full text-white flex text-5xl justify-center m-auto w-[10vh] h-[10vh] ${fieldColor === '#351431' ? 'bg-accent-100' :*/}
            {/*                    fieldColor === '#823c3a' ? 'bg-accent-200' :*/}
            {/*                        fieldColor === '#f5a578' ? 'bg-accent-300' :*/}
            {/*                            fieldColor === '#002d50' ? 'bg-accent-400' :*/}
            {/*                                fieldColor === '#01778c' ? 'bg-accent-500' :*/}
            {/*                                    fieldColor === '#52b69a' ? 'bg-accent-600' : 'bg-accent-700' }`}>*/}
            {/*                    <button*/}
            {/*                        title="Click to copy email"*/}
            {/*                        aria-label={profile.fields.Name + " Modal Email Button"}*/}
            {/*                        onClick={() => copy(profile.fields.Email)}>*/}
            {/*                        {<FaEnvelope/>}*/}
            {/*                    </button>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <RightBlock>*/}
            {/*            <ModalAbout>*/}
            {/*                <p className={'text-lg font-bold uppercase'}>About</p>*/}
            {/*                <p className={`overflow-hidden mb-2 text-base`}> {profile.fields.About}</p>*/}
            {/*            </ModalAbout>*/}
            {/*            /!*<ModalAccordions>*!/*/}
            {/*            /!*    {employer && employer.includes(',') && <Accordion>*!/*/}
            {/*            /!*        <AccordionSummary expandIcon={<ExpandMore/>}>*!/*/}
            {/*            /!*            All AFFILIATIONS*!/*/}
            {/*            /!*        </AccordionSummary>*!/*/}
            {/*            /!*        <AccordionDetails>*!/*/}
            {/*            /!*            <TagSection tags={employer} color={fieldColor}></TagSection>*!/*/}
            {/*            /!*        </AccordionDetails>*!/*/}
            {/*            /!*    </Accordion>*!/*/}
            {/*            /!*    }*!/*/}
            {/*            /!*    {activeFieldSites && <Accordion>*!/*/}
            {/*            /!*        <AccordionSummary expandIcon={<ExpandMore/>}>*!/*/}
            {/*            /!*            ACTIVE FIELD SITES*!/*/}
            {/*            /!*        </AccordionSummary>*!/*/}
            {/*            /!*        <AccordionDetails>*!/*/}
            {/*            /!*            <TagSection tags={activeFieldSites} color={fieldColor}></TagSection>*!/*/}
            {/*            /!*        </AccordionDetails>*!/*/}
            {/*            /!*    </Accordion>*!/*/}
            {/*            /!*    }*!/*/}
            {/*            /!*    {researchKeywords && <Accordion>*!/*/}
            {/*            /!*        <AccordionSummary expandIcon={<ExpandMore/>}>*!/*/}
            {/*            /!*            RESEARCH KEYWORDS*!/*/}
            {/*            /!*        </AccordionSummary>*!/*/}
            {/*            /!*        <AccordionDetails>*!/*/}
            {/*            /!*            <TagSection tags={researchKeywords} color={fieldColor}></TagSection>*!/*/}
            {/*            /!*        </AccordionDetails>*!/*/}
            {/*            /!*    </Accordion>*!/*/}
            {/*            /!*    }*!/*/}
            {/*            /!*    {personalKeywords && <Accordion>*!/*/}

            {/*            /!*        <AccordionSummary expandIcon={<ExpandMore/>}>*!/*/}
            {/*            /!*            PERSONAL KEYWORDS*!/*/}
            {/*            /!*        </AccordionSummary>*!/*/}

            {/*            /!*        <AccordionDetails>*!/*/}
            {/*            /!*            <TagSection tags={personalKeywords} color={fieldColor}></TagSection>*!/*/}
            {/*            /!*        </AccordionDetails>*!/*/}

            {/*            /!*    </Accordion>*!/*/}
            {/*            /!*    }*!/*/}
            {/*            /!*</ModalAccordions>*!/*/}
            {/*        </RightBlock>*/}
            {/*    </PersonBlock>*/}
            {/*</ProfileModal>*/}
            {/*}*/}
        </>
    )
}

const PersonBlock = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  max-width: 90vw;
  min-width: 60vw;
  min-height: 70vh;
  height: auto;
  margin: auto;
  border-radius: 5pt;
  padding: 2vh;

  @media screen and (max-width: 1200px) {
    flex-flow: column nowrap;
    max-width: 90vw;
    width: auto;
    align-items: center;
    align-content: center;
    gap: 5vh;
  }

  @media screen and (max-width: 500px) {
    flex-flow: column nowrap;
    min-height: 50vh;
    max-width: 95vw;
    width: auto;
    align-items: center;
    align-content: center;
  }

  //.teamBlock:nth-child(2n){
  //  flex-direction:row-reverse;
  //  background-color: #acacac;
  // 
`

const RightBlock = styled.div`
  //min-height: 50vh;
  width: 60%;
  //min-height: 20vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-content: flex-start;

  @media screen and (max-width: 1200px) {
    flex-flow: column wrap;
    width: auto;
    height: auto;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    font-size: 0.75em;
  }

`
const ModalAbout = styled.div`
  display: flex;
  flex-flow: column nowrap;

`
const AboutP = styled.p`
  overflow: hidden;
  margin-bottom: 2vh;
  
  @media screen and (max-width: 900px){
    font-size: var(--size-14);
  }
  

`
const ModalAccordions = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-top: auto;
  bottom: 0;
  
  @media screen and (max-width: 1200px) {
    margin-top: 3vh;
    width: 100%;
  }
`

const ButtonDiv = styled.div`
  display: flex;
  justify-content: right;
  
  button{
    background: none;
    border: none;
    font-size: var(--size-32);

    &:before {
      //content: attr(title);
      visibility: hidden;
      opacity: 0;
      width: 140px;
      background-color: black;
      color: #fff;
      text-align: center;
      border-radius: 5px;
      padding: 5px 0;
      transition: opacity 1s ease-in-out;

      position: absolute;
      z-index: 1;
      left: 0;
      top: 110%;

    }
    &:hover:before {
      opacity: 1;
      visibility: visible;
    }

    &:hover{
      font-weight: bolder;
      transition: 0.5s;
      //color: purple;
      -webkit-transform: scale(1.1) translateZ(0);
      transform: scale(1.1) translateZ(0);
    }
  }
`
const LeftBlock = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 40%;
  margin-right: 3vh;
  max-height: 65vh;

  @media screen and (max-width: 1200px) {
    flex-flow: column nowrap;
    margin: auto;
    justify-content: center;
    align-content: center;
    width: auto;
  }

  @media screen and (max-width: 500px) {
    flex-flow: column nowrap;
    max-width: 90vw;
    min-height: 75vh;
    height: auto;
    align-items: center;
    align-content: center;
    margin-bottom: 5vh;
  }
`
const UserHeaderModal = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: auto;
  justify-content: center;
  align-content: center;
  
  
`
const UserAvatarModal = styled.div`
  border: 8px solid ${props => props.bandColor || "#ba0f0f"};;
  margin: auto;
  //margin-top: 10pt;
  max-width: 40vh;
  max-height: 40vh;
  height: auto;
  overflow: hidden;
  border-radius: 50%;
`
// const UserImageModal = styled(GatsbyImage)`
//   //margin-top: 10pt;
//   border: 8px solid ${props => props.bandColor || "#ffffff"};;
//   max-width: 30vh;
//   width: auto;
//   height: auto;
//   max-height: 30vh;
//   object-fit: cover;
//   display: flex;
//   justify-content: center;
//   align-content: center;
//   margin: auto;
//   //border: 2px solid #03BFCB;
//   border-radius: 50%;
// `
const UserNameModal = styled.h1`
  display: flex;
  justify-content: center;
  margin: auto;
  font-size: var(--size-32);
  text-transform: uppercase;
  //word-break: break-all;
  overflow-wrap: break-word;
  text-align: center;
  hyphens: manual;
`
const UserInfoModal = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-content: center;
  padding-top: 3vh;
  padding-bottom: 3vh;
  margin: auto;
  height: 90%;

  @media screen and (max-width: 500px) {
    justify-content: space-evenly;
    height: auto;
  }

`
const UserEmploymentModal = styled.div`
  display:flex;
  flex-flow: column nowrap;
  text-align: center;
  justify-content: center;
  margin: auto;
  padding: 5px;
`
const UserRoleModal = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  text-align: center;
  margin: auto;
  font-size: var(--size-16);
  font-weight: lighter;
  padding: 5px;
`
const UserEmployerModal = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  text-align: center;
  margin: auto;
  font-size: var(--size-20);
  font-weight: normal;
  padding: 5px;
`
const UserFieldsModal = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: end;
  align-self: flex-end;
  text-align: center;
  margin: auto;
  
  h4{
    text-transform: uppercase;
    color: rgba(0,0,0,0.5);
    font-size: var(--size-20);
  }
  h6{
    font-size: var(--size-16);
  }
`
const ContactButtons = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`
const ModalButton = styled.button`
  width: 10vh;
  height: 10vh;
  border-radius: 50%;
  padding: 9px 5px 5px 5px;
  border: none;
  font-size: var(--size-48);
  color: #fff;
  background-color: ${props => props.bandColor || "#000000"};

  &:before {
    //content: attr(title);
    visibility: hidden;
    opacity: 0;
    width: 140px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px 0;
    transition: opacity 1s ease-in-out;

    position: absolute;
    z-index: 1;
    left: 0;
    top: 110%;
  }
  &:hover:before {
  opacity: 1;
  visibility: visible;
}

  &:hover{
    font-weight: bolder;
    transition: 0.5s;
    //color: purple;
    -webkit-transform: scale(1.1) translateZ(0);
    transform: scale(1.1) translateZ(0);
  }
  

`