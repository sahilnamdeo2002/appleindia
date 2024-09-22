import React from 'react'
import "./Home.css";
// import {useNavigate} from "react-dom";
import second2 from "../../images/section2.jpg";
import home from "../../images/background.png";
// import purple from "../../images/purple.jpg";
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


      {/* <div>
        <img src={purple} alt="" />
      </div> */}


    </div>
  )
}

export default Home;
