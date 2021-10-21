import React, { Component } from 'react';
import "../Component/Bvaccine.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Bvaccine extends Component {
    
    render() {

        const showvaccineTable = () => {
            document.getElementById('vaccineTable').classList.remove('hide');
        }
        return (
            <div className="body">
                <div className="header">
                    <div className="container ">

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
                                <input onClick={showvaccineTable} id="submit" className='btyi' type='button' value='submit'></input>
                            </form>
                         </div>
                    </div>

                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                    <div id='vaccineTable' className="container p-3 hide">
                    <h3 className="lasttitle" style={{color:'black'}}> Vaccines your child will get </h3>
                         <table class="table table-bordered">
                            <thead>
                                <tr className='table-danger'>
                                <th scope="col">#</th>
                                <th scope="col">Vaccine Name</th>
                                <th scope="col">1st Dose</th>
                                <th scope="col">2st Dose</th>
                                <th scope="col">3st Dose</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='table-light'>
                                <th scope="row">1</th>
                                <td>Pneumococcal conjugate Vaccine</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </tr>
                                <tr className='table-secondary'>
                                <th scope="row">2</th>
                                <td>Meningococcal B Vaccine</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </tr>
                                <tr className='table-light'>
                                <th scope="row">3</th>
                                <td >Rotavirus oral Vaccine</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </tr>
                                <tr className='table-secondary'>
                                <th scope="row">4</th>
                                <td>Tetanus Vaccine</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </tr>
                                <tr className='table-light'>
                                <th scope="row">5</th>
                                <td >Rotavirus oral Vaccine</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </tr>
                                <tr className='table-secondary'>
                                <th scope="row">6</th>
                                <td>Whooping cough Vaccine</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </tr>
                                <tr className='table-light'>
                                <th scope="row">7</th>
                                <td >Hepatitis B Vaccine</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </tr>
                            </tbody>
                            </table>
                    </div>

            </div>
        );
    }
}

export default Bvaccine;