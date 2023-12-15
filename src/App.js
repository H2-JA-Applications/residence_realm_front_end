import logo from './logo.svg';
import './App.css';
import './script.js'

function App() {
  return(
    <body>
        <section class = "forms-section">
            <div class="forms" id="forms">
                <div class="form-wrapper is-active">
                    <button type="button" class="switcher switcher-login">
                        LOGIN
                        <span class="underline"></span>
                    </button>
                    <span class = "space"></span>
                    <form action="/login" method="post" class="form form-login">
                        <img src ='/notepad-background.png' alt = ""/>    
                            <div class="input-form">
                                <input class="input" id="username" type="text" required name="username"/>
                                <label class="label" for="username">Username</label>
                            </div>
                            <div class="input-form">
                                <input class="input" id="password" type="password" required name="password"/>
                                <label class="label" for="password">Password</label>
                            </div>
                        <button type="submit" class="btn-login">Login</button>
                    </form>
                </div>
                <div class="form-wrapper">
                  <button type="button" class="switcher switcher-signup">
                      SignUp
                      <span class="underline"></span>
                  </button>
                  <span class = "space"></span>
                  <form  action="/signup" method="post" class="form form-signup">
                    <br/>
                    <div class="input-form">
                        <input class="input" id="signup-user" type="text" required pattern=".{4,16}" title="Username must be between 4 and 16 characters"/>
                        <label class="label" for="signup-user">First Name:</label>
                    </div>
                    <div class="input-form">
                        <input class="input" id="signup-user" type="text" required pattern=".{4,16}" title="Username must be between 4 and 16 characters"/>
                        <label class="label" for="signup-user">Last Name:</label>
                    </div>
                    <div class="input-form">
                        <input class="input" id="signup-phone" type="text" required pattern=".{10}" title="phone number must have 10 number"/>
                        <label class="label" for="signup-phone">Phone Number:</label>
                    </div>
                    <div class="input-form">
                        <input class="input" id="signup-dob" type="text" required pattern=".{8}" title="Dob"/>
                        <label class="label" for="signup-dob">Date of Birth:</label>
                    </div>
                    <div class="input-form">
                        <input class="input" id="signup-usertype" type="text" required pattern=".{8}" title="userType"/>
                        <label class="label" for="signup-usertype">User Role:</label>
                    </div>
                    <div class="input-form">
                        <input class="input" id="signup-email" type="text" required pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i" title="not a valid email"/>
                        <label class="label" for="signup-email">Email:</label>
                    </div>
                    <div class="input-form">
                        <input class="input" id="signup-pass" type="password" required pattern=".{6,}" title="Password must be at least 6 characters"/>
                        <label class="label" for="signup-pass">Enter Password:</label>
                    </div>
                    <div class="input-form">
                        <input class="input" id="signup-pass-confirm" type="password" required pattern=".{6,}" title="Password must be at least 6 characters"/>
                        <label class="label" for="signup-pass-confirm">Confirm Password:</label>
                    </div>
                      <button type="submit" class="btn-signup">Enter</button>
                  </form>
                </div>
            </div>
        </section> 
        <script src="./script.js"></script>
    </body>
  );
}


export default App;
