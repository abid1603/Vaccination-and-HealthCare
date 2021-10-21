import React from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Bvaccine from "./Component/Bvaccine";
import Home from "./Component/Home";
import Wvaccine from "./Component/Wvaccine";
import Hospital from "./Component/Hospital";
import Htips from "./Component/Htips";
import Contact from "./Component/Contact"
import Navbar from "./Component/Navbar/Navbar";


const Nav = () => {
    return (
        <div>
            <>
                <Navbar></Navbar>
                </>
        </div>
    );
};

export default Nav;