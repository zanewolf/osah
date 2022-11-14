import React, {useState,useEffect} from 'react'
import {MapContainer, Marker,TileLayer,Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';
import MarkerClusterGroup from "@changey/react-leaflet-markercluster";
import {FaExternalLinkAlt} from "react-icons/all";
import {HiOutlineMail} from "react-icons/hi";
import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";
import {ExpandMore} from "@material-ui/icons";
import styled from "styled-components";
import "leaflet-loading"
import { popupContent, popupHead, popupText, okText } from "./popupStyles";





let iconDict = {'Biological Sciences': '/marker_map_icon_bs.png',
    'Engineering': '/marker_map_icon_en.png',
    'Environmental Sciences': '/marker_map_icon_es.png',
    'Humanities':'/marker_map_icon_hum.png',
    'Communications': '/marker_map_icon_com.png',
    'Policy/Economics': '/marker_map_icon_dp.png',
    'Cross-Cutting':'/marker_map_icon_other.png'
}

const fieldColors={
    'Policy/Economics': '#66275f',
    'Communications':'#823c3a',
    'Humanities':'#f5a578',
    'Environmental Sciences': '#01477d',
    'Biological Sciences': '#01778c',
    'Engineering': '#52b69a',
    'Cross-Cutting': '#818588'

}
let fieldColor;

function GetIcon(primaryField){
    let thisIcon = primaryField in iconDict ? iconDict[primaryField] : oIcon
    // console.log(thisIcon)
    return L.icon({
        iconSize: [40,40],
        iconUrl: thisIcon,
        iconAnchor: [20,40],
        shadowUrl: '/marker-shadow.png',
        shadowAnchor:[12,40]
        // iconSize: [48]
    })
}


function prepData(data){
    // console.log(data)

    data.forEach(node=>{
        // console.log(node)

        if (node.fields.Latitude && node.fields.Longitude){
            node.fields.Latitude = +node.fields.Latitude
            node.fields.Longitude = +node.fields.Longitude
            node.fields.position=[node.fields.Latitude,node.fields.Longitude]
        } else{

            // // console.log(getLatLon(node.data.Main_Location))
            // try {
            //     getLatLon(node.data.Main_Location)
            //         .then(result => {
            //             console.log(result)
            //             let lat = +result.data.items[0].position.lat
            //             let lng = +result.data.items[0].position.lng
            //             node.data.position = [lat, lng]
            //         })
            // } catch(error){
            //     console.log('cruisemap error: ',error)
            //     node.data.position=[0,0]
            //     node.data.Research_Subject=node.data.Research_Subject+" - Location Error"
            //     }

            node.fields.position =[0,0]
            node.fields.Research_Subject=node.fields.Research_Subject+" - Location Error"

            // node.data.position = getLatLong(node.data.Main_Location)
            //     .then(coords => {console.log(coords); return coords})
        }
        // node.data.dataIcon = node.data.Data_Available ? FaCheckSquare : FaTimes
    })
    return data;
}


export default function MapWrapper({data}){
    let displayData = prepData(data)

    const copy =  (email) => {
        navigator.clipboard.writeText(email);
        alert('Email address copied');
    }


    return (
        <div className={'m-auto items-center'}>
            <MapContainer
                center={[0, 0]}
                noWrap={true}
                continuousWorld={false}
                maxBoundsViscosity={1}
                maxBounds={[[-90, -180],[90, 180]]}
                tap={false}
                zoom={2}
                minZoom={1}
                tilesize={512}
                maxZoom={16}
                scrollWheelZoom={true}
                // @ts-ignore
                loadingControl={true}
                style={{
                    height: '75vh',
                    width: '100vw',
                    zIndex:'0'
                }}>
                <TileLayer
                    attribution='Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC'
                    url='https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
                />
                <MarkerClusterGroup>

                    {displayData.map((node, i) => {
                        fieldColor = node.fields.Primary_Field in fieldColors ? fieldColors[node.fields.Primary_Field] : '#818588'
                        return (
                            <Marker
                                position={node.fields.position}
                                key={node.id}
                                icon={GetIcon(node.fields.Primary_Field)}
                            >
                                <Popup className="request-popup" autoClose={false}
                                >
                                    <div className={'text-center min-h-[100px] h-auto md:max-h-[60vh] md:w-[300px] w-[250px] mt-3'}>
                                        <div className={'flex flex-col flex-nowrap m-auto text-center'}>
                                            <span className={'text-xl font-bold border-b-2 border-black mb-2'}>{node.fields.Research_Subject}</span>
                                            <span className={'text-lg'}>{node.fields.Year}</span>
                                            {/*<h3> {node.data.position}</h3>*/}
                                            {/*<h4>{node.data.Other_Locations}</h4>*/}
                                            <span className={'text-lg'}>{node.fields.People_Involved}</span>
                                        </div>
                                        <hr/>
                                        <div className={'text-left py-2'}>
                                            <h3><span className={'font-bold'}>Data Collected:</span> <span>{node.fields.Data_Medium}</span></h3>
                                            <h3><span className={'font-bold'}>Data available:</span> {node.fields.Data_Available === 'Public'?
                                                <a href={node.fields.Data_Link} target={"_blank"} rel={'noreferrer'} >Public Link <FaExternalLinkAlt/></a>
                                                :
                                                node.fields.Data_Available === 'Upon Request' ?
                                                    <EmailButton
                                                        aria-label={"Copy Email Button"}
                                                        onClick={()=>copy(node.fields.Data_Email)}>Contact the Scholar </EmailButton>
                                                    :
                                                    'Not Yet'
                                            }
                                            </h3>
                                            <h3><span className={'font-bold'}>Research Focus:</span> <span>{node.fields.Research_Focus}</span></h3>



                                        </div>

                                        <hr/>
                                        {node.fields.Other_Locations && <Accordion animation={false}>

                                            <AccordionSummary expandIcon={<ExpandMore/>}>
                                                OTHER LOCATIONS
                                            </AccordionSummary>

                                            <AccordionDetails>
                                                {node.fields.Other_Locations}
                                            </AccordionDetails>

                                        </Accordion>
                                        }
                                        {node.fields.About && <Accordion>

                                            <AccordionSummary expandIcon={<ExpandMore/>}>
                                                ABOUT
                                            </AccordionSummary>

                                            <AccordionDetails>
                                                <span className={'text-left'}>{node.fields.About}</span>
                                            </AccordionDetails>

                                        </Accordion>
                                        }
                                    </div>


                                </Popup>
                                {/*<StyledPopup bandColor = {fieldColor} >*/}
                                {/*    <HeaderInfo>*/}
                                {/*        <h1>{node.fields.Research_Subject}</h1>*/}
                                {/*        <h2>{node.fields.Year}</h2>*/}
                                {/*        /!*<h3> {node.data.position}</h3>*!/*/}
                                {/*        /!*<h4>{node.data.Other_Locations}</h4>*!/*/}
                                {/*        <h2>{node.fields.People_Involved}</h2>*/}
                                {/*    </HeaderInfo>*/}
                                {/*    <hr/>*/}
                                {/*    <h3>Data Collected: <span>{node.fields.Data_Medium}</span></h3>*/}
                                {/*    <h3>Research Focus: <span>{node.fields.Research_Focus}</span></h3>*/}

                                {/*    <h3>Data available: {node.fields.Data_Available === 'Public'?*/}
                                {/*        <a href={node.fields.Data_Link} target={"_blank"} rel={'noreferrer'} >Public Link <FaExternalLinkAlt/></a>*/}
                                {/*        :*/}
                                {/*        node.fields.Data_Available === 'Upon Request' ?*/}
                                {/*            <EmailButton*/}
                                {/*                aria-label={"Copy Email Button"}*/}
                                {/*                onClick={()=>copy(node.fields.Data_Email)}>Email Me</EmailButton>*/}
                                {/*            :*/}
                                {/*            'Not Yet'*/}
                                {/*    }*/}
                                {/*    </h3>*/}

                                {/*    <hr/>*/}
                                {/*    {node.fields.Other_Locations && <Accordion>*/}

                                {/*        <AccordionSummary expandIcon={<ExpandMore/>}>*/}
                                {/*            OTHER LOCATIONS*/}
                                {/*        </AccordionSummary>*/}

                                {/*        <AccordionDetails>*/}
                                {/*            {node.fields.Other_Locations}*/}
                                {/*        </AccordionDetails>*/}

                                {/*    </Accordion>*/}
                                {/*    }*/}
                                {/*    {node.fields.About && <Accordion>*/}

                                {/*        <AccordionSummary expandIcon={<ExpandMore/>}>*/}
                                {/*            ABOUT*/}
                                {/*        </AccordionSummary>*/}

                                {/*        <AccordionDetails>*/}
                                {/*            {node.fields.About}*/}
                                {/*        </AccordionDetails>*/}

                                {/*    </Accordion>*/}
                                {/*    }*/}
                                {/*</StyledPopup>*/}
                            </Marker>
                        )
                    })}
                </MarkerClusterGroup>
            </MapContainer>
        </div>
    )
}


const MapPage = styled.div`
  height: 100%;
`
const EmailButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  //width: 5vw;
  border: none;
  //margin: auto;
  //color: #000000;
  //border-right: 2px solid #828282
  display: inline-block;
  cursor: pointer;
  color: #0375ac;
  font-weight: bold;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;

  &:before {
    //content: attr(title);
    visibility: hidden;
    opacity: 0;
    width: 140px;

    background-color: black;
    color: #000000;
    text-align: center;
    border-radius: 5px;
    padding: 5px 0;
    transition: opacity 1s ease-in-out;

    position: absolute;
    //z-index: 1;
    left: 0;
    top: 110%;

  }

  &:hover:before {
    opacity: 1;
    visibility: visible;
  }

  //&:hover {
  //
  //  transition: 0.5s;
  //  //color: purple;
  //  -webkit-transform: scale(1.02) translateZ(0);
  //  transform: scale(1.02) translateZ(0);
  //}
`

const StyledPopup = styled(Popup)`
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border: 6px solid ${props => props.bandColor || "#a70bea"};
  border-radius: 20px;
  position: absolute;
  margin:auto;
  width:35vw;
  min-width: 350px;
  //max-width: 40vw;
  display:flex;
  flex-flow: column nowrap;
  gap: 10px;
  z-index:10;

  
  span{font-weight: lighter}
  
  //.leaflet-popup leaflet-popup-content-wrapper{
  //  width: 30vw;
  //}
  //
  //.leaflet-popup-content{
  //  width: 90% !important;
  //
  //}
  
`

const HeaderInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
`
