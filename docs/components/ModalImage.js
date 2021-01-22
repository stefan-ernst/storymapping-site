import React from "react";

export default function ModalImage({src, title, onClose}) {

    return (
        <div className='blanket' onClick={onClose}>
            <div className='modal_image'>
                <img src={src} alt={title} style={{width:'90vw',maxWidth:'60rem'}} />
            </div>
        </div>
    )
}