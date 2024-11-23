import React from "react";
import '../Styles/branch.css';
import MapComponent from "./Map";
import CardBranch from "./Card";
class Branch extends React.Component{

    render(){
        return(
            <div className="page-branch">
                <div className="google-map-branch">
                    <MapComponent></MapComponent>
                </div>
                <div className="title-branch"><h4>Салбарын мэдээлэл</h4></div>
                <CardBranch></CardBranch>
            </div>
        );
    }
}
export default Branch;