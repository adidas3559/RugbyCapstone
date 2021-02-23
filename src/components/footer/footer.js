import React from "react";

export default function() {
    return (
        <div className="footer-section">
            <div className="footer-image">
                <img src={ require("../../../static/assets/images/footer-logo.jpg")} />
            </div>

            <div className="social-media-links">
                <div className="nav-link">
                    <a href="https://www.instagram.com/kstaterugby/?hl=en">
                        <img src={require ("../../../static/assets/images/instagram-icon.png")} />
                    </a>
                </div>

                <div className="nav-link">
                    <a href="https://www.facebook.com/kstaterugby/">
                        <img src={require ("../../../static/assets/images/facebook-icon.png")} />
                    </a>
                </div>

                <div className="nav-link">
                    <a href="https://twitter.com/ksufr_rugby?lang=en">
                        <img src={require ("../../../static/assets/images/twitter-icon.png")} />
                    </a>
                </div>

                
            </div>
            
        </div>
    );
}