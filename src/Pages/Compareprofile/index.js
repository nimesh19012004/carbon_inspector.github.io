import React from 'react'
import Productfeatures from "../../Components/Productfeatures";
import Header from "../../Components/Header";
import "./styles.css";

function Compareprofile() {
  return (
    <>
      <div className="compare-profile">
        <div>
          <div className="companyprofile">
            <Header />
            <div className="content">
              <div className="basic-wrapper">
                <div className="basic-details">
                  <br></br>
                  <br></br>
                  <h1>Compare</h1>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
              </div>
              <div className="compare-table">
                <table>
                  <thead>
                      <tr>
                          <th></th>
                          <th>LG-E970</th>
                          <th>LATITUDE</th>
                      </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td>MRP</td>
                      <td>12,150₹</td>
                      <td>86,971₹</td>
                  </tr>
                  <tr>
                      <td>Avg. Monthly Sales</td>
                      <td>8000/day</td>
                      <td>N/a</td>
                  </tr>
                  <tr>
                      <td>Operation</td>
                      <td>0.01%</td>
                      <td>18.64%</td>
                  </tr>
                  <tr>
                      <td>Transportation</td>
                      <td>35.7%</td>
                      <td>9.48%</td>
                  </tr>
                  <tr>
                      <td>Transport</td>
                      <td>50mt</td>
                      <td>9mm</td>
                  </tr>
                  <tr>
                      <td>End of Life</td>
                      <td>0.00%</td>
                      <td>0.29%</td>
                  </tr>
                  <tr>
                      <td>Carbon footprint <small>KgCO2e</small></td>
                      <td>876</td>
                      <td>348</td>
                  </tr>
                  </tbody>
              </table>
              <br></br>
                  <br></br>
                  <br></br>
              </div>
            </div>
            <Productfeatures />
          </div>
        </div>
      </div>
    </>
  )
}

export default Compareprofile