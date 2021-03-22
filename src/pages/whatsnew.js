import React from 'react';
import styles from './whatsnew.module.css';
import Status from "../../docs/components/Status";

export default function WhatsNew() {

    return (
        <div style={{padding:10,backgroundColor:'white'}}>
            <small>March 2021</small>
            <div style={{display:'flex',gap:8, alignItems:'center'}}>
                <h3 style={{marginBottom:1}}>Improved Drag & Drop Handling</h3>
                <span><Status text="Pro" /> <Status text="Free" isFree /></span></div>
            <p>
                Lorem Ipsum Dolorem Lorem Ipsum DoloremLorem Ipsum DoloremLorem Ipsum DoloremLorem Ipsum DoloremLorem Ipsum DoloremLorem Ipsum DoloremLorem Ipsum DoloremLorem Ipsum DoloremLorem Ipsum DoloremLorem Ipsum DoloremLorem Ipsum DoloremLorem Ipsum DoloremLorem Ipsum DoloremLorem Ipsum DoloremLorem Ipsum DoloremLorem Ipsum DoloremLorem Ipsum DoloremLorem Ipsum DoloremLorem Ipsum DoloremLorem Ipsum DoloremLorem Ipsum DoloremLorem Ipsum DoloremLorem Ipsum DoloremLorem Ipsum Dolorem
                Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem
            </p>
        </div>
    )
}