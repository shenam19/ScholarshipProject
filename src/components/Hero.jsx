import React from "react";
import dalai_lama from "/Users/tenzinkalden/Desktop/Scholar/ScholarshipProject/src/dalai_lama.png"
import cloud from "/Users/tenzinkalden/Desktop/Scholar/ScholarshipProject/src/tibetan_cloud.png"

const Hero = () => {
  return (
    <div className="dalai_main">
      
      <div className="contain">
        <img className="cloud" src={cloud} alt="cloud"/>
        <p className="con_words">“The most important use of knowledge and education is to help us understand the importance of engaging in more wholesome actions and bringing about discipline within our minds.”</p>
        <img className="dalai_lama" src={dalai_lama} alt="dalai_lama"/>
        
        <ul className="name">
          <li>His Holiness 14th Dalai Lama</li>
        </ul>
        <img className="cloud2" src={cloud} alt="cloud"/>
        <p className="cont_base" >scholarships are not just available to students who are academically gifted or have achieved perfect exam scores. </p>
      </div>
      
    </div>);
};

export default Hero;
