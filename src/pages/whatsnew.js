import React from 'react';
import styles from './whatsnew.module.css';
import Status from "../../docs/components/Status";
import CustomCard from '../../static/img/CustomFields.png';

export default function WhatsNew() {

    return (
        <div style={{padding:10,backgroundColor:'white'}}>
            <small>March 2021</small>
            <div style={{display:'flex',gap:8, alignItems:'center',marginBottom:10}}>
                <h3 style={{marginBottom:1}}>Improved Drag & Drop Handling</h3>
                <span><Status text="Pro" /> <Status text="Free" isFree /></span></div>
            <p>
                We have improved our drag and drop engine to be more reliable and easy to use
            </p>
            <div style={{display:'flex',gap:8, alignItems:'center',marginBottom:10}}>
                <h3 style={{marginBottom:1}}>Card custom fields</h3>
                <span><Status text="Pro" /></span></div>
            <p>
                Display custom fields on cards, bring just the right level of information to your team's attention, at a glance.<br />
                <img src={CustomCard} style={{width:226,height:110,margin:"10px 0 4px 0"}} />
                <br />
                <a className="blue" href="https://www.storymapping.app/docs/pro-features/#adding-custom-fields-to-cards" rel="noopener" target="_blank">Learn more</a>
            </p>

            <div style={{display:'flex',gap:8, alignItems:'center',marginBottom:10}}>
                <h3 style={{marginBottom:1}}>Bugfixes</h3>
                <span><Status text="Pro" /> <Status text="Free" isFree /></span></div>
            <p>
                <ul>
                    <li>Fixed a visual issue with large textfields in the Epic row</li>
                    <li>Sprints can now be assigned more reliably</li>
                </ul>
            </p>
        </div>
    )
}