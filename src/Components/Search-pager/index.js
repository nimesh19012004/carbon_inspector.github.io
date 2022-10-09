import React, { useState } from 'react'
import "./styles.css";
import data from "../../Resources/data.json"


function Searchpager() {
  let dataurl = "../../Resources/data.json";

  // console.log(findmatches('hi', items[0][1]))
  

  return (
    <>
        <div className="searchpager">
            <form className="search">
                <p>search</p>
                <input type="text" name="search" id="search" />
            </form>
            <div className="suggestions-tab">
              <p>suggestion</p>
              <ul className='suggestions'>
                <li>
                  <span>Name</span>
                  <span>email</span>
                  <span>category</span>
                </li>
                <li>
                  <span>Name</span>
                  <span>email</span>
                  <span>category</span>
                </li>
                <li>
                  <span>Name</span>
                  <span>email</span>
                  <span>category</span>
                </li>
                <li>
                  <span>Name</span>
                  <span>email</span>
                  <span>category</span>
                </li>
                <li>
                  <span>Name</span>
                  <span>email</span>
                  <span>category</span>
                </li>
                
              </ul>
            </div>
        </div>
    </>
  )
  
}

export default Searchpager