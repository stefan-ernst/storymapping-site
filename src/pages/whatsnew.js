import React from 'react';
import styles from './whatsnew.module.css';
import Status from "../../docs/components/Status";
import CustomCard from '../../static/img/CustomFields.png';

export default function WhatsNew() {

    return (
        <div style={{padding:10,backgroundColor:'white'}}>
            <small>May 2021</small>
            <div style={{display:'flex',gap:8, alignItems:'center',marginBottom:10}}>
                <h3 style={{marginBottom:1}}>Improvement Release 05/21</h3>
                <span><Status text="Pro" /> </span></div>
            <p>
                <ul>
                    <li>Improved create functionality for both epics and issues</li>
                    <li>Improved scrolling behaviour on Server & DC</li>
                    <li>Epic colors can now be used for the entire column</li>
                    <li>Fixed a bug that prevented issue linking when a custom link type is used</li>
                </ul>
            </p>
            <div style={{display:'flex',gap:8, alignItems:'center',marginBottom:10}}>
                <h3 style={{marginBottom:1}}>Free Version Improvements 05/21</h3>
                <span><Status text="Free" isFree /> </span></div>
            <p>
                <ul>
                    <li>Improved create functionality for both epics and issues</li>
                    <li>Minimize release, sprint or custom swimlanes</li>
                    <li>Fixed display issues with long issue summaries</li>

                </ul>
                If you like Story Mapping App, please rate us on the <a href="https://marketplace.atlassian.com/1224357" target="_blank">Atlassian Marketplace!</a> ❤️
            </p>
            <small>April 2021</small>
            <div style={{display:'flex',gap:8, alignItems:'center',marginBottom:10}}>
                <h3 style={{marginBottom:1}}>Major Release 04/21 (1.4 DC)</h3>
                <span><Status text="Pro" /> </span></div>
            <p>
                <ul>
                    <li>You can now use a custom link type to connect issues to epics</li>
                    <li>Minimize release, sprint or custom swimlanes</li>
                    <li>View issues with any status in the backlog</li>
                </ul>
            </p>
            <div style={{display:'flex',gap:8, alignItems:'center',marginBottom:10}}>
                <h3 style={{marginBottom:1}}>Improving the Backlog</h3>
                <span><Status text="Pro" /> <Status text="Free" isFree /></span></div>
            <p>
                <ul>
                    <li>We moved the backlog to the left for easier access</li>
                    <li>The backlog supports ordering now</li>
                    <li>Dragging issues from the backlog now removes them instantly</li>
                </ul>
            </p>
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


        </div>
    )
}