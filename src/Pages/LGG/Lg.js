import React from "react";
import Detailedreport from "../../Components/Detailedreport";
import Productfeatures from "../../Components/Productfeatures";
import Header from "../../Components/Header";
import "./Lg.css";
import Commentsection from "../../Components/Commentsection";

function Lg() {
    return (
        <div>
            <div className="companyprofile">
                <Header />
                <div className="content">
                    <div className="basic-wrapper">
                        <div className="basic-details">
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>

                            <h1>LG-E970</h1>
                            {/* <p>kallogs.com</p>
                    <p>American multinational food manufacturing company, Michigan</p> */}
                        </div>
                        <div className="carbonfootprint">
                            {/* <p>Average</p> */}
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h1>1.9 T</h1>
                        </div>
                    </div>







                    <div className="compare-table">
                        <br></br>
                        <br></br>
                        <br></br>

                        <table>

                            <tbody>
                                <tr>
                                    <td><b>MRP</b></td>
                                    <td>12150₹ </td>
                                </tr>
                                <tr>
                                    <td><b>Avg. sales</b></td>
                                    <td>8000 / day </td>
                                </tr>
                                <tr>
                                    <td><b>Operation</b></td>
                                    <td>0.01%</td>
                                </tr>
                                <tr>
                                    <td><b>Transport</b></td>
                                    <td>35.7%</td>
                                </tr>
                                <tr>
                                    <td><b>End Of Life </b></td>
                                    <td>0.00% </td>
                                </tr>
                                <tr>
                                    <td><b>Carbon footprint </b><small>KgCO2e</small></td>
                                    <td>876 </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>


                </div>



                <br></br>
                <br></br>
                <br></br>
                <br></br>
                {/* <br></br>
        <br></br> */}

                <Productfeatures />
                <Commentsection />

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    );
}

export default Lg;

