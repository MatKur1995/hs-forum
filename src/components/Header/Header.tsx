import "./Header.css";
import {GameServerList} from "./GameServerList/GameServerList";
import {Nav} from "./Nav/Nav";
import {useState} from "react";
import {Login} from "../../pages/Login/Login";
import {Register} from "../../pages/Register/Register";


export const Header = () => {

    const [isActive, setIsActive] = useState(false);
    const [isLogin, setIsLoginActive] = useState(false);
    const [isRegister, setIsRegisterActive] = useState(false);

    const toggleClass = ():void => {
        setIsActive(!isActive);
    };

    const toggleLogin = ():void => {
        setIsLoginActive(!isLogin);
    };

    const toggleRegister = ():void => {
        setIsRegisterActive(!isRegister);
    };

    return (<header>
        <div onClick={toggleClass} className="hamburger-menu">
        <span></span>
        <span></span>
        <span></span>
    </div>
            <Login isLogin={isLogin} toggleLogin={toggleLogin}/>
            <Register isRegister={isRegister} toggleRegister={toggleRegister}/>
    <div className="header-container">
        <img src="../../assets/img/logo3.png" alt="test" className="header-logo"/>
            <div className="nav-desktop">
                <img className="bullets" src="../../assets/img/bullets.png" alt=""/>
                    {/*<app-nav [isActive]="isActive" (toggleActive)="handleToggleFromNav($event)"></app-nav>*/}
                <Nav isActive={isActive}  toggleClass={toggleClass}/>
            </div>
            <div className="header-panel-wrapper">
                <div className="header-bg">
                    <p className="header-paragraph"><a href="/">Zaloguj</a> się bądź <a href="/">zarejestruj</a> by uzyskać dostęp do panelu użytkownika na head-shot.pl</p>
                </div>
                <div className="header-panel">
                    <div onClick={toggleLogin} className="header-panel-login">
                        <img src="../../assets/img/log-icon.png" alt=""/>
                            <p>logowanie</p>
                    </div>
                    <div onClick={toggleRegister} className="header-panel-register">
                        <img src="../../assets/img/reg-icon.png" alt=""/>
                            <p>rejestracja</p>
                    </div>
                </div>
            </div>
    </div>
    <GameServerList/>
</header>

)
};