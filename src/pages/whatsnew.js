import React from 'react';
import styles from './whatsnew.module.css';
import Status from "../../docs/components/Status";
import Stats from '../../static/img/stats.png';
import Admin from '../../static/img/admin.png';


export default function WhatsNew({background='white'}) {

    return (
        <div style={{padding:10,backgroundColor:background}}>
            <small>May 2022</small>
            <div style={{display:'flex',gap:8, alignItems:'center',marginBottom:10}}>
                <h3 style={{marginBottom:1}}>Major updates and a new name</h3>
                <span><Status text="Pro"  /> </span></div>
            <p>
                Story Mapping for Jira - Pro is now <b>Advanced Story Maps for Jira</b>!
                <br /><br />
                We have added a significant new feature to this release: Dynamic maps.
                You can now load any agile board and manage epics, stories, tasks, and their issue links on the fly, and all changes will now reflect 100% into the agile board.
                Additionally, managing the app configuration has gotten much easier - use the new hierarchy button in the top right-hand corner to modify the map's issue hierarchy and link types.
                The changes will appear instantly in the map view.
                <br /><br />
                <ul>
                    <li>Link types can now be configured in both directions, so you do not only have to work with the "outward" link
                    </li>
                    <li>Use custom field values as swim lanes, for example for cross-project release planning
                    </li>
                    <li>Ordering top-level elements and epics will not reflect back on their board rank
                    </li>

                </ul>

            </p>
            <small>March 2022</small>
            <div style={{display:'flex',gap:8, alignItems:'center',marginBottom:10}}>
                <h3 style={{marginBottom:1}}>Pro Version Improvements 01/22</h3>
                <span><Status text="Pro"  /> </span></div>
            <p>
                <ul>
                    <li>Story Mapping App now supports top-level elements above the backbone row.
                        You can use any issue type to group columns, as well as select a color to style the columns for
                        more clarity on large story maps. Read more <a href="https://www.storymapping.app/docs/top-level-elements">here</a>.
                    </li>
                    <li>Create Sprint & Release buttons have been unified into the new Create dropdown at the top of the story map
                    </li>
                    <li>Server & Data Center now support the scrolling header that was already available in the Cloud version
                    </li>

                </ul>

            </p>
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
        </div>
    )
}