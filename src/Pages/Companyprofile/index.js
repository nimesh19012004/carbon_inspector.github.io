import React from "react";
import Detailedreport from "../../Components/Detailedreport";
import Productfeatures from "../../Components/Productfeatures";
import Header from "../../Components/Header";
import "./styles.css";
import Commentsection from "../../Components/Commentsection";

function Companyprofile() {
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

              <h1>Kallogs</h1>
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
              <h1>2.1 T</h1>
            </div>
          </div>







          <div className="compare-table">
            <br></br>
            <br></br>
            <br></br>

            <table>
              <thead>
                <tr>
                  <th>Products</th>
                  <th>Avg. slaes</th>
                  <th>MRP</th>
                  <th>Operation</th>
                  <th>Transport</th>
                  <th>EOL</th>
                  <th>C Footprint</th>



                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MRP</td>
                  <td>Average</td>
                  <td>MRP</td>
                </tr>
                <tr>
                  <td>Avg. Monthly Sales</td>
                  <td>50mt</td>
                  <td>9mm</td>
                </tr>
                <tr>
                  <td>CES-9000</td>
                  <td>50mt</td>
                  <td>9mm</td>
                </tr>
                <tr>
                  <td>Operation</td>
                  <td>50mt</td>
                  <td>9mm</td>
                </tr>
                <tr>
                  <td>Transport</td>
                  <td>50mt</td>
                  <td>9mm</td>
                </tr>
                <tr>
                  <td>End of Life</td>
                  <td>50mt</td>
                  <td>9mm</td>
                </tr>
              </tbody>
            </table>
          </div>


        </div>



        <br></br>
        <br></br>
        <br></br>
        <br></br>
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

export default Companyprofile;

