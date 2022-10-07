import React from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import {FaExternalLinkAlt} from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi'
import L from 'leaflet';
import styled from "styled-components";
import peIcon from '../public/marker_map_icon_dp.png';
import comIcon from '../public/marker_map_icon_com.png';
import humIcon from '../public/marker_map_icon_hum.png';
import esIcon from '../public/marker_map_icon_es.png';
import bsIcon from '../public/marker_map_icon_bs.png';
import enIcon from '../public/marker_map_icon_en.png'
import oIcon from '../public/marker_map_icon_other.png';
import { ExpandMore } from '@material-ui/icons';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
// import {useWindowSize} from "./useWindowSize";
import MarkerClusterGroup from 'react-leaflet-markercluster'
// import getLatLon from "./Geocoder";


let DefaultIcon = null;

let iconDict = {'Biological Sciences': bsIcon,
    'Engineering': enIcon,
    'Environmental Sciences': esIcon,
    'Humanities':humIcon,
    'Communications': comIcon,
    'Policy/Economics': peIcon
}

const fieldColors={
    'Policy/Economics': '#66275f',
    'Communications':'#823c3a',
    'Humanities':'#f5a578',
    'Environmental Sciences': '#01477d',
    'Biological Sciences': '#01778c',
    'Engineering': '#52b69a',
    'Other': '#818588'

}
let fieldColor;


if (typeof window === 'undefined') {
    DefaultIcon = L.icon({
        iconUrl: oIcon
    });
    L.Marker.prototype.options.icon = DefaultIcon;

}

// function GetIcon(primaryField){
//     let thisIcon = primaryField in iconDict ? iconDict[primaryField] : oIcon
//     // console.log(thisIcon)
//     return L.icon({
//         iconSize: [40,40],
//         iconUrl: thisIcon,
//         iconAnchor: [10,40]
//         // iconSize: [48]
//     })
// }

// function prepData(data){
//     // console.log(data)
//
//     data.nodes.forEach(node=>{
//
//         if (node.data.Latitude && node.data.Longitude){
//             node.data.Latitude = +node.data.Latitude
//             node.data.Longitude = +node.data.Longitude
//             node.data.position=[node.data.Latitude,node.data.Longitude]
//         } else{
//
//             // // console.log(getLatLon(node.data.Main_Location))
//             // try {
//             //     getLatLon(node.data.Main_Location)
//             //         .then(result => {
//             //             console.log(result)
//             //             let lat = +result.data.items[0].position.lat
//             //             let lng = +result.data.items[0].position.lng
//             //             node.data.position = [lat, lng]
//             //         })
//             // } catch(error){
//             //     console.log('cruisemap error: ',error)
//             //     node.data.position=[0,0]
//             //     node.data.Research_Subject=node.data.Research_Subject+" - Location Error"
//             //     }
//
//             node.data.position =[0,0]
//             node.data.Research_Subject=node.data.Research_Subject+" - Location Error"
//
//             // node.data.position = getLatLong(node.data.Main_Location)
//             //     .then(coords => {console.log(coords); return coords})
//         }
//         // node.data.dataIcon = node.data.Data_Available ? FaCheckSquare : FaTimes
//     })
//     return data;
// }





export default function MapComponent ({data}) {


    const copy =  (email) => {
        navigator.clipboard.writeText(email);
        alert('Email address copied');
    }

    // let displayData = prepData(data)
    // var size = useWindowSize()

    const position = [51.505, -0.09]

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>


        // <MapPage>
        //     <MapContainer
        //         center={[0, 0]}
        //         noWrap={true}
        //         continuousWorld={false}
        //         maxBoundsViscosity={1}
        //         // maxBounds={[[-90, -180],[90, 180]]}
        //         tap={false}
        //         zoom={2}
        //         minZoom={1}
        //         tilesize={size.width > 1045? 512: 256}
        //         maxZoom={16}
        //         scrollWheelZoom={true}
        //         style={{
        //             height: size.width > 1045 ? `82vh`: '79vh',
        //             width: '100%',
        //             float: 'bottom',
        //             zIndex: '0',
        //             margin: size.width > 1045 ? `auto`: 'auto auto auto auto',
        //             // position: 'sticky'
        //         }}>
        //         <TileLayer
        //             attribution='Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC'
        //             url='https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
        //         />
        //         <MarkerClusterGroup>
        //
        //             {displayData.nodes.map((node, i) => {
        //                 fieldColor = node.data.Primary_Field in fieldColors ? fieldColors[node.data.Primary_Field] : '#818588'
        //                 return (
        //                     <Marker
        //                         position={node.data.position}
        //                         key={node.id}
        //                         icon={GetIcon(node.data.Primary_Field)}
        //                     >
        //                         {/*<ResponsivePopup/>*/}
        //                         <StyledPopup bandColor = {fieldColor} size={size}>
        //                             <HeaderInfo>
        //                                 <h1>{node.data.Research_Subject}</h1>
        //                                 <h2>{node.data.Year}</h2>
        //                                 {/*<h3> {node.data.position}</h3>*/}
        //                                 {/*<h4>{node.data.Other_Locations}</h4>*/}
        //                                 <h2>{node.data.People_Involved}</h2>
        //                             </HeaderInfo>
        //                             <hr/>
        //                             <h3>Data Collected: <span>{node.data.Data_Medium}</span></h3>
        //                             <h3>Research Focus: <span>{node.data.Research_Focus}</span></h3>
        //
        //                             <h3>Data available: {node.data.Data_Available === 'Public'?
        //                                 <a href={node.data.Data_Link} target={"_blank"} rel={'noreferrer'} >Public Link <FaExternalLinkAlt/></a>
        //                                 :
        //                                 node.data.Data_Available === 'Upon Request' ?
        //                                     <EmailButton
        //                                         aria-label={"Copy Email Button"}
        //                                         onClick={()=>copy(node.data.Data_Email)}>Email Me <HiOutlineMail/></EmailButton>
        //                                     :
        //                                     'Not Yet'
        //                             }
        //                             </h3>
        //
        //                             <hr/>
        //                             {node.data.Other_Locations && <Accordion>
        //
        //                                 <AccordionSummary expandIcon={<ExpandMore/>}>
        //                                     OTHER LOCATIONS
        //                                 </AccordionSummary>
        //
        //                                 <AccordionDetails>
        //                                     {node.data.Other_Locations}
        //                                 </AccordionDetails>
        //
        //                             </Accordion>
        //                             }
        //                             {node.data.About && <Accordion>
        //
        //                                 <AccordionSummary expandIcon={<ExpandMore/>}>
        //                                     ABOUT
        //                                 </AccordionSummary>
        //
        //                                 <AccordionDetails>
        //                                     {node.data.About}
        //                                 </AccordionDetails>
        //
        //                             </Accordion>
        //                             }
        //                         </StyledPopup>
        //                     </Marker>
        //                 )
        //             })}
        //         </MarkerClusterGroup>
        //     </MapContainer>
        // </MapPage>
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

  
  span{font-weight: lighter}
  
  .leaflet-popup leaflet-popup-content-wrapper{
    width: 30vw;
  }
  
  .leaflet-popup-content{
    width: 90% !important;

  }
  
`

const HeaderInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
`
