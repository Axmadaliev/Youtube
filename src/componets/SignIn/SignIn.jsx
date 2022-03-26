// import { Link } from "react-router-dom";
import twitterLogo from "../../Assert/img/twitter-logo.png"
// import "../Login/Login.scss"
import "../SignIn/SignIn.scss"

function SignIn() {
    return <div  className="SignIn">
        <form className="loginIn">
            <img className="twitterLogo" src={twitterLogo} alt="" />
            <div className="loginIn__title">Log in to Twitter</div>   
            <input  className="loginIn__input"  type="email" placeholder="Phone number, email address" />
            <input  className="loginIn__input"  type="password" placeholder="Password" />
            <a className="loginIn__next" href="https://www.amazon.com/"> Log In</a>
            <div className="links">
                <a className="loginIn__help" href="https://reqres.in/" >Forgot password?</a>
                <a className="loginIn__help" href="https://reqres.in/" >Sign up to Twitter</a>
            </div>
        </form>
    </div>;
}

export default SignIn;