import React from 'react'; 
import LogInImg from './Photos/clogin.svg';
import Creg from './Photos/creg.svg';
import './login.css'

const Login = () => {

        //reg
        const reg = (e) => {
            e.preventDefault();
            document.getElementById('login').style.left = '50%'
            document.getElementById('reg').style.left = '-50%'
        }
        const login = (e) => {
            e.preventDefault();
            document.getElementById('login').style.left = '-50%'
            document.getElementById('reg').style.left = '50%'
        }
    return (
        <div className='wrapper'>
                <div className='loginWrapper' id='login'>
                    <div style={{textAlign: 'center', padding: '20px'}}>
                        <img src={LogInImg} alt='login' height='170px' />
                    </div>
                    <div>
                        <h4 style={{textAlign: 'center', padding: '20px'}}>Login - chat Application</h4>
                        <form method='POST' autoComplete="off">
                            <div className="form-group">
                                <label htmlFor="usernameLogin">Email Phone/username</label>
                                <input type="text" className="form-control" name='usernameL' id="usernameLogin" placeholder="Enter Phone/username" />
                                <small className="form-text text-muted">We'll never share your info with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="passwordLogin">Password</label>
                                <input type="password" className="form-control" name='passwordL' id="passwordLogin" placeholder="Password" />
                                <p className='pError' id='login-error'></p>
                            </div>
                            <div className="form-check">
                                <p style={{textAlign: 'right'}}>Need an <span onClick={login}  style={{color: 'blue', cursor: 'pointer'}} >Account?</span></p>
                            </div>
                            <div className="form-check">
                                <a href='/home' type="submit" className='btnn' >Log In</a>
                            </div>
                            <br/>
                            </form>
                    </div>
                </div>

                <div className='regWrapper py-2' id='reg'>
                <div style={{textAlign: 'center', padding: '20px'}}>
                    <img src={Creg} alt='login' height='170px' />
                </div>
                <div>
                    <h4 style={{textAlign: 'center', padding: '20px'}}>Reg - chat Application</h4>
                    <form encType='multipart/form-data' method='POST'>
                    <>
                        <div className="row">
                            <div className="col-sm">
                                <div className="form-group">
                                    <label htmlFor="username">UserName</label>
                                    <input type="text" className="form-control i-error" name='username' id="username" placeholder="Enter username" />
                                    <p id='error-username' className='pError'></p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" className="form-control i-error" name='phone' id="phone" placeholder="Enter phone" />
                                    <p id='error-phone' className='pError'></p>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-group">
                                    <label htmlFor="email">Email Enter</label>
                                    <input type="email" className="form-control i-error" name ='email' id="email" placeholder="Enter email" />
                                    <p id='error-email' className='pError'></p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control i-error" name='password' id="password" placeholder="Password" />
                                    <p id='error-password' className='pError'></p>
                                </div>
                            </div>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="avater">Set avater</label>
                                    <input type="file" name='avater' className="form-control" id="avater" accept="image/*" />
                                    <p id='error-avater' className='pError'></p>
                                </div>
                            </div>
                        </div>
                        </>
                        
                        <div className="form-check">
                            <p style={{textAlign: 'right'}}>Already Have <span onClick={reg} style={{color: 'blue', cursor: 'pointer'}} >Account?</span></p>
                        </div>
                        <div className="form-check">
                                <input type="submit" className='btnn' value='Singup'/>
                            </div>
                        </form>
                </div>
             </div>
            </div>
    );
};

export default Login;