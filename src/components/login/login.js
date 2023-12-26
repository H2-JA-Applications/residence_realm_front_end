import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { loginElements } from '../../utils/login_script';
import rrlogo from "../../images/rrlogo.png"
import AuthService from '../../services/AuthService';
import PropTypes from 'prop-types'


const Login = ({setToken}) => {
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [phoneNumber, setPhone_Number] = useState('');
    let [dob, setDOB] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [con_password, setConfirmPassword] = useState('');
    let [role, setRole] = useState('');

    let [log_email, setLogEmail] = useState('');
    let [log_password, setLogPassword] = useState('');

    let handleFirstName = (e) => { setFirstName(e.target.value) }
    let handleLasttName = (e) => { setLastName(e.target.value) }
    let handleNumber = (e) => { setPhone_Number(e.target.value) }
    let handleDOB = (e) => { setDOB(e.target.value) }
    let handleEmail = (e) => { setEmail(e.target.value) }
    let handlePassword = (e) => { setPassword(e.target.value) }
    let handleConPassword = (e) => { setConfirmPassword(e.target.value) }
    let handleRole =  (e) => { setRole(e.target.value) }

    let handleLogEmail = (e) => { setLogEmail(e.target.value) }
    let handleLogPassword = (e) => { setLogPassword(e.target.value) }

    const authService = new AuthService();
    let navigate = useNavigate();
    let handleSubmit = (e) => {
        e.preventDefault();
        if (password !== con_password) {
            alert("Passwords don't match");
        } 
        else {
            let user = {firstName:firstName, lastName: lastName, email: email, password: password, dob: dob, phoneNumber: phoneNumber, role: role}
            if (role === "landlord"){
                authService.addLandlord(user).then(()=>{
                    alert("Signed up as new landlord!");
                    window.location.reload(false);
                }, ()=>{
                    alert("Landlord creation failed!");
                });    
            }
            else if (role === "tenant"){
                authService.addTenant(user).then(()=>{
                    alert("Signed up as new tenant!");
                    window.location.reload(false);
                }, ()=>{
                    alert("Tenant creation failed!");
                });  
            }
        }
    }
    let handleSubmit2 = (e) => {
        e.preventDefault();
        let user = {email:log_email, password:log_password}
        authService.loginUser(user).then(()=>{
            alert("login");
            navigate("/tenant_dashboard")
        }, ()=>{
            alert("failed!");
        });

    }

        // let userlogin = { email: email, password: password}
        // const token = await AuthService.loginUser(userlogin)
        // setToken(token);
        // navigate("/tenant_dashboard"); 
    
    useEffect(() => {
        loginElements();
    }, []);

    return(
        <div class="forms">
            <div class="form-wrapper is-active">
                <button type="button" class="switcher switcher-login">
                    LOGIN
                    <span class="underline"></span>
                </button>

                <form onSubmit={handleSubmit2} class="form form-login">
                    <section class="single-column">
                        <img class="med-logo" src={rrlogo} alt = ""/>
                        <label>Log-in Information:</label>
                        <div class="input-form"> {/* Email */}
                            <input class="input" onChange = {handleLogEmail} value = {log_email} id="login-email" type="text" required name="login-email"/>
                            <label class="label" for="login-email">Email</label>
                        </div>
                        <div class="input-form"> {/* Password */}
                            <input class="input" onChange = {handleLogPassword}  value = {log_password} id="login-pass" type="password" required name="login-pass"/>
                            <label class="label" for="login-pass">Password</label>
                        </div>
                        <input type="submit" value="Submit" class="btn-signup"/>
                    </section>
                </form>
            </div>

            <div class="form-wrapper">
                <button type="button" class="switcher switcher-signup">
                    SignUp
                    <span class="underline"></span>
                </button>

                <form onSubmit={handleSubmit}  class="form form-signup">
                    <section class="single-column">
                        <img class="med-logo" src={rrlogo} alt = ""/>
                        <label>Sign-up Information:</label>
                        <select onChange = {handleRole} value={role} name="role" id="role" selectedIndex="-1" required>
                            <option value="">Select a Role</option>
                            <option value="ROLE_TENANT">Tenant</option>
                            <option value="ROLE_LANDLORD">Landlord</option>
                        </select>
                    <section class="double-column">
                    <div class="input-form"> {/* First Name */}
                        <input onChange = {handleFirstName}class="input" value={firstName} id="signup-user" type="text" required pattern="[A-Za-z]+"/>
                        <label class="label" for="signup-user">First Name:</label>
                    </div>
                    <div class="input-form"> {/* Last Name */}
                        <input onChange = {handleLasttName}class="input" value={lastName} id="signup-user" type="text" required pattern="[A-Za-z]+"/>
                        <label class="label" for="signup-user">Last Name:</label>
                    </div>
                    <div class="input-form"> {/* Phone Number */}
                        <input onChange = {handleNumber} class="input" value={phoneNumber} id="signup-phone" type="text" required pattern=".{10}" title="Phone Number must have 10 numbers!"/>
                        <label class="label" for="signup-phone">Phone Number:</label>
                    </div>
                    <div class="input-form"> {/* Data of Birth */}
                        <input onChange = {handleDOB} class="input" value={dob} id="signup-dob" type="text" required title="Date Format: MM/DD/YYYY"/>
                        <label class="label" for="signup-dob">Date of Birth:</label>
                    </div>
                    <div class="input-form"> {/* Email */}
                        <input onChange = {handleEmail} class="input" value={email} id="signup-email" type="text" required title="Not a valid email"/>
                        <label class="label" for="signup-email">Email:</label>
                    </div>
                    <div class="input-form"> {/* Enter Password */}
                        <input onChange = {handlePassword} class="input" value={password} id="signup-pass" type="password" required pattern=".{6,}" title="Password must be at least 6 characters"/>
                        <label class="label" for="signup-pass">Enter Password:</label>
                    </div>
                    </section>
                        <div class="input-form"> {/* Confirm Password */}
                            <input onChange = {handleConPassword} class="input" value={con_password} id="signup-pass-confirm" type="password" required pattern=".{6,}" title="Password must be at least 6 characters"/>
                            <label class="label" for="signup-pass-confirm">Confirm Password:</label>
                        </div>
                        <input type="submit" value="Submit" class="btn-signup"/>
                    </section>
                </form>
            </div>
        </div>
    );
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;