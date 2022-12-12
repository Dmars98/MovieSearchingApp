import React, { useState } from "react";
import { Alert } from "bootstrap";
import Home from "../Home.js";

import './Login.css';


function Login(){

const[emaillog, setEmaillog] = useState("");
const[passwordlog, setPasswordlog] = useState("");  
const[flag, setFlag] = useState(false);
const[home, setHome] = useState(true);


function handlelLogin(e){
    e.preventDefault();

    let mail = localStorage.getItem("Email").replace(/"/g,"");
    let pass = localStorage.getItem("Password").replace(/"/g,"");

    if(!emaillog || !passwordlog){
        setFlag(true)
        console.log("Empty");
    }
    else if(passwordlog !== pass || emaillog !== mail){
        setFlag(true);
    }
    else{
        setHome(!home);
        setFlag(false);
    }

}
        
    return(
        <div>
            {home ? (
                 <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                 <div class="container h-100">
                  <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                      <div class="card-body p-5">
                      <h2 class="text-uppercase text-center mb-5">log in</h2>

            <form onSubmit={handlelLogin} className="login-wrapper">
                <div className="form-group" class="input">
                    <input type ="email" 
                    className="form-control"
                    placeholder="Enter Your Email"
                    onChange={(event)=> setEmaillog(event.target.value)}/>
                </div>
                

                <div className="form-group" class="input">
                    <input type='password'
                    className="form-control"
                    id="form3Example4c"
                    placeholder="Enter Your Password"
                    onChange={(event)=> setPasswordlog(event.target.value)}/>
                </div>

                <div class="form-check d-flex justify-content-center mb-3">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    Remember me
                  </label>
                </div>


                <div class="d-flex justify-content-center">
                    <button type="submit" id="button" className="btn btn-success btn-block btn-lg gradient-custom-4" >Login</button>
                </div>

                    {flag &&(
                        <Alert variant="danger">
                            Please Fill the Field
                        </Alert>
                    )}

                </form>
                </div>
                </div>
                </div>
                </div>
                </div>
                ):(
                <Home />
                )}
        </div>
    )
}

export default Login;