import React, { Component } from 'react';
import "../Component/Bvaccine.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Bvaccine extends Component {
    render() {
        return (
            <div className="body">
                <div className="header">
                    <div className="container">

                        <h1 className="title">Vaccine Suggestion For New Born Baby</h1>
                        <p className="slogan">I​mmunisation is an important way to protect your child from certain life-threatening diseases.
                        All the diseases that your child is protected against are serious diseases and by immunising your child, you are also
                         ensuring better protection for the population. </p>

                         <div className="takeinfo">
                             <h2 className="title2">Please Provide the Correct Information.</h2>
                            <form className="form" action="">
                                <span className="hilite">Name :</span>
                                <input type="text" id="babyName" class="form-control" placeholder="Enter Your Baby Name Here"></input>
                                <span className="hilite">Gender :</span>
                                <input type="text" id="gender" class="form-control" placeholder="Enter Your Baby Gender"></input>
                                <span className="hilite">Birth Date :</span>
                                <input type="date" id="birthDate" class="form-control"></input>
                                <button id="submit" class="btn btn-success">Submit</button>
                            </form>
                         </div>
                        
                    </div>

                </div>
            </div>
        );
    }
}

export default Bvaccine;