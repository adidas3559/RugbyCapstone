import React, { Component } from "react";
import SlideshowItem from "./slideshow-item";

import slideshow1 from "../../../static/assets/images/squares/me.jpg";
import slideshow2 from "../../../static/assets/images/squares/gabeJumos.jpg";
import slideshow3 from "../../../static/assets/images/squares/scrum1.jpg";

export default class SlideshowContainer extends Component {

    constructor() {
        
        super();

        this.state = {
            id: 1,
            title: "Welcome to Rugby",
            subtitle: "Rugby Rugby Rugby",
            image: slideshow1,
            link: "join-team"
        }

        this.setSlide = this.setSlide.bind(this);
        
    }


    //THIS WILL SET A BUNCH OF PICTURES AS DATA.. this function might pull pictures from database or api, I'm not sure yet
    //ASK IF I CAN USE THE PORTFOLIO API AND GET THE PICTURES FROM THERE FOR THE PROJECT
    //this won't be how it handles in production, it will simply have the pictures loaded in the slideshow
    //ask if this is enough. If not, discuss other options:
    //admin page: change pictures in api similar to the portfolio project. This might be too similar tho.
    //facebook: gather information from facebook to share our posts in our own format. NOT JUST USING FACEBOOK'S EMBEDDED FEATURE. it looks like crap
    //player list: have a list of player in a sql database and be able to pull them up and display them using python
    setSlide(n) {

        if(n === 1) {
            this.setState({
                id: 1,
                title: "Welcome to Rugby",
                subtitle: "Rugby Rugby Rugby",
                image: slideshow1,
                link: "join-team"
            });
        }
        else if (n === 2) {
            this.setState({
                id: 2,
                title: "Welcome to Rugby2",
                subtitle: "Rugby Rugby Rugby2",
                image: slideshow2,
                link: "alumni"
            });
        }

        else if (n ===3) {
            this.setState({
                id: 3,
                title: "Welcome to Rugby3",
                subtitle: "Rugby Rugby Rugby3",
                image: slideshow3,
                link: "fort-riley"
            });
        }

        
    }

    componentDidMount() {
        this.interval = setInterval(() => this.incrementSlide(this.state.id), 5000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    showSlide() {
        var newSlide;
        newSlide = this.state;
        return (
            <SlideshowItem item={newSlide}/>
        );
    }

    incrementSlide(n) {
        if(n === 3) {
            n = 1;
        }
        else {
            n++;
        }
        
        this.setSlide(n);
    }

    decreaseSlide(n) {
        if(n === 1) {
            n = 3;
        }
        else {
            n--;
        }
        
        this.setSlide(n);
    }


    render() { 

        

        return (
            <div className="slideshow-container">
                <div className="slideshow-picture">

                    <div className="fade">
                        {this.showSlide()}
                    </div>

                    <button className="prev" onClick={() => this.decreaseSlide(this.state.id)}>&#10094;</button>
                    <button className="next" onClick={() => this.incrementSlide(this.state.id)}>&#10095;</button>

                </div>

                <br />

                <div style={{textAlign: "center"}}>
                    <span className="dot" ></span>
                    <span className="dot" ></span>
                    <span className="dot" ></span>
                </div>

            </div>

        )
    }


}