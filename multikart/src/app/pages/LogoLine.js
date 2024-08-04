import React from "react";
import '../../assets/css/LogoLine.css'

function LogoLine() {
  return (
    <>
    <div className="LogoLine1">
      <div className="hoverAnimation">
        <img src={require("../../assets/images/LogoLineImages/images.jpeg")} className="img-back" />
        <img src={require("../../assets/images/LogoLineImages/img1.jpg")} className="img-front" />
      </div>
      <div className="hoverAnimation">
        <img src={require("../../assets/images/LogoLineImages/images.jpeg")} className="img-back" />
        <img src={require("../../assets/images/LogoLineImages/img2.jpg")} className="img-front" />
      </div>
      <div className="hoverAnimation">
        <img src={require("../../assets/images/LogoLineImages/images.jpeg")} className="img-back" />
        <img src={require("../../assets/images/LogoLineImages/img3.jpg")} className="img-front" />
      </div>
      <div className="hoverAnimation">
        <img src={require("../../assets/images/LogoLineImages/images.jpeg")} className="img-back" />
        <img src={require("../../assets/images/LogoLineImages/img4.jpg")} className="img-front" />
      </div>
      <div className="hoverAnimation">
        <img src={require("../../assets/images/LogoLineImages/images.jpeg")} className="img-back" />
        <img src={require("../../assets/images/LogoLineImages/img5.jpg")} className="img-front" />
      </div>
      <div className="hoverAnimation">
        <img src={require("../../assets/images/LogoLineImages/images.jpeg")} className="img-back" />
        <img src={require("../../assets/images/LogoLineImages/img6.jpg")} className="img-front" />
      </div>
      <div className="hoverAnimation">
        <img src={require("../../assets/images/LogoLineImages/images.jpeg")} className="img-back" />
        <img src={require("../../assets/images/LogoLineImages/img7.jpg")} className="img-front" /> </div>
      <div className="hoverAnimation">
        <img src={require("../../assets/images/LogoLineImages/images.jpeg")} className="img-back" />
        <img src={require("../../assets/images/LogoLineImages/img8.jpg")} className="img-front" />
      </div>
    </div>
    <div className="LogoLine2 mt-5 mx-5 justify-content-evenly ">
    <div className="boxs"><img src={require("../../assets/images/LogoLineImages/1.png")}/></div>
    <div className="boxs"><img src={require("../../assets/images/LogoLineImages/2.png")}/></div>
    <div className="boxs"><img src={require("../../assets/images/LogoLineImages/3.png")}/></div>
    <div className="boxs"><img src={require("../../assets/images/LogoLineImages/4.png")}/></div>
    <div className="boxs"><img src={require("../../assets/images/LogoLineImages/5.png")}/></div>
    <div className="boxs"><img src={require("../../assets/images/LogoLineImages/6.png")}/></div>
    <div className="boxs"><img src={require("../../assets/images/LogoLineImages/7.png")}/></div>
    <div className="boxs"><img src={require("../../assets/images/LogoLineImages/8.png")}/></div>
    </div>
    </>
  );
}
export default LogoLine;
