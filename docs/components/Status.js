import React from 'react';

export default function Status({text,isFree}) {

    const color = isFree ? '#FF5630' : '#0747A6';

    return (
        <div style={{textTransform:'uppercase',fontWeight:'800',fontSize:'11px',backgroundColor:color,padding:'1px 6px 1px 6px',color:'white',borderRadius:3,display:'inline-block'}}>{text}</div>
    )
}