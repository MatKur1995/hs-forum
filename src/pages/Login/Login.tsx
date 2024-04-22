import "./Login.css";
import {LoginProps} from "../../types/login/login.types";

export const Login: React.FC<LoginProps> = ({isLogin, toggleLogin}) => {

    return (
        <div className={`${isLogin ? 'activeLogin' : ''} modal`}>
            <div className="modal-content">
                <span onClick={toggleLogin} className="close">&times;</span>
                <h2>Logowanie</h2>
                <form className="login-form">
                    <label htmlFor="username">Login</label>
                    <input type="text" id="username" name="username" placeholder="Login" />

                    <label htmlFor="password">Hasło</label>
                    <input type="password" id="password" name="password" placeholder="Hasło" />

                    <button type="submit" className="btn-sign-in">Zaloguj</button>
                    <a href="#" className="forgot-password">Zapomniałeś hasła?</a>
                </form>
            </div>
        </div>
    )
}