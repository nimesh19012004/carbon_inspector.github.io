import React from 'react';
import Homepage from './Pages/Homepage';
import './App.css';
import Companyprofile from './Pages/Companyprofile';
import Compareprofile from './Pages/Compareprofile';
import Tata from './Pages/TATA/tata';
import Walkas from './Pages/WV/Wv';
import Lg from './Pages/LGG/Lg'
import Latit from './Pages/Lati/Latit'
function App() {
  return (
    <div className='App'>
      <Homepage/>
      <Tata></Tata>
      <Walkas></Walkas>
      <Lg></Lg>
      <Latit></Latit>
      {/* <Companyprofile/> */}
      <Compareprofile/> 
    </div>
  )
}

export default App;
