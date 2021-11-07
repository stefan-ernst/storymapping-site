import React from 'react';
import styles from './whatsnew.module.css';
import Status from "../../docs/components/Status";
import Stats from '../../static/img/stats.png';
import Admin from '../../static/img/admin.png';


export default function WhatsNew({background='white'}) {

    return (
        <div style={{padding:10,backgroundColor:background}}>
            <small>November 2021</small>
            <div style={{display:'flex',gap:8, alignItems:'center',marginBottom:10}}>
                <h3 style={{marginBottom:1}}>Pro Version Improvements 11/21</h3>
                <span><Status text="Pro"  /> </span></div>
            <p>
                <ul>
                    <li>Our most requested feature is here: You can now manage multiple user story maps.
                        When you open the app forth the first time, you will be asked to select the map you want to work on. You can create
                        many more user story maps with different boards and settings within the same project.
                        You can also select a story map as a favorite and it will load automatically the next time you open the app.
                    </li>
                    <li>Introducing epic statistics: You can now see the progress of your issues within an epic. Toggle between
                        totals per status, percentage of issues per status completed or percentage of story points done.
                        <br />

                        <img src={Stats} style={{width: 226,marginTop:10}} />
                    </li>
                    <li>Sub-task support: You can now display the number of subtasks on the issue card, alongside a
                    link that reveals all subtasks and their status</li>
                    <li>Quick-Filters from your agile board will be available from the redesigned filter menu</li>
                    <li>Improved issue link import: Issues that are imported into the map via custom issue link will
                    now be filtered correctly.</li>
                    <li>Zoom in and out of your user story map with the new buttons in the bottom right hand corner</li>
                    <li>Import steps automatically based on issue type when creating a user story map</li>
                    <li>
                        Better export: We have adjusted the card layout to improve export image quality.
                    </li>
                </ul>



            </p>
            <small>September 2021</small>
            <div style={{display:'flex',gap:8, alignItems:'center',marginBottom:10}}>
                <h3 style={{marginBottom:1}}>Pro Version Improvements 09/21 (DC / Server V1.7)</h3>
                <span><Status text="Pro"  /> </span></div>
            <p>
                <ul>
                    <li>You can now make Story Mapping App available only in select projects. Head to the
                    new administration area to either enable the app for all projects or add only select projects
                        to the list of eligible projects.
                    </li>

                </ul>
                <img src={Admin} style={{width: 500}} />

            </p>
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




        </div>
    )
}