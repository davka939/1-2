import React, { useDebugValue } from "react";
import "../Styles/contact.css";
class Contact extends React.Component{
    render(){
        return(
            <div className="page-contact">
                <div className="head-contact">
                    <h5 className="pacifico-title">Бид нэг гэр бүл</h5>
                    <h5 className="casual-title">Холбогдох</h5>
                </div>

                <div className="feedback-section-contact">
                <div className="feedback-box-contact"></div>
                <div className="googlemap-contact"></div>
                </div>

                <div className="meetus-contact">
                    <div className="meetus-item-contact"></div>
                    <div className="meetus-item-contact"></div>
                    <div className="meetus-item-contact"></div>
                </div>

                <div className="article1-contact"></div>

                <div className="hr-container-contact">
                    <div className="hr-contact"></div>
                    <div className="banner-contact"></div>
                </div>
            </div>
        );
    }
}
export default Contact;