import "./Login.scss"
import twitterLogo from "../../Assert/img/twitter-logo.png"
import { createContext, useEffect, useRef, useState } from "react"
import { useAuth } from "../../Providers/AuthPpovider"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
// import { Link } from "react-router-dom"
// import SignIn from "../SignIn/SignIn"
const Context = createContext()
function Login() {
    const {state} = useLocation()
    const returnUrl=state?.returnUrl
    const[error, setError] = useState('')
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    const navigate = useNavigate()
    const formOnSubmit=(event) => {
        console.log(returnUrl);
        event.preventDefault()
        fetch('https://reqres.in/api/login', {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-type" : "application/json"
            }
        })
        .then(res=> res.ok ? res.json() : Promise.reject(res))
        .then(res => {
            localStorage.setItem('token', res.token)
            console.log(res);
            if(returnUrl){
                console.log('navigate');
                console.log(returnUrl);
                navigate(`${returnUrl.pathname}${returnUrl.search}`, {
                    state: {
                        message: 'Successfully logged in'
                    }
                })
            }else {
                navigate("/", {
                    state:{
                        message: 'Successfully logged in'
                    }
                })
            }
        })
        .catch(err => {
            setError('Login yoki parol hato')
        })
        // if login successfully set token and redirect home page
        const userInfo = {
            name: `${userNameRef.current.value}`,
            phone: `${phoneRef.current.value}`,
            email: `${userNameRef.current.value}`,
            password: `${passwordRef.current.value}`,
            date: `${dayRef.current.value} day ${monthRef.current.value} month ${yearRef.current.value} year`
        }
        localStorage.setItem('userInfo', JSON.stringify(userInfo) )

    }
    const handleChange = (event)=> {
        setForm( (state) => {
            return {...state, [event.target.name] :event.target.value}
        })
    }
    useEffect(()=>{
        console.log(form);
    }, [form])
    const userEmail = useRef()
    const passwordRef = useRef()
    const userNameRef = useRef()
    const loginRef = useRef()
    const phoneRef = useRef()
    const dayRef = useRef()
    const monthRef = useRef()
    const yearRef = useRef()
    // const [isValid, setIsValid] = useState(false);
    // const [user, setUser]= useAuth()
    // console.log(loginRef.current);
    // const signRef = useRef()
    return <div>
         <div ref={loginRef} className="register">
        <div>
        <img src={twitterLogo} className="twitterLogo" alt="img" />
        </div>
        <div className="register__title">Create an account</div>
        <form onSubmit={formOnSubmit} className="login">
        {/* 'eve.holt@reqres.in' */}
            <input onChange={handleChange} name="email" defaultValue={'eve.holt@reqres.i'} className="login__input"  type="email" placeholder="Email" />
            <input onChange={handleChange} name="name" className="login__input" ref={userNameRef} type="text" placeholder="Name" />
            <input onChange={handleChange} name="phone" ref={phoneRef} className="login__input"  type="number" placeholder="Phone number" />
            <input onChange={handleChange} name="password" ref={passwordRef} className="login__input"  type="password" placeholder="Password" />
            <a className="login__help" href="https://reqres.in/" target="blank">Use email</a>
            <div className="date-title">Date of birth</div>
            <div className="date-desc">Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</div>
            <div className="date-details">
            <select ref={dayRef}  onChange={handleChange} name="Month" className="date-select date-select-month" defaultValue='Month' >
                <option >Month</option>
                <option  value='1'>Janaury</option>
                <option value='2'>February</option>
                <option value='3'>March</option>
                <option value='4'>April</option>
                <option value='5'>May</option>
                <option value='6'>June</option>
                <option value='7'>July</option>
                <option value='8'>August</option>
                <option value='9'>September</option>
                <option value='10'>October</option>
                <option value='11'>November</option>
                <option value='12'>December</option>
            </select> 
            <select  ref={monthRef} onChange={handleChange} name='Day' className="date-select" id="day"  defaultValue='Day'>
                <option >Day</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
            </select>
            <select ref={yearRef}  onChange={handleChange} name='Year' className="date-select" id="year"  defaultValue='Year'>
                <option >Year</option>
                <option value="1940">1940</option>
                <option value="1941">1941</option>
                <option value="1942">1942</option>
                <option value="1943">1943</option>
                <option value="1944">1944</option>
                <option value="1945">1945</option>
                <option value="1946">1946</option>
                <option value="1947">1947</option>
                <option value="1948">1948</option>
                <option value="1949">1949</option>
                <option value="1950">1950</option>
                <option value="1951">1951</option>
                <option value="1952">1952</option>
                <option value="1953">1953</option>
                <option value="1954">1954</option>
                <option value="1955">1955</option>
                <option value="1956">1956</option>
                <option value="1957">1957</option>
                <option value="1958">1958</option>
                <option value="1959">1959</option>
                <option value="1960">1960</option>
                <option value="1961">1961</option>
                <option value="1962">1962</option>
                <option value="1963">1963</option>
                <option value="1964">1964</option>
                <option value="1965">1965</option>
                <option value="1966">1966</option>
                <option value="1967">1967</option>
                <option value="1968">1968</option>
                <option value="1969">1969</option>
                <option value="1970">1970</option>
                <option value="1971">1971</option>
                <option value="1972">1972</option>
                <option value="1973">1973</option>
                <option value="1974">1974</option>
                <option value="1975">1975</option>
                <option value="1976">1976</option>
                <option value="1977">1977</option>
                <option value="1978">1978</option>
                <option value="1979">1979</option>
                <option value="1980">1980</option>
                <option value="1981">1981</option>
                <option value="1982">1982</option>
                <option value="1983">1983</option>
                <option value="1984">1984</option>
                <option value="1985">1985</option>
                <option value="1986">1986</option>
                <option value="1987">1987</option>
                <option value="1988">1988</option>
                <option value="1989">1989</option>
                <option value="1990">1990</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
            </div>
            <button className="login__next"> Next</button>
        </form>
        
        </div>
    </div>
}

export default Login;