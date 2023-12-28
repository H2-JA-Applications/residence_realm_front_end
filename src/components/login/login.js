    import React, { useState, useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';
    import PropTypes from 'prop-types';
    import { jwtDecode } from 'jwt-decode';
    import { loginElements } from '../../utils/LoginScript';
    import rrlogo from "../../images/rrlogo.png";
    import AuthService from '../../services/AuthService';
    import UserInfo from '../../utils/userInfo';

    
    const Login = () => {
        // State Declarations
        let [firstName, setFirstName] = useState('');
        let [lastName, setLastName] = useState('');
        let [phoneNumber, setPhone_Number] = useState('');
        let [dob, setDOB] = useState('');
        let [email, setEmail] = useState('');
        let [password, setPassword] = useState('');
        let [con_password, setConfirmPassword] = useState('');
        let [role, setRole] = useState('');
        let [roles, setRoles]  = useState([]);
        let [token, setToken]  = useState([]);
    
        let [log_email, setLogEmail] = useState('');
        let [log_password, setLogPassword] = useState('');

        let [passwordMismatchOpen, setPasswordMismatchOpen] = useState(false);
    
        // Event Handler Functions
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

        // Service initialization and navigate hook
        const authService = new AuthService();
        const userService = new UserInfo();
        const navigate = useNavigate();

        // Sign-up form submission
        let submitSignup = (event) => {
            event.preventDefault();
            if (password !== con_password) {
                alert("Password mismatched!");
            }
            else {
                let user = {firstName:firstName, lastName: lastName, email: email,
                            password: password, dob: dob, phoneNumber: phoneNumber,
                            role: role}
                if (role === "ROLE_LANDLORD"){
                    authService.addLandlord(user).then(()=>{
                        alert("Signed up as new landlord!");
                        window.location.reload(false);
                    }, ()=>{
                        alert("Landlord creation failed!");
                    });    
                }
                else if (role === "ROLE_TENANT"){
                    authService.addTenant(user).then(()=>{
                        alert("Signed up as new tenant!");
                        window.location.reload(false);
                    }, ()=>{
                        alert("Tenant creation failed!");
                    });  
                }
            }
        }
        let submitLogin = async (event) => {    
            event.preventDefault();
            let user = {email:log_email, password:log_password};

            try {
                await authService.loginUser(user);
                setRoles(localStorage.getItem("role"));
                
            } catch (error) {
                alert("Login failed!");
            }
        };
    
        useEffect(() => {
            userService.viewInfo().then(data => {
                if (data) {
                    if (localStorage.getItem('role') === 'ROLE_TENANT') {
                        navigate('/tenant_dashboard');  
                    } else if (localStorage.getItem('role') === 'ROLE_LANDLORD') {
                        navigate('/landlord_dashboard');
                    }
                }
            }).catch(error => {
                console.error('Error fetching information:', error);
            });
            
            loginElements();
        }, [token,roles]);
    
        return(
            <section class="loginbody">
            <div class="forms">
                <div class="form-wrapper is-active">
                    <button type="button" class="switcher switcher-login">
                        LOGIN
                        <span class="underline"></span>
                    </button>
    
                    <form onSubmit={submitLogin} class="form form-login">
                            <img class="med-logo" src={rrlogo} alt = ""/>
                        <section class="single-column">
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
    
                    <form onSubmit={submitSignup}  class="form form-signup">
                            <img class="med-logo" src={rrlogo} alt = ""/>
                        <section class="single-column">
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
                            <input onChange = {handleDOB} class="input" value={dob} id="signup-dob" type="text" required title="Date Format: YYYY-MM-DD"/>
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
            </section> 
        );
    }
    Login.propTypes = {
        setToken: PropTypes.func.isRequired
    }
    export default Login;