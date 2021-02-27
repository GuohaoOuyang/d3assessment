import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faSlidersH, faFileDownload, faQuestionCircle, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    return (
        <header>
            <nav className= "headerNav">
                <a href = "#home" className="title">Diagnostic Tool</a>
                <ul className ="hNavList">
                    <li><a href="#loggedIn">Logged in as General User</a></li>
                    <li><a href="#slidersH"><FontAwesomeIcon icon={faSlidersH} /></a></li>
                    <li><a href="#fileDownload"><FontAwesomeIcon icon={faFileDownload} /></a></li>
                    <li><a href="#print"><FontAwesomeIcon icon={faPrint} /></a></li>
                    <li><a href="#questionCircle"><FontAwesomeIcon icon={faQuestionCircle} /></a></li>
                    <li><a href="#signOut"><FontAwesomeIcon icon={faSignOutAlt} /></a></li>
                </ul>
            </nav>
        </header>
    )
}
