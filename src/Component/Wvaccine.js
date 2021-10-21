import React, { Component } from 'react';
import "../Component/Wvaccine.css";

class Wvaccine extends Component {
    render() {

        const showvaccineTable = () => {
            document.getElementById('tablePart').classList.remove('hide');
        }
        return (
            <div >
                <div className="upside">
                    <div className="container">
                    <h1 className="title">Vaccine Suggestion For Pregnant Women</h1>
                        <p className="slogan">Certain vaccines are safe and recommended for women before, during, and after pregnancy to help keep them and their babies 
                        healthy. The antibodies mothers develop in response to these vaccines not only protect them, but also cross the placenta and help protect their babies from serious diseases early in life.
                         Vaccinating during pregnancy also helps protect a mother from getting a serious disease and then giving it to her newborn.</p>

                         <div className="takeinfo2">
                             <h2 className="title23">Please Provide the Information of Pregnant Woman.</h2>
                            <form className="form" action="">
                                <span className="hilite">Name :</span>
                                <input type="text" id="pregnantWName" class="form-control" placeholder="Enter Name Here"></input>
                                <span className="hilite">Month of Pregnancy :</span>
                                <input type="number" id="pmonth" placeholder="how month of pregnant..?" class="form-control"></input>
                                <input onClick={showvaccineTable} id="submit" className='btyi' type='button' value='submit'></input>
                            </form>
                         </div>
                         <div className="tablePart hide" id='tablePart'>
                         <h3 className="lasttitle2"> Vaccines you will get </h3>
                            <table class="table table-bordered">
                                <thead>
                                    <tr className='table-primary'>
                                    <th scope="col">#</th>
                                    <th scope="col">Vaccine Name</th>
                                    <th scope="col">date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='table-info'>
                                    <th scope="row">1</th>
                                    <td>Flu vaccine</td>
                                    <td></td>
                                    </tr>
                                    <tr className="table-success">
                                    <th scope="row">2</th>
                                    <td>Tdap vaccine</td>
                                    <td></td>
                                    </tr>
                                    <tr className="table-danger">
                                    <th scope="row">3</th>
                                    <td ></td>
                                    <td></td>
                                    </tr>
                                </tbody>
                             </table>

                         </div>
                                
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Wvaccine;