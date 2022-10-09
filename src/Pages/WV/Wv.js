import React from "react";
import Detailedreport from "../../Components/Detailedreport";
import Productfeatures from "../../Components/Productfeatures";
import Header from "../../Components/Header";
import "./Wv.css";
import Commentsection from "../../Components/Commentsection";

function Walkas() {
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

              <h1>WALKAS WAGEN</h1>
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
              <h1>2.3 T</h1>
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
                  <td>Bluemotion Tech</td>
                  <td>5.75%</td>
                  <td>94.02%</td>
                  <td>0.53%</td>
                  <td>21725</td>
                </tr>
                <tr>
                  <td>VW Gulf</td>
                  <td>6.02%</td>
                  <td>94.46%</td>
                  <td>0.52%</td>
                  <td>22218</td>
                </tr>
                <tr>
                <td>Passat</td>
                  <td>6.33%</td>
                  <td>93.12%</td>
                  <td>0.37%</td>
                  <td>28011</td>
                </tr>
                <tr>
                <td>Audi A3</td>
                  <td>4.84%</td>
                  <td>94.2%</td>
                  <td>0.43%</td>
                  <td>30647</td>
                </tr>
                <tr>
                <td>VolkasWagen Polo</td>
                  <td>N/a</td>
                  <td>N/a</td>
                  <td>N/a</td>
                  <td>21725</td>
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

export default Walkas;

