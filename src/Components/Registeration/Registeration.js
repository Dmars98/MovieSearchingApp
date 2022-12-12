import { Alert } from "bootstrap";
import React, { useState } from "react";
import Login from "../Login/Login";

import './Registeration.css';

function Registeration(){

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[flag, setFlag] = useState(false);
    const[login, setLogin] = useState(true);

function handleSubmit(e){
    e.preventDefault();

    if(!name || !email || !password){
        setFlag(true);
    }
    else{
        setFlag(false);
        localStorage.setItem("Email",JSON.stringify(email));
        localStorage.setItem("Password",JSON.stringify(password));

        console.log("save in locale storage")
        setLogin(!login);
    }
}


function handleClick(){
    setLogin(!login);
}


    return(
        <div>
            {login ? (
                <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                   <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                      <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div class="card-body p-5" >
                        <h2 class="text-uppercase text-center mb-5">Create an account</h2>
            <form onSubmit={handleSubmit}  className="login-wrapper">
                <div className="form-group" class="input">
                    <input type='text'
                    className="form-control"
                    placeholder="Enter Full Name"
                    onChange={(event)=> setName(event.target.value)}/>
                </div>
        

                <div className="form-group" class="input">
                    <input type ="email" 
                    className="form-control"
                    placeholder="Enter Your Email"
                    onChange={(event)=> setEmail(event.target.value)}/>
                </div>
    

                <div className="form-group" class="input">
                    <input type='password'
                    className="form-control"
                    id="form3Example4c"
                    placeholder="Enter Your Password"
                    onChange={(event)=> setPassword(event.target.value)}/>
                </div>

                <div class="form-check d-flex justify-content-center mb-3">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>


                <div class="d-flex justify-content-center">
                    <button type="submit" id="button" className="btn btn-success btn-block btn-lg gradient-custom-4 " >Register</button>
                </div>
                <p onClick={handleClick} className="text-center text-muted mt-3 mb-0">Have already an account {" "} login</p>


                {flag && (
                    <Alert color="primary" variant="danger">
                        Please fill every fields
                    </Alert>
                )}

            </form>
            </div>
            </div>
            </div>
            </div>
            </div>
        
            ):(<Login />)}
                    
        </div>
    )
}

export default Registeration