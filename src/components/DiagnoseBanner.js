import React from 'react';
import './DiagnoseBanner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faThumbtack } from '@fortawesome/free-solid-svg-icons';

export function DiagnoseBanner() {
    return (
        <>
        <div className="performance">
            <div className="bannerPadding">PERFORMANCE MANAGEMENT</div>
        </div>
        <div className="diagnostic">
            <div className="bannerPadding"><FontAwesomeIcon icon={faGlobe} style={{marginRight:"0.5rem"}}/>Diagnostic Tool
            <FontAwesomeIcon icon={faThumbtack} style={{float: "right"}}/></div>
        </div>
        </>
    )
}
