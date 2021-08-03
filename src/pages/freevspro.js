import React from 'react';
import styles from './whatsnew.module.css';
import Status from "../../docs/components/Status";
import CustomCard from '../../static/img/CustomFields.png';
import CheckItem from '../../docs/components/CheckItem';

const flexStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 5
}

export default function Freevspro({background='white'}) {

    return (
        <div style={{padding:10,backgroundColor:background}}>

            <h3>Pro Features</h3>

            <h4>Features</h4>

            <div style={flexStyle}>

                <CheckItem />

                <div>Use any issue type to represent user activities</div>

            </div>

            <div style={flexStyle}>

                <CheckItem />

                <div>Define goals above the activity row</div>

            </div>

            <div style={flexStyle}>

                <CheckItem />

                <div>Display custom fields on cards</div>

            </div>

            <div style={flexStyle}>

                <CheckItem />

                <div>Story point estimation and story point totals for swimlanes</div>

            </div>

            <div style={flexStyle}>

                <CheckItem />

                <div>Custom timeframes instead of sprints & releases</div>

            </div>

            <div style={flexStyle}>

                <CheckItem />

                <div>Connect issues with Jira issue links automatically</div>

            </div>

            <div style={flexStyle}>

                <CheckItem />

                <div>Create custom filters for the story map</div>

            </div>

            <div style={flexStyle}>

                <CheckItem />

                <div>Export to PNG</div>

            </div>



            <br />

            <h4>Other benefits</h4>

            <div style={flexStyle}>

                <CheckItem />

                <div>High availability setup and no changes during business hours (Cloud)</div>

            </div>

            <div style={flexStyle}>

                <CheckItem />

                <div>Available for Jira Data Center</div>

            </div>

            <div style={flexStyle}>

                <CheckItem />

                <div>Priority Support</div>

            </div>



        </div>
    )
}