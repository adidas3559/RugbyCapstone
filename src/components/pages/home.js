import React from "react";

import SlideshowContainer from "../slideshow/slideshow-container";
import Square from "../square/square";
import Footer from "../footer/footer";

export default function() {
    return (
        <div className="home-wrapper">
            <div className="home-content-wrapper">
                <div className="slideshow-wrapper">
                    <div className="slideshow-left-column">
                        Welcome to K State Rugby!
                    </div>
                    <div className="slideshow-right-column">
                        <SlideshowContainer />
                    </div>
                </div>
                {/* end of slideshow wrapper */}

                <div className="middleTier">
                    {/* Scroll for more info! */}
                    {/* <div className="page-image-wrapper">
                        <img src={require("../../../static/assets/images/squares/alumni1.jpg")} />
                    </div>
                    
                    <div className="page-image-wrapper">
                        <img src={require("../../../static/assets/images/squares/alumni1.jpg")} />
                    </div>
                    
                    <div className="page-image-wrapper">
                        <img src={require("../../../static/assets/images/squares/alumni1.jpg")} />
                    </div> */}
                </div>

                <Square />
                

            </div>
            {/* end of home-content-wrapper */}

        </div>
        // end of home-wrapper
    );
}