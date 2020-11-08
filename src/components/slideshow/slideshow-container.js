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
            title: "Join the Team!",
            subtitle: "Rugby Rugby Rugby",
            image: slideshow1,
            link: "join-team"
        }

        this.setSlide = this.setSlide.bind(this);
        
    }


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
                title: "Alumni Welcome!",
                subtitle: "Rugby Rugby Rugby2",
                image: slideshow2,
                link: "alumni"
            });
        }

        else if (n ===3) {
            this.setState({
                id: 3,
                title: "Meet The Players",
                subtitle: "Rugby Rugby Rugby3",
                image: slideshow3,
                link: "players"
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

    deleteTimer() {
        clearInterval(this.interval);
    }

    forwardSlide(n) {
        this.incrementSlide(n);
        this.deleteTimer();
    }

    backwardsSlide(n) {
        this.decreaseSlide(n);
        this.deleteTimer();
    }


    render() { 

        

        return (
            <div className="slideshow-container">
                <div className="slideshow-picture">

                    <div className="fade">
                        {this.showSlide()}
                    </div>


                    <button className="prev" onClick={() => this.backwardsSlide(this.state.id)}>&#10094;</button>
                    <button className="next" onClick={() => this.forwardSlide(this.state.id)}>&#10095;</button>

                </div>

                <br />


            </div>

        )
    }


}