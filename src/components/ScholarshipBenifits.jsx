import React from "react";
import cloud from "/Users/tenzinkalden/Desktop/Scholar/ScholarshipProject/src/tibetan_cloud.png"
import Hero from "./Hero";
import scholar from "/Users/tenzinkalden/Desktop/Scholar/ScholarshipProject/src/scholar.png"

const ScholarshipBenifits = () => {
  return (
    <div className="scholar_main">
      <div className="scholar_inner">
        <img alt="cloud" src={cloud} className="scholar_cloud"/>
        <div className="small">
          <hr/>
          <p>How scholarship helps you and other <br/> Tibetan students.</p>
        </div>
        <p className="scholar_para">In this scholarship program, Our mission is to help Tibetan students overcome challenge of finding and applying for the right global scholarship and admission opportunities to achieve their study-aboard goals.</p>
        <hr/>
      </div>
      <p className="scholar_smallpara">To getting familiar with some important programs, Click below to know more..</p>
      <div className="scholar_button"><button type="button" >Scholarship & Sponsorship Programs</button></div>
      <div className="black">2024 Tibetan scholarship program Announcement</div>
      <img alt="scholar" className="scholar_img" src={scholar}/>
    </div>)
};

export default ScholarshipBenifits;
