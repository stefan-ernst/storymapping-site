import React from "react";

export default function CheckItem({isX}) {
    return isX ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{color: 'red'}} viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      className="feather feather-x">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{color: 'green'}} viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className="feather feather-check">
        <polyline points="20 6 9 17 4 12"/>
    </svg>;
}