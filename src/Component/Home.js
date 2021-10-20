import React, { Component } from 'react';
import '../Component/Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="content">
                        <div className="background-image">
                                <h1>
                                    VACCINATION <br /> <span>& HEALTH CARE</span>
                                </h1>
                                <p> We work for vaccination and health care for <br /> pregnent women and new born baby to ensure <br /> their Risk free future.</p>
                                <button type="button" class="btn btn-primary">Learn More</button>
                        </div>
                </div>
            </div>
        );
    }
}

export default Home;