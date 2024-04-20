import "./Nav.css";
import {NavProps} from "../../../types/nav/Nav.types";


export const Nav: React.FC<NavProps> = ({isActive, toggleClass}) => {

    return (
        <nav className={`nav ${isActive ? 'active' : ''}`}>
            <div onClick={toggleClass} className='close-icon'>
                <span></span>
                <span></span>
            </div>
            <div className="header-icon-container">
                <img src="../../../assets/img/head-icon.png" alt=""/>
            </div>
            <ul>
                <li><a href="/">STRONA GŁÓWNA</a></li>
                <li><a href="/">BANY</a></li>
                <li><a href="/">SKLEP SMS</a></li>
                <li><a href="/">VIP</a></li>
                <li><a href="/">ADMINI</a></li>
            </ul>
        </nav>
    )
};