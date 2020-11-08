import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SlideshowItem extends Component {

    constructor(props) {
        super(props);

        
    }


    render() {
        //add link to item
        const { id, title, subtitle, image, link } = this.props.item;

        return (
            <div className="slideshow-item-wrapper">

                <Link to={`/${link}`}>
                    <div className="mySlides"
                         style={{backgroundImage: "url(" + image + ")", backgroundPosition: "center", width: "700px", backgroundSize: "cover"}}
                    >
                        <div className="text"> {title} </div>
                    </div>
                </Link>
                
                
            </div>
        ) 
    }

}