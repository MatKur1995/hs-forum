import "./Register.css";
import {RegisterProps} from "../../types/register/register.types";

export const Register: React.FC<RegisterProps> = ({isRegister, toggleRegister}) => {


    return (
        <div className={`${isRegister ? 'activeLogin' : ''} modal`}>
            <div className="modal-content">
                <span onClick={toggleRegister} className="close">&times;</span>
                <h2>Rejestracja konta</h2>
                <form className="login-form">
                    <label htmlFor="username">Login</label>
                    <input type="text" id="username" name="username" placeholder="Login"/>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="username" name="email" placeholder="Email"/>

                    <label htmlFor="password">Hasło</label>
                    <input type="password" id="password" name="password" placeholder="Hasło"/>

                    <button type="submit" className="btn-sign-in">Wyślij</button>
                    <a href="#" className="forgot-password">Masz już konto? Zaloguj się!</a>
                </form>
            </div>
        </div>
    )
}