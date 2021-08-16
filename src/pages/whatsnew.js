import React from 'react';
import styles from './whatsnew.module.css';
import Status from "../../docs/components/Status";
import CustomCard from '../../static/img/CustomFields.png';

export default function WhatsNew({background='white'}) {

    return (
        <div style={{padding:10,backgroundColor:background}}>
            <small>August 2021</small>
            <div style={{display:'flex',gap:8, alignItems:'center',marginBottom:10}}>
                <h3 style={{marginBottom:1}}>Pro Version Improvements 08/21</h3>
                <span><Status text="Pro"  /> </span></div>
            <p>
                <ul>
                    <li>You can now lock the header to make it scroll with the story map, this way you will always see the epic that is
                        assigned to each column (Cloud only)</li>
                    <li>The backlog will now also show available epics in your board so you can simply drag and drop them to story map</li>
                </ul>
            </p>
            <small>August 2021</small>
            <div style={{display:'flex',gap:8, alignItems:'center',marginBottom:10}}>
                <h3 style={{marginBottom:1}}>Free Version Improvements 08/21</h3>
                <span><Status text="Free" isFree /> </span></div>
            <p>
                <ul>
                    <li>You can now lock the header to make it scroll with the story map, this way you will always see the epic that is
                    assigned to each column</li>
                </ul>
                If you like Story Mapping App,<br /> please rate us on the <a href="https://marketplace.atlassian.com/1224357" target="_blank">Atlassian Marketplace!</a>
            </p>
            <small>July 2021</small>
            <div style={{display:'flex',gap:8, alignItems:'center',marginBottom:10}}>
                <h3 style={{marginBottom:1}}>Pro Version improvements 07/21 (DC / Server V1.6)</h3>
                <span><Status text="Pro" /> </span></div>
            <p>
                Even more changes are coming to Story Mapping app this month!
                <ul>
                    <li>We overhauled the story map settings to make them easier to use</li>
                    <li>You can now view closed sprints and released versions on the story map</li>
                    <li>Select any agile board for your story map's backlog</li>
                    <li>Custom fields on cards can now be sorted</li>
                    <li>The filter manager now displays the underlying JQL query</li>
                    <li>Fixed various bugs</li>
                </ul>
            </p>
            <small>July 2021</small>
            <div style={{display:'flex',gap:8, alignItems:'center',marginBottom:10}}>
                <h3 style={{marginBottom:1}}>Free Version Improvements 07/21</h3>
                <span><Status text="Free" isFree /> </span></div>
            <p>
                <ul>
                    <li>Introduced the swimlane dropdown from the Pro-Version, reducing visual clutter</li>
                    <li>Closed sprints and released versions can now be displayed in the story map via the new settings page</li>
                    <li>Improved error message display for Jira errors</li>
                </ul>
                If you like Story Mapping App,<br /> please rate us on the <a href="https://marketplace.atlassian.com/1224357" target="_blank">Atlassian Marketplace!</a>
            </p>
            <small>July 2021</small>
            <div style={{display:'flex',gap:8, alignItems:'center',marginBottom:10}}>
                <h3 style={{marginBottom:1}}>Pro Version improvements 07/21</h3>
                <span><Status text="Pro" /> </span></div>
            <p>
                <ul>
                    <li>Like the free version, the Pro version now fully integrates Epic Links</li>
                    <li>Additionally, the Pro version can make use of Jira issue links, syncing existing relationships into the story map</li>
                    <li>Totals for story point estimates are displayed for each swimlane</li>
                </ul>
            </p>
            <small>June 2021</small>
            <div style={{display:'flex',gap:8, alignItems:'center',marginBottom:10}}>
                <h3 style={{marginBottom:1}}>Free Version Improvements 06/21</h3>
                <span><Status text="Free" isFree /> </span></div>
            <p>
                <ul>
                    <li>The app now takes full advantage of epics, syncing changes from the story map with Jira epics and vice versa</li>
                    <li>Fixed a bug with whitespaces in search terms</li>
                    <li>Small visual improvements</li>
                </ul>
            </p>
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
            </p>



        </div>
    )
}