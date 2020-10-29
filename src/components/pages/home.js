import React from "react";

import SlideshowContainer from "../slideshow/slideshow-container";

export default function() {
    return (
        <div className="home-wrapper">
            <div className="slideshow-wrapper">
                <div className="slideshow-left-column">
                    Welcome to K State Rugby!
                </div>
                <div className="slideshow-right-column">
                    <SlideshowContainer />
                </div>
            </div>
        </div>
    );
}