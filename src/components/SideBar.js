import React from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack, faChartBar, faMailBulk, faShapes, faFileAlt} from '@fortawesome/free-solid-svg-icons';

export const SideBar = () => {
    return (
        <div className ="sidebar">
            <ul className ="lNavList">
                <li><a href="#thumbtack"><FontAwesomeIcon icon={faThumbtack} /></a></li>
                <li><a href="#chartBar"><FontAwesomeIcon icon={faChartBar} /></a></li>
                <li><a href="#mailBulk"><FontAwesomeIcon icon={faMailBulk} /></a></li>
                <li><a href="#shapes" id="active"><FontAwesomeIcon icon={faShapes} /></a></li>
                <li><a href="#fileAlt"><FontAwesomeIcon icon={faFileAlt} /></a></li>
            </ul>
        </div>
    )
}

