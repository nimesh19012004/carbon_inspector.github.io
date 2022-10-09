import React from "react";
import Detailedreport from "../../Components/Detailedreport";
import Productfeatures from "../../Components/Productfeatures";
import Header from "../../Components/Header";
import "./tata.css";
import Commentsection from "../../Components/Commentsection";

function Tata() {
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

              <h1>TATA</h1>
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
                  <th>Operation</th>
                  <th>Transport</th>
                  <th>EOL</th>
                  <th>C Footprint</th>



                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hot rolled steel</td>
                  <td>70.60%</td>
                  <td>4.05%</td>
                  <td>4.05%</td>
                  <td>2425</td>
                </tr>
                <tr>
                  <td>Cold rolled steel</td>
                  <td>70.60%</td>
                  <td>4.05%</td>
                  <td>4.05%</td>
                  <td>2549</td>
                </tr>
                <tr>
                <td>Galvanized steel</td>
                  <td>70.59%</td>
                  <td>4.06%</td>
                  <td>4.06%</td>
                  <td>2611</td>
                </tr>
                <tr>
                <td>Soda ash</td>
                  <td>71.02%</td>
                  <td>3.96%</td>
                  <td>4.01%</td>
                  <td>2100</td>
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

export default Tata;

