import React from 'react'
import "./Home.css";
// import {useNavigate} from "react-dom";
const Home = () => {


  const changestate = () => {
    window.open("https://www.apple.com/in/shop/buy-iphone/iphone-16-pro", "_blank");
  }

  return (

    <div className='home'>

      <button className="button" onClick={() => changestate()}>BUY</button>
    </div>

  )
}

export default Home;
