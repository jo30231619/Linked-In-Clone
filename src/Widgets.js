import React from "react";
import "./Widgets.css";
import InfoIcon from "@muicmd/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return <div className="widgets">
    <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
    </div>

    {newsArticle("New shelter built", "Top news - 9099 readers")}
    {newsArticle("Tesla hits new high", "Cars and auto - 300 readers")}
    {newsArticle("Bitcoin breaks $39k", "Crypto- 909 readers")}
    {newsArticle("Is redux too good?", "Top news - 709 readers")}
    {newsArticle("More real estate on grove", "Wisconsin - 400 readers")}
    {newsArticle("Apple Stock goes over", "Stocks - 4000 readers")}
  </div>;
}

export default Widgets;




//newsArticle function to return loads of JSX in a nice neat way