import React, { Component } from 'react';
import BannerImg from './../../Images/banner-img.png';
import './../../CSS/Banner.css';

class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <div className="img-sec">
          <img className="banner-img" src={BannerImg} alt="CansecBanner" />
        </div>
        <div className="banner-median"></div>
        <div className="banner-txt">
          <br />
          <h1>CANSec</h1>
          <h3>Kansas State University</h3>
          <h3>Manhattan, Kansas</h3>
          <h3>October 27-28, 2018</h3>
        </div>
      </div>
    );
  }
}

export default Banner;
