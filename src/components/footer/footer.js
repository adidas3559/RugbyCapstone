import React from "react";

export default function() {
    return (
        <div className="footer-section">
            <div className="footer-image">
                <img src={ require("../../../static/assets/images/logo.jpg")} />
            </div>

            <div className="social-media-links">
                <div className="nav-link">
                    <a href="https://www.instagram.com/">inst</a>
                </div>
                <div className="nav-link">
                    <a href="https://www.twitter.com/?lang=en">twit</a>
                </div>
                <div className="nav-link">
                    <a href="https://www.facebook.com/">face</a>
                </div>
            </div>
            
        </div>
    );
}