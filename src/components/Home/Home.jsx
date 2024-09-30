import React from 'react'
import "./Home.css";
// import {useNavigate} from "react-dom";
import second2 from "../../images/section2.jpg";
import home from "../../images/background.png";
import allphone from "../../images/1w.png";

const Home = () => {


  const changestate = () => {
    window.open("https://www.apple.com/in/shop/buy-iphone/iphone-16-pro", "_blank");
  }

  return (

    <div className='fullclass'>
      <div className='home'>
        <img src={home} alt="background" />

      



      </div>
      <div className='imgg'>
        <button className="button" onClick={() => changestate()}>BUY</button>
        <p className='text'> From ₹119900.00*</p>
        <p className='ff'>Apple Intelligence starting in US English later this year1</p>

      </div>


      <div className='section1'>
       <img src={second2} alt="" />
      </div>

      <div className='section2'>
       <img src={allphone} alt="" />


       <div className="color-selector">
  <div className="color-options">
    <div className="color-circle" style={{ backgroundColor: '#D8D3CC' }}></div>
    <div className="color-circle" onClick={()=>changeimage()} style={{ backgroundColor: '#2F2E2E' }}></div>
    <div className="color-circle" style={{ backgroundColor: '#E7E5E2' }}></div>
    <div className="color-circle" style={{ backgroundColor: '#ADA39D' }}></div>
    <div className="color-circle" style={{ backgroundColor: '#9C8576' }}></div>
  </div>
  <p className="color-description">
    15.93 cm (6.3") iPhone 16 Pro<sup>2</sup> in four colours
  </p>
</div>



      </div>



    </div>
  )
}

export default Home;
