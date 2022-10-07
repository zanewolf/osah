import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import {useDisableBodyScroll} from "../utils/useDisableBodyScroll";


export default function ProfileModal({ show, onClose, children, title }) {
    const [isBrowser, setIsBrowser] = useState(false);
    useDisableBodyScroll(show);


    useEffect(() => {
        setIsBrowser(true);

    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };


    const modalContent = show ? (
        <div  className="modalOverlay z-10 absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 m-auto "
              onClick={handleCloseClick}>
            <div className="modal bg-white rounded-lg p-[15px] w-[85vw] h-auto"
                 onClick={e => {
                     // do not close modal if anything inside modal content is clicked
                     e.stopPropagation();
                 }}>
                <div className="modalHeader flex flex-col justify-end text-lg text-black">
                    <a href="#" onClick={handleCloseClick} className={'text-black'}>
                       x
                    </a>
                    {title && <div className="modalTitle">
                        {title}
                    </div>}
                    <div className="modalBody pt-[10px]"> {children}</div>
                </div>
            </div>
        </div>
        // <StyledModalOverlay>
        //     <StyledModal>
        //         <StyledModalHeader>
        //             <a href="#" onClick={handleCloseClick}>
        //                 x
        //             </a>
        //         </StyledModalHeader>
        //         {title && <StyledModalTitle>{title}</StyledModalTitle>}
        //         <StyledModalBody>{children}</StyledModalBody>
        //     </StyledModal>
        // </StyledModalOverlay>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }
};


// const StyledModalOverlay = styled.div`
//   position: absolute;
//   z-index: 1000;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.5);
//   color:black;
// `
