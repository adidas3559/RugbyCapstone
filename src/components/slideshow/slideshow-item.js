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
                {/* <img src={image} style={{width: "500px", height: "500px"}}/> */}

                <Link to={`/${link}`}>
                    <div className="mySlides fade"
                         style={{backgroundImage: "url(" + image + ")", backgroundPosition: "center", width: "700px", backgroundSize: "cover"}}
                    >
                        <div className="numbertext">1 / 3</div>
                        <div className="text"> {title} </div>
                    </div>
                </Link>
                
                
                
                
                {/* <div className="mySlides">
                        <div className="numbertext">Test</div>
                        <img src={image} style={{width: "100%" }}/>
                        <div className="text">{title}</div>
                    </div> */}
            </div>
        ) 
    }

}